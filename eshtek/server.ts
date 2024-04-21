import type { DiskType } from '@shared/enums/disk-type.enum';
export const cleanCPUModel = (model: string): string => {
    return model
        .replace('Processor', '')
        .replace('CPU', '')
        .replace('(TM)', '™')
        .replace('(C)', '©')
        .replace('(R)', '®');
};

export enum ServerStatusSupported {
    SUPPORTED = 'Supported',
    UNSUPPORTED = 'Unsupported',
}
export enum ServerStatusIcons {
    CHECK = 'status/check',
    WARNING = 'status/warning',
}

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
    configured: ServerRecord[];
}

export interface ServerRecord {
    hostid: string;
    lanip?: string;
    nodehost?: string;
    connected?: 'N' | 'Y';
    servername?: string;
    wizardcompleted?: Date | string;
    lastconnected?: Date | string;
}

export interface ServerFolder {
    icon: string;
    label: string;
    pool: string;
    public?: boolean;
    active?: boolean;
}

export enum ServerDriveLabel {
    SOLID_STATE_DRIVE = 'Solid state drive',
    HARD_DISK_DRIVE = 'Hard disk drive',
    USB_DRIVE = 'USB drive',
}

export enum ServerDriveIcon {
    NVME = 'storage/nvme',
    SSD = 'storage/ssd',
    HDD = 'storage/hdd',
    USB_KEY = 'storage/usb-key',
}

export interface ServerDrive {
    details: string;
    label: ServerDriveLabel;
    type: DiskType;
    size: number;
    devname: string;
    icon: ServerDriveIcon;
    statusIcon?: string; // status/warning
    status?: string;
    temeprature?: number;
}

export enum ServerStatusType {
    SYSTEM_OVERVIEW = 'System Overview',
    SYSTEM = 'System',
    STORAGE = 'Storage',
    VIRTUALIZATION = 'Virtualization',
    APPLICATIONS = 'Applications',
}

export interface ServerStatusBasics {
    type: ServerStatusType;
    details?: string;
    status?: ServerStatusSupported;
    statusIcon?: ServerStatusIcons;
}
export interface ServerSystemDataSystem extends ServerStatusBasics {
    //label: 'System';
    type: ServerStatusType.SYSTEM;
    data: {
        processor?: string;
        memory?: string;
        active?: boolean;
    };
}
export interface ServerSystemDataStorage extends ServerStatusBasics {
    type: ServerStatusType.STORAGE;
    data: {
        drives?: ServerDrive[];
    };
}
export interface ServerSystemDataEmpty extends ServerStatusBasics {
    type: ServerStatusType.VIRTUALIZATION | ServerStatusType.APPLICATIONS;
}

export type ServerSystemData =
    | ServerSystemDataSystem
    | ServerSystemDataStorage
    | ServerSystemDataEmpty; // TODO: Add more here if necessary not sure if that will be or this can be consolidated in some way yet

export interface ServerSystem extends ServerStatusBasics {
    type: ServerStatusType.SYSTEM_OVERVIEW;
    data?: ServerSystemData[];
}
