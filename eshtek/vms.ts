import { Server } from 'mysql2/typings/mysql/lib/Server';
import type {
    ServerSystemAudio,
    ServerSystemGPU,
    ServerSystemPCI,
    ServerSystemUSB,
} from './server';

export enum VMType {
    Windows = 'WINDOWS',
    Ubuntu = 'UBUNTU',
    Chrome = 'CHROME',
    Custom = 'CUSTOM',
}

export enum VMStatus {
    Started = 'STARTED',
    Starting = 'STARTING',
    Deploying = 'DEPLOYING',
    Stopped = 'STOPPED',
    Stopping = 'STOPPING',
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
    Basic = 'BASIC',
    Enhanced = 'ENHANCED',
}

export enum VMSnapshotTypes {
    MANUAL = 'MANUAL',
    SCHEDULED = 'SCHEDULED',
    EVENT = 'EVENT',
}

export enum VMScheduleFrequency {
    HOURLY = 'HOURLY',
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
}

export enum VMEventTypes {
    SHUTDOWN = 'SHUTDOWN',
    REBOOT = 'REBOOT',
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
    installation_media?: string;
}

export interface VMBasics {
    id?: number;
    name: string;
    description: string;
    settings?: VMSettings;
}

export interface VMListing extends VMBasics {
    suggested?: boolean;
    type: VMType;
}

export interface VMInfo extends VMBasics {
    id: number;
    status: VMStatus;
    url_webui: string;
}
export interface VMInfoDetailed extends VMInfo {
    id: number;
    data: number[][];
}
