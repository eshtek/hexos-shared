import { EventEmitter } from 'events';
import type TypedEmitter from 'typed-emitter';
import extendedJson from 'ejson';
import { WebSocketStatus } from './websocket';
import {
    IncomingApiMessageType,
    OutgoingApiMessageType,
} from '@shared/enums/api-message-type.enum';
import type { DDPClientMeta, Data, EshtekJob } from './ddp';
import { generateUniqueId } from './common';
import type WebSocket from 'isomorphic-ws';

type Options = {
    socket: WebSocket;
    ddpVersion?: string;
    maintainCollections?: boolean;
};

type Events = {
    connected: (error?: Error) => void;
    failed: (error?: Error) => void;
    message: (message: string) => void;
};

const noop = () => {};

class Observer {
    readonly name!: string;
    readonly _id!: string;
    added!: (id: string, newFields: Record<string, unknown>) => void;
    updated!: () => void;
    changed!: (
        id: string,
        oldFields: Record<string, unknown>,
        clearedFields: string[],
        newFields: Record<string, unknown>,
    ) => void;
    removed!: (id: string, value: unknown) => void;
    stop!: () => void;
}

export class DDPClient extends (EventEmitter as new () => TypedEmitter<Events>) {
    private supportedDdpVersions = ['1'];
    private _callbacks: Record<string, (error?: Error, result?: unknown, name?: string) => void> =
        {};
    private _pendingMethods: Record<string, string> = {};
    private _updatedCallbacks: Record<string, () => void> = {};
    private _observers: {
        [key: string]: {
            [key: string]: Observer;
        };
    } = {};
    private collections: Record<string, Record<string, Record<string, unknown>>> = {};

    private ddpVersion: string;
    private maintainCollections: boolean;

    public clients = 0;
    public socket: WebSocket;
    public session: unknown;
    public meta!: DDPClientMeta;

    constructor(options: Options) {
        super();

        this.socket = options.socket;
        this.ddpVersion = options.ddpVersion ?? '1';
        this.maintainCollections = options.maintainCollections ?? true;

        if (this.maintainCollections) this.collections = {};
    }

    connect(connected: (error?: Error) => void) {
        if (connected) {
            this.on(WebSocketStatus.CONNECTED, () => {
                connected(undefined);
            });

            this.on(WebSocketStatus.FAILED, (error) => {
                connected(error);
            });
        }

        this._prepareHandlers();

        this._send({
            msg: OutgoingApiMessageType.Connect,
            version: this.ddpVersion,
            support: this.supportedDdpVersions,
        });
    }

