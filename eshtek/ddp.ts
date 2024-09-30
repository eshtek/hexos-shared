import type { JobState } from '@shared/truenas/webui/enums/job-state.enum';
import type { AppJobAction } from './apps';


export interface WizardJob {
    name: WizardJobs;
    id?: number;
    status: JobState;
    progress: number;
    message?: string;
    referenceId?: string | number;
}
export interface Wizard {
    jobs: WizardJob[];
}

export enum WizardJobs {
    Initializing = 'Initializing',
    CreatingPools = 'Creating Pools',
    EnablingDocker = 'Enabling Docker',
    UpdatingNetworkInterface = 'Updating Network Interface',
    DefaultLocations = 'Creating Default Locations',
    AssigningServerName = 'Assigning Server Name',
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
    method_data: Data[];
    misc_data: Data[];
    userId?: string;
}
