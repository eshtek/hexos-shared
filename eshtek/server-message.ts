import type { AlertLevel } from '../truenas/webui/enums/alert-level.enum';
import type { JobState } from '../truenas/webui/enums/job-state.enum';
import type { HexTaskStatus, HexTaskType } from './tasks';

interface BaseServerMessage {
    id: number;
    title: string;
    content?: string;
    serverId: string;
    icon?: 'ok' | 'error' | 'warning' | 'info' | 'progress' | 'award';
    resourceId?: string;
    createdAt: string;
    readAt?: string;
    dismissedAt?: string;
}

export interface TNUpdateAvailable extends BaseServerMessage {
    type: 'TRUENAS_UPDATE_AVAILABLE';
    meta: {
        currentVersion: string;
        latestVersion: string;
        releaseNotesUrl: string;
    }
}

export interface AppUpdateAvailable extends BaseServerMessage {
    type: 'APP_UPDATE_AVAILABLE';
    meta: {
        currentVersion: string;
    }
}

export interface TNJob extends BaseServerMessage {
    type: 'TRUENAS_JOB';
    meta: {
        progress: number;
        state: JobState;
        finishedAt?: Date;
    }
}

export interface TNAlert extends BaseServerMessage {
    type: 'TRUENAS_ALERT';
    meta: {
        level: AlertLevel;
        klass: string;
        details?: any;
    }
}

export interface TNAudit extends BaseServerMessage {
    type: 'TRUENAS_AUDIT';
}

export interface Task extends BaseServerMessage {
    type: 'TASK';
    meta: {
        type: HexTaskType;
        progress: number;
        status: HexTaskStatus;
        data?: any;
    }
}

export interface Achievement extends BaseServerMessage {
    type: 'ACHIEVEMENT';
    icon: 'award';
}

export interface GlobalMessage extends BaseServerMessage {
    type: 'GLOBAL_MESSAGE';
}

export type ServerMessage =
    | TNUpdateAvailable
    | AppUpdateAvailable
    | TNJob
    | TNAlert
    | TNAudit
    | Task
    | Achievement
    | GlobalMessage;