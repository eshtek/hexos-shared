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

// TODO : Eric: These will be reworked/moved in the next push qhen I rework those routes to be consistent with the new Request/Response typing but leaving them here for now to avoid breaking the build
export interface ServerStepDataStoragePool {
    icon: string;
    label: string;
    description: string;
    status: string;
    active?: boolean;
    usable_storage: string;
    drives: {
        icon: string;
        label: string;
        size: string;
        devname: string;
    }[];
}

export interface ServerStepDataStorageUnassigned {
    label: string;
    active?: boolean;
    drives: {
        icon: string;
        label: string;
        size: string;
        devname: string;
    }[];
}

export interface ServerStepDataFoldersFolder {
    icon: string;
    label: string;
    pool: string;
    public?: boolean;
    active?: boolean;
}
