/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { IncomingApiMessageType } from '@shared/enums/api-message-type.enum';
import type { ApiCallMethod } from '@shared/interfaces/api/api-call-directory.interface';
import type { ApiEventDirectory } from '@shared/interfaces/api/api-event-directory.interface';
import type { ApiJobMethod } from '@shared/interfaces/api/api-job-directory.interface';
import type { WebSocketError } from '@shared/interfaces/websocket-error.interface';

export interface PongMessage {
    id: string;
    msg: IncomingApiMessageType.Pong;
}

export interface SubscriptionReadyMessage {
    msg: IncomingApiMessageType.Ready;
    subs: string[];
}

export interface ResultMessage<T = unknown> {
    id: string;
    msg: IncomingApiMessageType.Result;
    result?: T;
    error?: WebSocketError;
}

export interface ConnectedMessage {
    msg: IncomingApiMessageType.Connected;
    session: string;
}

export interface ApiEvent<T = unknown> {
    collection: ApiCallMethod | ApiJobMethod | ApiEventMethod;
    fields: T;
    id: number | string;
    msg:
        | IncomingApiMessageType.Changed
        | IncomingApiMessageType.Added
        | IncomingApiMessageType.Removed
        | IncomingApiMessageType.NoSub;
}

export type ApiEventMethod = keyof ApiEventDirectory;
export type ApiEventResponseType<K extends ApiEventMethod = ApiEventMethod> =
    ApiEventDirectory[K]['response'];

export type ApiEventTyped<
    M extends ApiEventMethod = ApiEventMethod,
    T extends ApiEventResponseType<M> = ApiEventResponseType<M>,
> = ApiEvent<T>;

export type IncomingWebSocketMessage =
    | PongMessage
    | SubscriptionReadyMessage
    | ResultMessage
    | ConnectedMessage
    | ApiEvent;