    async connectPromise(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connect((error) => {
                if (error) return reject(error);
                resolve();
            });
        });
    }

    call(
        name: string,
        params: string[] | undefined,
        callback: (error: Error | undefined, result: unknown, method: string) => void,
        updatedCallback?: () => void,
    ) {
        const id = this._getNextId();

        this._callbacks[id] = (...args) => {
            if (callback) {
                callback.apply(this, args);
            }
            delete this._pendingMethods[id];
        };

        this._updatedCallbacks[id] = (...args) => {
            if (updatedCallback) {
                updatedCallback.apply(this, args);
            }
            delete this._pendingMethods[id];
        };

        this._pendingMethods[id] = name;

        this._send({
            msg: IncomingApiMessageType.Method,
            id,
            method: name,
            params,
        });
    }

    async callPromise<T>(name: string, params: string[] | undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.call(name, params, (error, result) => {
                if (error) return reject(error);
                resolve(result as T);
            });
        });
    }

    subscribe(name: string, params: Record<string, unknown>, callback: () => void) {
        const id = this._getNextId();

        if (callback) {
            this._callbacks[id] = callback;
        }

        this._send({
            msg: OutgoingApiMessageType.Sub,
            id: id,
            name: name,
            params: params,
        });

        return id;
    }

    unsubscribe(id: string) {
        this._send({
            msg: OutgoingApiMessageType.UnSub,
            id,
        });
    }

    observe(name: string, added?: () => void, updated?: () => void, removed?: () => void) {
        const id = this._getNextId();
        const observer = {
            get name() {
                return name;
            },
            get _id() {
                return id;
            },
            added: added ?? noop,
            updated: updated ?? noop,
            changed: noop,
            removed: removed ?? noop,
            stop: () => {
                this._removeObserver(observer);
            },
        } satisfies Observer;

        this._addObserver(observer);

        return observer;
    }

    close() {
        this.socket.close();
        this.removeAllListeners(WebSocketStatus.CONNECTED);
        this.removeAllListeners(WebSocketStatus.FAILED);
    }

    _prepareHandlers() {
        this.socket.on('close', (event) => {
            console.log('--> onclose: ', event);
            this._endPendingMethodCalls();
        });

        this.socket.on('message', (message: string) => {
            this._message(message);
        });
    }

    _send(data: Record<string, unknown>) {
        this.socket.send(extendedJson.stringify(data));
    }

    _endPendingMethodCalls() {
        const ids = Object.keys(this._pendingMethods);
        this._pendingMethods = {};

        for (const id of ids) {
            if (this._callbacks[id]) {
                this._callbacks[id](new Error('DDPClient: Disconnected from DDP server'));
                delete this._callbacks[id];
            }

            if (this._updatedCallbacks[id]) {
                this._updatedCallbacks[id]();
                delete this._updatedCallbacks[id];
            }
        }
    }

    _message(message: string) {
        if (this.clients === 0) {
            //console.dir({ action: '--> server: ', ...JSON.parse(message) });
        }

        const data = extendedJson.parse(message) as {
            msg: IncomingApiMessageType;
            session: unknown;
            id: string;
            subs: string[];
            error?: Error;
            result: unknown;
            methods: string[];
            collection: string;
            fields: Record<string, unknown>;
            cleared?: string[];
        };
        if (!data.msg) return;

        switch (data.msg) {
            case IncomingApiMessageType.Connected:
                this.session = data.session;
                this.emit(WebSocketStatus.CONNECTED);
                break;

            case IncomingApiMessageType.Failed:
                this.emit(WebSocketStatus.FAILED);
                break;

            case IncomingApiMessageType.Pong:
                this._send({ msg: OutgoingApiMessageType.Ping, id: data.id });
                break;

            case IncomingApiMessageType.Result: {
                const cb = this._callbacks[data.id];

                if (cb) {
                    cb(data.error, data.result, this._pendingMethods[data.id]);
                    delete this._callbacks[data.id];
                }

                break;
            }

            case IncomingApiMessageType.Updated:
                data.methods.forEach((method) => {
                    const cb = this._updatedCallbacks[method];
                    if (cb) {
                        cb();
                        delete this._updatedCallbacks[method];
                    }
                });
                break;

            case IncomingApiMessageType.NoSub: {
                const cb = this._callbacks[data.id];

                if (cb) {
                    cb(data.error);
                    delete this._callbacks[data.id];
                }
                break;
            }

            case IncomingApiMessageType.Added: {
                if (this.maintainCollections && data.collection) {
                    const name = data.collection;
                    const id = data.id;

                    if (!this.collections[name]) this.collections[name] = {};
                    if (!this.collections[name][id]) this.collections[name][id] = {};

                    this.collections[name][id]._id = id;

                    if (data.fields) {
                        Object.keys(data.fields).forEach((key) => {
                            this.collections[name][id][key] = data.fields[key];
                        });
                    }

                    if (this._observers[name]) {
                        for (const observer of Object.values(this._observers[name])) {
                            observer.added(id, this.collections[name][id]);
                        }
                    }
                }
                break;
            }

            case IncomingApiMessageType.Changed: {
                if (this.maintainCollections && data.collection) {
                    const name = data.collection;
                    const id = data.id;

                    if (!this.collections[name]) {
                        return;
                    }

                    if (!this.collections[name][id]) {
                        return;
                    }

                    const oldFields: Record<string, unknown> = {};
                    const clearedFields = data.cleared ?? [];
                    const newFields: Record<string, unknown> = {};

                    if (data.fields) {
                        Object.keys(data.fields).forEach((key) => {
                            oldFields[key] = this.collections[name][id][key];
                            newFields[key] = data.fields[key];
                            this.collections[name][id][key] = data.fields[key];
                        });
                    }

                    if (data.cleared) {
                        for (const value of data.cleared) {
                            delete this.collections[name][id][value];
                        }
                    }

                    if (this._observers[name]) {
                        for (const observer of Object.values(this._observers[name])) {
                            observer.changed(id, oldFields, clearedFields, newFields);
                        }
                    }
                }

                break;
            }

            case IncomingApiMessageType.Removed: {
                if (this.maintainCollections && data.collection) {
                    const name = data.collection;
                    const id = data.id;

                    if (!this.collections[name] || !this.collections[name][id]) {
                        return;
                    }

                    const oldValue = this.collections[name][id];

                    delete this.collections[name][id];

                    if (this._observers[name]) {
                        for (const observer of Object.values(this._observers[name])) {
                            observer.removed(id, oldValue);
                        }
                    }
                }

                break;
            }

            case IncomingApiMessageType.Ready: {
                for (const id of data.subs) {
                    const cb = this._callbacks[id];
                    if (cb) {
                        cb();
                        delete this._callbacks[id];
                    }
                }
                break;
            }

            default:
                break;
        }
    }

    _getNextId() {
        return generateUniqueId();
    }

    _addObserver(observer: Observer) {
        if (!this._observers[observer.name]) this._observers[observer.name] = {};
        this._observers[observer.name][observer._id] = observer;
    }

    _removeObserver(observer: Observer) {
        if (!this._observers[observer.name]) return;
        delete this._observers[observer.name][observer._id];
    }
    public updateMethodData(name: string, _data: unknown) {
        const data: Data = {
            name,
            data: _data,
        };
        if (this.meta.method_data.some((d) => d.name === name)) {
            this.meta.method_data = this.meta.method_data.map((d) => (d.name === name ? data : d));
        } else {
            this.meta.method_data.push(data);
        }
    }
    public getMethodData = (name: string): Data | undefined => {
        return this.meta.method_data.find((d) => d.name === name);
    };

    public updateJob(job: EshtekJob) {
        if (this.meta.jobs.some((j) => j.id === job.id)) {
            this.meta.jobs = this.meta.jobs.map((j) =>
                j.id === job.id && j.referenceId === job.referenceId ? job : j,
            );
        } else {
            this.meta.jobs.push(job);
        }
    }
    public getJob = (id: number | string): EshtekJob | undefined => {
        return this.meta.jobs.find((j) => j.id === id);
    };
    public getJobByReferenceId = (id: string | number): EshtekJob | undefined => {
        return this.meta.jobs.find((j) => j.referenceId && j.referenceId === id);
    };
}
