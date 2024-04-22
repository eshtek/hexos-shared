import type { ServerFolder, ServerPool } from './server';

export type ResponseSuccess<T> = {
    success: true;
    data: T;
};

export type ResponseError<T> = {
    success: false;
    error: string;
    data?: T;
};
export type Response<T> = ResponseSuccess<T> | ResponseError<T>;

export interface RequestAuth {
    email: string;
    password: string;
}

export interface RequestNewAccount {
    name: string;
    email: string;
    password: string;
    clientip?: string;
}

export interface RequestClaimServer {
    password: string;
    hostId: string;
}

export interface ServerLocalUser {
    user: string;
    password: string;
}

export interface RequestFinishServer {
    pools: ServerPool[];
    user_folders: ServerFolder[];
    local_users: ServerLocalUser[];
}
