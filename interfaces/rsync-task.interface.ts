import { Direction } from '@shared/enums/direction.enum';
import { RsyncMode } from '@shared/enums/rsync-mode.enum';
import { DataProtectionTaskState } from '@shared/interfaces/data-protection-task-state.interface';
import { Job } from '@shared/interfaces/job.interface';
import { KeychainSshCredentials } from '@shared/interfaces/keychain-credential.interface';
import { Schedule } from '@shared/interfaces/schedule.interface';

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
