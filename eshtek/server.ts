export interface Server {
    icon: string;
    label: string;
    description?: string;
    status: string;
    active?: boolean;
    usable_storage?: string;
    drives: ServerDrive[];
}
export interface Servers {
    claimed: ServerRecord[];
    pending: ServerRecord[];
}

export interface ServerRecord {
    hostid: string;
    lanip?: string;
    nodehost?: string;
    connected?: 'N' | 'Y';
    servername?: string;
    wizardcompleted?: Date | string;
}

export interface ServerFolder {
    icon: string;
    label: string;
    pool: string;
    public?: boolean;
    active?: boolean;
}

export interface ServerDrive {
    icon: string;
    label: string;
    size: string;
    devname: string;
}
