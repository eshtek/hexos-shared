import type { Direction } from '../truenas/webui/enums/direction.enum';
import type { TransferMode } from '../truenas/webui/enums/transfer-mode.enum';
import type { DataProtectionTaskState } from '../truenas/webui/interfaces/data-protection-task-state.interface';
import type { Job } from '../truenas/webui/interfaces/job.interface';
import type { Schedule } from '../truenas/webui/interfaces/schedule.interface';

export interface CloudCredential {
    id: number;
    name: string;
    provider: string;
    attributes: Record<string, string | number | boolean>;
}

export interface BwLimit {
    time: string;
    bandwidth: number;
}

export interface CloudSyncTask {
    args: string;
    attributes: Record<string, string | number | boolean>;
    bwlimit: BwLimit[];
    credentials: CloudCredential;
    description: string;
    direction: Direction;
    enabled: boolean;
    encryption: boolean;
    encryption_password?: string;
    encryption_salt?: string;
    exclude: string[];
    filename_encryption: boolean;
    follow_symlinks: boolean;
    id: number;
    include: string[];
    job: Job;
    locked: boolean;
    path: string;
    post_script: string;
    pre_script: string;
    schedule: Schedule;
    snapshot: boolean;
    transfer_mode: TransferMode;
    transfers: number;
    create_empty_src_dirs: boolean;
}

export interface CloudSyncTaskUpdate
    extends Omit<CloudSyncTask, 'id' | 'job' | 'locked' | 'credentials' | 'encryption_salt' | 'args' | 'filename_encryption' | 'bwlimit'> {
    credentials: number;
    bwlimit: { time: string; bandwidth: string }[];
}

export interface CloudSyncTaskUi extends CloudSyncTask {
    credential: string;
    cron_schedule: string;
    frequency: string;
    next_run: string;
    next_run_time: Date | string;
    state: DataProtectionTaskState;
    last_run: string;
}

export interface CloudSyncListDirectoryParams {
    credentials: number;
    encryption?: boolean;
    filename_encryption?: boolean;
    encryption_password?: string;
    encryption_salt?: string;
    attributes?: unknown;
    args?: string;
}

export interface CloudSyncDirectoryListing {
    Name: string;
    IsDir: boolean;
    Decrypted: boolean;
}
