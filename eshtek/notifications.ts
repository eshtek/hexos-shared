import type { AlertLevel } from '../truenas/webui/enums/alert-level.enum';
import type { JobState } from '../truenas/webui/enums/job-state.enum';
import type { ApiJobMethod } from '../truenas/webui/interfaces/api/api-job-directory.interface';
import type { JobProgress } from '../truenas/webui/interfaces/job.interface';
import type { HexTaskWithChildren } from './tasks';

export enum NotificationType {
    Alert = 'alert',
    Job = 'job',
    Task = 'task',
    Message = 'message',
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
    | NotificationBasics<NotificationType.Task, HexTaskWithChildren>
    | NotificationBasics<NotificationType.Message, NotificationMessage>;

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

export enum NotificationMessageType {
    Release = 'release',
}

export enum NotificationMessageAction {
    UpdateSystem = 'update_system',
}

export interface NotificationMessageLink {
    type: 'internal' | 'external';
    path: string;
}

export interface NotificationMessage {
    id: string | number;
    title: string;
    content: string;
    content_preview: string;
    content_reference_id: string;
    type: NotificationMessageType;
    actions: NotificationMessageAction[];
    links: NotificationMessageLink[];
    updated: Date;
    created: Date;
    active: boolean;
    hostid?: string;
    user?: string;
    dismissed?: boolean;
}

export interface NotificationDismissal {
    id: string | number;
    dismissal_target_id: string;
    dismissal_target_type: NotificationType;
}
