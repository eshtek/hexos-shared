import type { VmDevice, VmDisplayDevice } from '../truenas/webui/interfaces/vm-device.interface';
import type { ServerSystemAudio, ServerSystemGPU, ServerSystemPCI, ServerSystemUSB } from './server';

export enum VMCreateType {
    Generic = 'generic',
    VirtualPC = 'virtual_pc',
    VirtualServer = 'virtual_server',
    ExistingVM = 'existing_vm',
}

export enum VMType {
    Windows = 'windows',
    Ubuntu = 'ubuntu',
    FreeBSD = 'freebsd',
    Chrome = 'chrome',
    Custom = 'custom',
}

export enum VMIcons {
    Windows = 'vms/windows',
    Ubuntu = 'vms/ubuntu',
    FreeBSD = 'vms/freebsd',
    Chrome = 'vms/chrome',
    Custom = 'vms/custom',
}

export enum VMStatus {
    Started = 'started',
    Starting = 'starting',
    Deploying = 'deploying',
    Stopped = 'stopped',
    Stopping = 'stopping',
}

export const translateVMStatus = (status: VMStatus) => {
    const { t } = useI18n();

    switch (status) {
        case VMStatus.Started:
            return t('Running');
        case VMStatus.Starting:
            return t('Starting');
        case VMStatus.Deploying:
            return t('Deploying');
        case VMStatus.Stopped:
            return t('Stopped');
        case VMStatus.Stopping:
            return t('Stopping');
        default:
            return status;
    }
};

export enum VMPerformanceModes {
    Basic = 'basic',
    Enhanced = 'enhanced',
}

export enum VMSnapshotTypes {
    MANUAL = 'manual',
    SCHEDULED = 'scheduled',
    EVENT = 'event',
}

export enum VMScheduleFrequency {
    HOURLY = 'hourly',
    DAILY = 'daily',
    WEEKLY = 'weekly',
    MONTHLY = 'monthly',
}

export enum VMEventTypes {
    SHUTDOWN = 'shutdown',
    REBOOT = 'reboot',
}

export interface VMSnapshotManualSettings {
    type: VMSnapshotTypes.MANUAL;
}

export interface VMSnapshotScheduledSettings {
    type: VMSnapshotTypes.SCHEDULED;
    schedule_frequency: VMScheduleFrequency;
}

export interface VMSnapshotEventSettings {
    type: VMSnapshotTypes.EVENT;
    events: VMEventTypes[];
}

export type VMSnapshotSettings = VMSnapshotManualSettings | VMSnapshotScheduledSettings | VMSnapshotEventSettings;

export interface VMInstallationMedia {
    path: string;
    name: string;
}

export interface VMSettings {
    os: VMType;
    performance: VMPerformanceModes;
    connect_directly: boolean;
    autostart: boolean;
    snapshot_settings: VMSnapshotSettings;
    processors?: number;
    memory?: number;
    storage?: number;
    gpu?: ServerSystemGPU;
    audio?: ServerSystemAudio;
    pci?: ServerSystemPCI[];
    usb?: ServerSystemUSB[];
    mouse?: ServerSystemPCI;
    keyboard?: ServerSystemPCI;
    installation_media?: VMInstallationMedia;
    installation_media_virtio?: VMInstallationMedia;
}

export interface VMSettingsSuggested extends VMSettings {
    suggested: {
        processors: number;
        processors_minimum: number;
        processors_available: number;
        memory: number;
        memory_minimum: number;
        memory_available: number;
        storage: number;
        storage_minimum: number;
        storage_available: number;
        gpu?: ServerSystemGPU;
        audio?: ServerSystemAudio;
        pci?: ServerSystemPCI[];
        usb?: ServerSystemUSB[];
        mouse?: ServerSystemPCI;
        keyboard?: ServerSystemPCI;
        installation_media_available: VMInstallationMedia[];
        installation_media_virtio_available: VMInstallationMedia[];
    };
}

export interface VMBasics {
    id?: string;
    name: string;
    description: string;
    settings?: VMSettings;
}

export interface VMInfo extends VMBasics {
    id: string;
    status: VMStatus;
}
export interface VMInfoDetailed extends VMInfo {
    id: string;
    data: number[][];
    display_devices?: VmDisplayDevice[];
}

export enum VMSError {
    VM_ENGINE_NOT_RUNNING = 'VM_ENGINE_NOT_RUNNING',
}

export enum VMSWarning {
    NO_GPU_AVAILABLE = 'NO_GPU_AVAILABLE',
    INSUFFICIENT_MEMORY = 'INSUFFICIENT_MEMORY',
}

export enum VMSActions {
    RESTART_VM_ENGINE = 'RESTART_VM_ENGINE',
}

export interface VMSHealth {
    healthy: boolean;
    errors: VMSError[];
    warnings: VMSWarning[];
    actions_available: VMSActions[];
}
