import type { DiskType } from '@shared/enums/disk-type.enum';
import { Server } from 'mysql2/typings/mysql/lib/Server';
export const cleanCPUModel = (model: string): string => {
    return model
        .replace('Processor', '')
        .replace('CPU', '')
        .replace('(TM)', '™')
        .replace('(C)', '©')
        .replace('(R)', '®');
};

export enum ServerUserType {
    ADMIN = 'admin',
    LOCAL = 'local',
}

export interface ServerUser {
    username: string;
    type?: ServerUserType;
}

export enum ServerStorageIcon {
    NVME_GROUP = 'storage/nvme-group',
    SSD_GROUP = 'storage/ssd-group',
    HDD_GROUP = 'storage/hdd-group',
    NVME = 'storage/nvme',
    SSD = 'storage/ssd',
    HDD = 'storage/hdd',
    USB_KEY = 'storage/usb-key',
}
export enum ServerStatusSupported {
    SUPPORTED = 'Supported',
    UNSUPPORTED = 'Unsupported',
}
export enum ServerStatusIcons {
    CHECK = 'status/check',
    WARNING = 'status/warning',
}
export enum ServerFolderIcons {
    HIDDEN = 'files/folder-hidden',
    IMPORT = 'files/folder-import',
    PROTECTED = 'files/folder-protected',
    PUBLIC = 'files/folder-public',
    SYSTEM = 'files/folder-system',
}
export interface ServerPool {
    icon: ServerStorageIcon;
    label: string;
    description?: string;
    status: string;
    useable_storage?: string;
    drives: ServerDrive[];
}
export interface ServerStorage {
    pools: ServerPool[];
    unassigned: ServerPool;
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
    pool?: ServerPool;
    public?: boolean;
}
export interface ServerFolders {
    user: ServerFolder[];
    system: ServerFolder[];
}

export enum ServerDriveLabel {
    SOLID_STATE_DRIVE = 'Solid state drive',
    HARD_DISK_DRIVE = 'Hard disk drive',
    USB_DRIVE = 'USB drive',
}

export interface ServerDrive {
    details: string;
    label: ServerDriveLabel;
    type: DiskType;
    size: string;
    realsize: number;
    devname: string;
    icon: ServerStorageIcon;
    statusIcon?: ServerStatusIcons;
    status?: string;
    temperature?: number;
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
