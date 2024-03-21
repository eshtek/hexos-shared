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
