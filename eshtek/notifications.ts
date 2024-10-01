import type { AlertLevel } from '@shared/truenas/webui/enums/alert-level.enum';
import type { JobState } from '@shared/truenas/webui/enums/job-state.enum';
import type { ApiTimestamp } from '@shared/truenas/webui/interfaces/api-date.interface';
import type { ApiJobMethod } from '@shared/truenas/webui/interfaces/api/api-job-directory.interface';
import type { JobProgress } from '@shared/truenas/webui/interfaces/job.interface';


export interface NotificationAlert {
  datetime: ApiTimestamp;
  dismissed: boolean;
  formatted: string;
  id: string;
  last_occurrence: ApiTimestamp;
  level: AlertLevel;
  source: string;
  text: string;
  uuid: string;
}

export interface NoticationJob {
    abortable: boolean;
    description: string;
    error: string;
    exception: string;
    id: number;
    logs_excerpt: string;
    method: ApiJobMethod;
    progress: JobProgress;
    state: JobState;
    time_finished: ApiTimestamp | null;
    time_started: ApiTimestamp;
}
