import type { JobState } from '../truenas/webui/enums/job-state.enum';
import type { ApiTimestamp } from '../truenas/webui/interfaces/api-date.interface';

export interface DataProtectionTaskState {
    state: JobState;
    datetime?: ApiTimestamp;
    error?: string;
    reason?: string;
    warnings?: string[];
    last_snapshot?: string;
}
