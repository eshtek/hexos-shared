import type { AlertLevel } from '@shared/truenas/webui/enums/alert-level.enum';
import type { JobState } from '@shared/truenas/webui/enums/job-state.enum';
import type { ApiTimestamp } from '@shared/truenas/webui/interfaces/api-date.interface';
import type { ApiJobMethod } from '@shared/truenas/webui/interfaces/api/api-job-directory.interface';
import type { JobProgress } from '@shared/truenas/webui/interfaces/job.interface';

export enum NotificationType {
    Alert = 'alert',
    Job = 'job',
}

export interface NotificationBasics<K extends NotificationType, T> {
    id: string | number;
    datetime: number;
    type: K;
    data: T;
}
export type Notification =
    | NotificationBasics<NotificationType.Alert, NotificationAlert>
    | NotificationBasics<NotificationType.Job, NotificationJob>;

export interface NotificationAlert {
    datetime: number;
    dismissed: boolean;
    formatted: string;
    id: string;
    last_occurrence: number;
    level: AlertLevel;
    source: string;
    text: string;
    uuid: string;
}

export interface NotificationJob {
    abortable: boolean;
    description: string;
    error: string;
    exception: string;
    id: number;
    logs_excerpt: string;
    method: ApiJobMethod;
    progress: JobProgress;
    state: JobState;
    time_finished: number | null;
    time_started: number;
}