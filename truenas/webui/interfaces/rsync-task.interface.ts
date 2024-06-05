import type { Direction } from '@shared/truenas/webui/enums/direction.enum';
import type { RsyncMode } from '@shared/truenas/webui/enums/rsync-mode.enum';
import type { DataProtectionTaskState } from '@shared/truenas/webui/interfaces/data-protection-task-state.interface';
import type { Job } from '@shared/truenas/webui/interfaces/job.interface';
import type { KeychainSshCredentials } from '@shared/truenas/webui/interfaces/keychain-credential.interface';
import type { Schedule } from '@shared/truenas/webui/interfaces/schedule.interface';

export interface RsyncTask {
    archive: boolean;
    compress: boolean;
    delayupdates: boolean;
    delete: boolean;
    desc: string;
    direction: Direction;
    enabled: boolean;
    extra: string[];
    id: number;
    job: Job;
    locked: boolean;
    mode: RsyncMode;
    path: string;
    preserveattr: boolean;
    preserveperm: boolean;
    quiet: boolean;
    recursive: boolean;
    remotehost: string;
    remotemodule: string;
    remotepath: string;
    remoteport: number;
    schedule: Schedule;
    times: boolean;
    user: string;
    ssh_credentials: KeychainSshCredentials;
}

export type RsyncTaskUpdate = {
    validate_rpath?: boolean;
    ssh_credentials: number;
} & Omit<RsyncTask, 'id' | 'job' | 'locked' | 'ssh_credentials'>;

export interface RsyncTaskUi extends RsyncTask {
    cron_schedule: string;
    next_run: string;
    frequency: string;
    state: DataProtectionTaskState;
    last_run: string;
}
