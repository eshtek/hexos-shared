import { JobState } from '@shared/enums/job-state.enum';
import { ApiTimestamp } from '@shared/interfaces/api-date.interface';

export interface DataProtectionTaskState {
  state: JobState;
  datetime?: ApiTimestamp;
  error?: string;
  reason?: string;
  warnings?: string[];
  last_snapshot?: string;
}
