import type { JobState } from '@shared/enums/job-state.enum';

export interface Job {
    id?: number;
    name: string;
    status: JobState;
    progress: number;
    message?: string;
    referenceId?: string | number;
}
export interface JobExtended extends Job {
    url: string;
}
export interface Wizard {
    status: JobState;
    jobIds: number[];
    current: Job;
}

export interface Data {
    name: string;
    data: unknown;
}
export interface DDPClientMeta {
    subscriptions: Record<string, string>;
    ipsid?: string;
    apikey?: string;
    hostId: string;
    lanIp: string;
    wanIp: string;
    wizard: Wizard;
    jobs: Job[];
    method_data: Data[];
}
