import type {
    VmDevice,
    VmDisplayDevice,
} from '@shared/truenas/webui/interfaces/vm-device.interface';
import type {
    ServerSystemAudio,
    ServerSystemGPU,
    ServerSystemPCI,
    ServerSystemUSB,
} from './server';

export enum VMCreateType {
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

export type VMSnapshotSettings =
    | VMSnapshotManualSettings
    | VMSnapshotScheduledSettings
    | VMSnapshotEventSettings;

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
    installation_media?: string;
}

export interface VMSettingsSuggested extends VMSettings {
    suggested: {
        processors: number;
        processorsMinimum: number;
        processorsAvailable: number;
        memory: number;
        memoryMinimum: number;
        memoryAvailable: number;
        storage: number;
        storageMinimum: number;
        storageAvailable: number;
        gpu?: ServerSystemGPU;
        audio?: ServerSystemAudio;
        pci?: ServerSystemPCI[];
        usb?: ServerSystemUSB[];
        mouse?: ServerSystemPCI;
        keyboard?: ServerSystemPCI;
    };
}

export interface VMBasics {
    id?: string;
    name: string;
    description: string;
    settings?: VMSettings;
}

export interface VMListing extends VMBasics {
    suggested?: boolean;
    type: VMType;
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
