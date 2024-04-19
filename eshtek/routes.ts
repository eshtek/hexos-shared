export interface GenericResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
export interface AuthRequest {
    email: string;
    password: string;
}
export interface NewAccountRequest {
    name: string;
    email: string;
    password: string;
    clientip?: string;
}
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
