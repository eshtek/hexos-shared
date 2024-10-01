import type { ServerPool, ServerUser, ServerUserType } from './server';
import type { VMBasics, VMSettings } from './vms';

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

export interface PaginationMeta {
    total_items: number;
    total_pages: number;
    current_page: number;
    page_size: number;
}

export interface PaginationResult<T> {
    total: number;
    data: T[];
}

export interface ResponsePaginatedSuccess<T> {
    success: true;
    data: T[];
    meta: PaginationMeta;
}
export type ResponsePaginated<T> = ResponsePaginatedSuccess<T> | ResponseError<T>;

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
    name: string;
}

export interface RequestFeedback {
    email: string;
    message: string;
}

export interface RequestId {
    id: string;
}

export interface RequestDeleteFolder {
    pool: string;
    dataset: string;
}

export interface RequestVMCreate extends VMBasics {
    settings: VMSettings;
}

export interface RequestSetting {
    value: string;
    json?: boolean;
}
