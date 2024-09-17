import type { DiskType } from '@/shared/truenas/webui/enums/disk-type.enum';
import type { VmPassthroughDeviceChoice, VmUsbPassthroughDeviceChoice } from '@shared/truenas/webui/interfaces/vm-device.interface';

export const cleanCPUModel = (model: string): string => {
    return model
        .replace('Processor', '')
        .replace('CPU', '')
        .replace('(TM)', '™')
        .replace('(C)', '©')
        .replace('(R)', '®');
};

export const cleanVendor = (vendor: string): string => {
    return vendor
        .replace('Advanced Micro Devices', 'AMD')
        .replace('Samsung Electronics Co.', 'Samsung')
        .replace(' Corporation', '')
        .replace(' Semiconductor ', '')
        .replace(' Technology Group Ltd.', '')
        .replace(' System, Inc.', '')
        .replace(' Systems, Inc.', '')
        .replace(' Co., Ltd.', '')
        .replace(', Ltd.', '')
        .replace(', Ltd', '')
        .replace(', Inc.', '');
};

export const cleanProduct = (product: string): string => {
    return product
        .replace(' PCI Express', ' PCIe')
        .replace(' High Definition ', ' HD ');
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
    FOLDER = 'files/folder',
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    PUBLIC = 'files/folder',
    SYSTEM = 'files/folder-system',
    APPLICATIONS = 'files/folder-applications',
    VIRTUALIZATION = 'files/folder-virtualization',
}

export interface ServerSetting {
    id: string;
    name: string;
    hostid: string | null;
    created: string;
    updated: string;
    value: string;
    json: boolean;
}

export enum ServerPoolType {
    SPEED= 'speed',
    STORAGE= 'storage',
    UNKNOWN= 'unknown',
}

export interface ServerPool {
    icon: ServerStorageIcon;
    type: ServerPoolType,
    label: string;
    description?: string;
    status: string;
    useable_storage?: string;
    healthy?: boolean;
    healthDetails?: string;
    used_storage?: string;
    used_percentage?: number;
    drives: ServerDrive[];
}
export interface ServerStorage {
    pools: ServerPool[];
    unassigned: ServerPool;
}

export interface Servers {
    claimed: ServerRecord[];
    configured: ServerRecord[];
}

export interface ServerRecord {
    hostid: string;
    email?: string;
    apikey?: string;
    lanip?: string;
    wanip?: string;
    nodehost?: string;
    connected?: 'N' | 'Y';
    servername?: string;
    wizardcompleted?: Date | string;
    lastconnected?: Date | string;
    truenas_version?: string;
}

export enum ServerAccess {
    PRIVATE = 'private',
    PUBLIC = 'public',
}

export enum FileAccess {
    READ = 'read',
    WRITE = 'write',
    EXECUTE = 'execute',
}

export interface ServerFolderUser {
    access: FileAccess[];
    user: ServerUser;
}

export interface ServerFolder {
    label: string;
    access: ServerAccess;
    pool?: ServerPool;
    users?: ServerFolderUser[];
}

export interface ServerFolders {
    user: ServerFolder[];
    system: ServerFolder[];
}

export enum ServerDriveLabel {
    SOLID_STATE_DRIVE = 'Solid state drive',
    HARD_DISK_DRIVE = 'Hard disk drive',
    USB_DRIVE = 'USB drive',
    NVME_DRIVE = 'NVMe drive',
}

export interface ServerDrive {
    details: string;
    model: string;
    serial: string;
    label: ServerDriveLabel;
    type: DiskType;
    size: string;
    realsize: number;
    devname: string;
    icon: ServerStorageIcon;
    statusIcon?: ServerStatusIcons;
    status?: string;
    temperature?: number;
    healthy?: boolean;
    healthDetails?: string;
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

export interface ServerSystemDevice {
    name: string;
    guid: string;
    data: VmPassthroughDeviceChoice | VmUsbPassthroughDeviceChoice;
}

export interface ServerSystemGPU extends ServerSystemDevice {}
export interface ServerSystemAudio extends ServerSystemDevice {}
export interface ServerSystemUSB extends ServerSystemDevice {}
export interface ServerSystemPCI extends ServerSystemDevice {}

export interface ServerSystemDevices {
    gpu?: ServerSystemGPU[];
    audio?: ServerSystemAudio[];
    usb?: ServerSystemUSB[];
    pci?: ServerSystemPCI[];
}

export interface ServerSystem extends ServerStatusBasics {
    type: ServerStatusType.SYSTEM_OVERVIEW;
    data?: ServerSystemData[];
}

export interface ServerMemoryInfo {
    total: number;
    in_use: number;
    cached: number;
    data: number[][];
}

export interface ServerNetworkInterface {
    id: string;
    icon: string;
    name: string;
    in: number;
    out: number;
}
export interface ServerNetworkInterfaceDetailed extends ServerNetworkInterface {
    icon?: string;
    data: number[][];
}

export interface ServerProcessorInfo {
    base_clock: string;
    current_clock: string;
    temperature: string;
    uptime: string;
    usage_percent: string;
    data: number[][];
}

export interface ServerHealth {
    healthy: boolean;
    /*
    TODO : Q3 objective
    overview: string;
    system_temperatures: {
        processor: string;
        drives: {
            label: string;
            temperature: string;
        }[];
    };
    smart_status: {
        overview: string;
    }[];
    resources: {
        label: string;
        usage: string;
    }[];
    storage_utilization: {
        label: string;
        usage: string;
    }[];
    ups_utilization: {
        label: string;
        usage: string;
    }[];
    apps: {
        label: string;
        details: string;
    }[];
    vms: {
        label: string;
        details: string;
    }[];*/
}
