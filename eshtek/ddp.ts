import type { JobState } from '@shared/truenas/webui/enums/job-state.enum';
import type { AppJobAction } from './apps';

export interface EshtekJob {
    id?: number;
    name: string;
    status: JobState;
    progress: number;
    message?: string;
    referenceId?: string | number;
}

export interface WizardJob extends EshtekJob {
    name: WizardJobs;
}
export interface Wizard {
    jobs: WizardJob[];
}

export enum WizardJobs {
    Initializing = 'Initializing',
    CreatingPools = 'Creating Pools',
    CreatingUsers = 'Creating Users',
    CreatingFolders = 'Creating User Folders',
    CreatingSystemFolders = 'Creating System Folders',
    UpdatingNetworkInterface = 'Updating Network Interface',
    AssigningServerName = 'Assigning server name',
    UpdatingServices = 'Updating Services',
    Complete = 'Complete',
}

export interface Data<T = unknown> {
    name: string;
    data?: T;
}
export interface DDPClientMeta {
    subscriptions: Record<string, string>;
    apikey?: string;
    hostId: string;
    lanIp: string;
    wanIp: string;
    wizard?: Wizard;
    jobs: EshtekJob[];
    method_data: Data[];
    misc_data: Data[];
}
