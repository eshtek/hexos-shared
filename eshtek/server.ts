/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DiskType } from '../truenas/webui/enums/disk-type.enum';
import type { FileType } from '../truenas/webui/enums/file-type.enum';
import type { NetworkInterfaceType } from '../truenas/webui/enums/network-interface.enum';
import type { PoolStatus } from '../truenas/webui/enums/pool-status.enum';
import type { TopologyItemStatus } from '../truenas/webui/enums/vdev-status.enum';
import type { AppsHealth } from './apps';
import type { VMSHealth } from './vms';

export const cleanCPUModel = (model: string): string => {
    return model.replace('Processor', '').replace('CPU', '').replace('(TM)', '™').replace('CoreTM', 'Core™').replace('(C)', '©').replace('(R)', '®');
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
    return product.replace(' PCI Express', ' PCIe').replace(' High Definition ', ' HD ');
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
    REMOVED = 'storage/missing',
}
export enum ServerStatusSupported {
    SUPPORTED = 'Supported',
    WARNING = 'Warning',
    ERROR = 'Error',
}
export enum ServerStatusIcons {
    CHECK = 'status/check',
    WARNING = 'status/warning',
    ERROR = 'status/error',
    INFO = 'status/info',
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
    PERFORMANCE = 'performance',
    CAPACITY = 'capacity',
    UNKNOWN = 'unknown',
}

export enum ServerPoolError {
    POOL_OFFLINE = 'POOL_OFFLINE',
    UNKNOWN = 'UNKNOWN',
}
export enum ServerPoolWarning {
    POOL_IS_AT_OR_NEAR_CAPACITY = 'POOL_IS_AT_OR_NEAR_CAPACITY',
}

export interface ServerPoolBasics {
    type: ServerPoolType;
    disks_type: DiskType;
    name: string;
}

export interface ServerPool extends ServerPoolBasics {
    id?: number;
    guid?: string;
    path: string;
    errors?: ServerPoolError[];
    warnings?: ServerPoolWarning[];
    useable_storage?: string;
    healthy?: boolean;
    status: PoolStatus;
    status_detail: string;
    used_storage?: string;
    used_percentage?: number;
    drives: ServerDrive[];
}
export interface ServerPoolNew extends ServerPoolBasics {
    devnames: string[];
}

