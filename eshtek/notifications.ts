import type { AlertLevel } from '../truenas/webui/enums/alert-level.enum';
import type { JobState } from '../truenas/webui/enums/job-state.enum';
import type { ApiTimestamp } from '../truenas/webui/interfaces/api-date.interface';
import type { ApiJobMethod } from '../truenas/webui/interfaces/api/api-job-directory.interface';
import type { JobProgress } from '../truenas/webui/interfaces/job.interface';
import type { HexTask, HexTaskWithChildren } from './tasks';

export enum NotificationType {
    Alert = 'alert',
    Job = 'job',
    Task = 'task',
}

export interface NotificationBasics<K extends NotificationType, T> {
    id: string | number;
    datetime: number;
    type: K;
    data: T;
}
export type Notification =
    | NotificationBasics<NotificationType.Alert, NotificationAlert>
    | NotificationBasics<NotificationType.Job, NotificationJob>
    | NotificationBasics<NotificationType.Task, HexTaskWithChildren>;

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
