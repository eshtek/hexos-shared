import type { JobState } from '@shared/truenas/webui/enums/job-state.enum';
import type { AppJobAction } from './apps';

export interface EshtekJob {
    id?: number;
    action: AppJobAction;
    name: string;
    status: JobState;
    progress: number;
    message?: string;
    referenceId?: string | number;
}

export interface Wizard {
    status: JobState;
    jobIds: number[];
    current: EshtekJob;
}

export interface Data {
    name: string;
    data: unknown;
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
}
