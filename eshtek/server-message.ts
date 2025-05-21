import { AlertLevel } from "../truenas/webui/enums/alert-level.enum";
import { JobState } from "../truenas/webui/enums/job-state.enum";
import { HexTaskStatus, HexTaskType } from "./tasks";

interface BaseServerMessage {
    id: string;
    title: string;
    content?: string;
    serverId: string;
    icon?: 'ok' | 'error' | 'warning' | 'info' | 'progress' | 'award';
    resourceId?: string;
    createdAt: Date;
    readAt?: Date;
    dismissedAt?: Date;
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

const dummyServerMessages: ServerMessage[] = [
    {
        id: 'TRUENAS_UPDATE_AVAILABLE:0',
        type: 'TRUENAS_UPDATE_AVAILABLE',
        title: 'TrueNAS Update Available',
        content: 'A new version of TrueNAS is available.',
        icon: 'ok',
        createdAt: new Date(),
        serverId: 'a2d6a678e70f347af6018fcb7c5706ad8812cccc27dd47340c249f6f696efa38',
        meta: {
            currentVersion: '24.10.0',
            latestVersion: '24.10.2.1',
            releaseNotesUrl: 'https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/#241021',
        }
    },
    {
        id: 'APP_UPDATE_AVAILABLE:minecraft',
        type: 'APP_UPDATE_AVAILABLE',
        title: 'Update Available',
        content: 'An update is available for the app: minecraft',
        icon: 'ok',
        createdAt: new Date(),
        serverId: 'a2d6a678e70f347af6018fcb7c5706ad8812cccc27dd47340c249f6f696efa38',
        resourceId: 'minecraft',
        meta: {
            currentVersion: '1.0.0',
        }
    },
    {
        id: 'TRUENAS_JOB:5839',
        type: 'TRUENAS_JOB',
        title: 'Folder Create',
        content: 'Creating folder "my_folder"',
        icon: 'ok',
        createdAt: new Date(),
        serverId: 'a2d6a678e70f347af6018fcb7c5706ad8812cccc27dd47340c249f6f696efa38',
        resourceId: '5839',
        meta: {
            progress: 100,
            state: JobState.Success,
            finishedAt: new Date(),
        }
    },
    {
        id: 'TRUENAS_ALERT:1234',
        type: 'TRUENAS_ALERT',
        title: 'Disk Failure',
        content: 'The disk "sda" has failed.',
        icon: 'error',
        createdAt: new Date(),
        serverId: 'a2d6a678e70f347af6018fcb7c5706ad8812cccc27dd47340c249f6f696efa38',
        resourceId: '1234',
        meta: {
            level: AlertLevel.Error,
        }
    },
    {
        id: 'ACHIEVEMENT:first_user_created',
        type: 'ACHIEVEMENT',
        title: 'New Achievement Unlocked!',
        content: 'You have created your first user.',
        icon: 'award',
        resourceId: 'first_user_created',
        createdAt: new Date(),
        serverId: 'a2d6a678e70f347af6018fcb7c5706ad8812cccc27dd47340c249f6f696efa38',
    },
    {
        id: 'TASK:5512',
        type: 'TASK',
        title: 'Pool Expansion',
        content: 'Expanding pool "my_pool"',
        icon: 'progress',
        createdAt: new Date(),
        serverId: 'a2d6a678e70f347af6018fcb7c5706ad8812cccc27dd47340c249f6f696efa38',
        resourceId: '5512',
        meta: {
            type: HexTaskType.POOL_UPDATE,
            progress: 75,
            status: HexTaskStatus.IN_PROGRESS,
        }
    },
];
