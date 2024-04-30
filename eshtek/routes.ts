import type { ServerFolder, ServerPool, ServerUser, ServerUserType } from './server';

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

export interface RequestUser extends ServerUser {
    password: string;
    type: ServerUserType;
}

export interface RequestFinishServer {
    hostId: string;
    pools: ServerPool[];
    user_folders: ServerFolder[];
    users: RequestUser[];
    name: string;
}
