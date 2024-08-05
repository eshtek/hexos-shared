import type { VmOs } from '@shared/truenas/webui/enums/vm.enum';

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
    os: VmType;
    performance: VMPerformanceModes;
    connect_directly: boolean;
    autostart: boolean;
    snapshot_settings: VMSnapshotSettings;
}

export interface VMBasics {
    id?: string;
    name: string;
    description: string;
    settings: VMSettings;
    // TODO : other settings as necessary
}

export interface VMListing extends VMBasics {
    suggested?: boolean;
}

export interface VMInfo extends VMBasics {
    status: VMStatus;
    url_webui: string;
}
export interface VMInfoDetailed extends VMInfo {
    data: number[][];
}