export interface ServerStorage {
    pools: ServerPool[];
    unassigned: ServerDrive[];
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

export interface ServerFile {
    name: string;
    path: string;
    type: FileType;
}

export interface ServerFolderUser {
    access: FileAccess[];
    user: ServerUser;
}

export enum ServerFolderUseType {
    APP = 'app',
    VM = 'vm',
}

export interface ServerFolderUse {
    type: ServerFolderUseType;
    id: string;
}
export interface ServerFolder {
    label: string;
    access: ServerAccess;
    pool?: ServerPool;
    users?: ServerFolderUser[];
    used_by?: ServerFolderUse[];
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

export enum ServerDriveWarning {
    SMR = 'SMR',
    EXISTING_DATA = 'EXISTING_DATA',
}
export enum ServerDriveError {
    SMART = 'SMART',
    IO = 'IO',
    REMOVED = 'REMOVED',
}

export interface ServerDrive {
    guid: string;
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
    status?: TopologyItemStatus;
    warnings?: ServerDriveWarning[];
    errors?: ServerDriveError[];
    existingData?: boolean;
    temperature?: number;
    healthDetails?: TopologyItemStatus;
}

export interface ServerDrivesGroupedBySize {
    [key: string]: ServerDrive[];
}

export enum ServerStatusType {
    SYSTEM_OVERVIEW = 'System Overview',
    SYSTEM = 'System',
    STORAGE = 'Storage',
    VIRTUALIZATION = 'Virtualization',
    APPLICATIONS = 'Applications',
}

export enum ServerDeviceError {
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}
export enum ServerDeviceWarning {
    UNKOWN_WARNING = 'UNKNOWN_WARNING',
}

export enum ServerDeviceActions {
    IGNORE_DEVICE = 'IGNORE_DEVICE',
}

export interface ServerDeviceHealth {
    healthy: boolean;
    errors: ServerDeviceError[];
    warnings: ServerDeviceWarning[];
    actions_available: ServerDeviceActions[];
}

export interface ServerStatusBasics {
    type: ServerStatusType;
    details?: string;
    status?: ServerStatusSupported;
    statusIcon?: ServerStatusIcons;
}

export interface ServerSystemDataSystemDevice {
    details: string;
    data?: any;
    status: ServerStatusSupported;
    statusIcon: ServerStatusIcons;
    health: ServerDeviceHealth;
}

export interface ServerSystemDataSystemDeviceData {
    processor?: ServerSystemDataSystemDevice;
    memory?: ServerSystemDataSystemDevice;
    motherboard?: ServerSystemDataSystemDevice;
    gpu?: ServerSystemDataSystemDevice[];
    networking?: ServerSystemDataSystemDevice[];
}

export interface ServerSystemDataSystem extends ServerStatusBasics {
    //label: 'System';
    type: ServerStatusType.SYSTEM;
    data: ServerSystemDataSystemDeviceData;
    health: ServerHealth;
}
export interface ServerSystemDataStorage extends ServerStatusBasics {
    type: ServerStatusType.STORAGE;
    data: {
        drives?: ServerDrive[];
    };
}
export interface ServerSystemDataApplications extends ServerStatusBasics {
    type: ServerStatusType.APPLICATIONS;
    health: AppsHealth;
}
export interface ServerSystemDataVirtualization extends ServerStatusBasics {
    type: ServerStatusType.VIRTUALIZATION;
    health: VMSHealth;
}
export interface ServerSystemDataEmpty extends ServerStatusBasics {
    type: ServerStatusType.VIRTUALIZATION | ServerStatusType.APPLICATIONS;
}

export type ServerSystemData =
    | ServerSystemDataSystem
    | ServerSystemDataStorage
    | ServerSystemDataApplications
    | ServerSystemDataVirtualization
    | ServerSystemDataEmpty;

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

export interface ServerGlobalNetwork {
    name: string;
    dns1: string;
    dns2: string;
    dns3: string;
}

export enum ServerNetworkInterfaceMode {
    DHCP = 'DHCP',
    MANUAL = 'MANUAL',
}

export interface ServerNetworkInterface {
    id: string;
    name: string;
    type: NetworkInterfaceType;
    in: number;
    out: number;
}
export interface ServerNetworkInterfaceConfiguration {
    ipv4: string;
    ipv6: string;
    description: string;
    mode: ServerNetworkInterfaceMode;
}
export interface ServerNetworkInterfaceWithConfiguration extends ServerNetworkInterface {
    configuration: ServerNetworkInterfaceConfiguration;
    supported_media: unknown[];
}
export interface ServerNetworkInterfaceDetailed extends ServerNetworkInterfaceWithConfiguration {
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

export enum ServerHealthError {
    SYSTEM_TEMPERATURES = 'SYSTEM_TEMPERATURES',
    DRIVE_ERRORS_PRESENT = 'DRIVE_ERRORS_PRESENT',
    POOL_ERRORS_PRESENT = 'POOL_ERRORS_PRESENT',
}
export enum ServerHealthWarning {
    ONE_OR_MORE_POOL_AT_OR_NEAR_CAPACITY = 'ONE_OR_MORE_POOL_AT_OR_NEAR_CAPACITY',
}

export enum ServerActions {
    POOL_EXPAND = 'POOL_EXPAND',
    DRIVE_REPLACE = 'DRIVE_REPLACE',
    SYSTEM_UPDATE = 'SYSTEM_UPDATE',
}

export interface ServerHealth {
    healthy: boolean;
    errors: ServerHealthError[];
    warnings: ServerHealthWarning[];
    actions_available: ServerActions[];
}
