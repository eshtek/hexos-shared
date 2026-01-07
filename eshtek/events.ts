import type { HexTaskType } from './tasks';

export interface BaseEvent {
  eventName: string;
  userId: string;
  hostId?: string;
  timestamp: Date;
  properties?: Record<string, any>;
}

export interface TaskEvent extends BaseEvent {
  taskId: string;
  taskType: HexTaskType;
  taskStatus: string;
  errorMessage?: string;
}

export interface AppEvent extends TaskEvent {
  appId: string;
  appTrain?: string;
  appVersion?: string;
  appTrueNasVersion?: string;
}

export enum EventState {
  STARTED = 'started',
  COMPLETED = 'completed',
  FAILED = 'failed',
  DISMISSED = 'dismissed',
}

export type TaskEventName = `${Lowercase<`${HexTaskType}`>}_${EventState}`;

export const SystemEventNames = {
  SERVER_CONNECTED: 'server_connected',
  SERVER_DISCONNECTED: 'server_disconnected',
  USER_LOGIN: 'user_login',
  USER_LOGOUT: 'user_logout',
  DRIVE_UTILIZED: 'drive_utilized',  // Drive added to a pool
  DRIVE_REPLACED: 'drive_replaced',
  DRIVE_REMOVED: 'drive_removed',
  DRIVE_FAILED: 'drive_failed',
  DRIVE_HEALTHY: 'drive_healthy',  // Drive has no errors
  DRIVE_DISCOVERED: 'drive_discovered',  // Drive found on system (assigned or unassigned)
  APP_DISCOVERED: 'app_discovered',  // App found on system
} as const;

export type SystemEventName = typeof SystemEventNames[keyof typeof SystemEventNames];
export type EventName = TaskEventName | SystemEventName;

export interface EventQueryOptions {
  eventName?: EventName | EventName[];
  userId?: string;
  hostId?: string;
  taskType?: HexTaskType;
  appId?: string;
  appTrain?: string;
  appVersion?: string;
  startDate?: Date;
  endDate?: Date;
  limit?: number;
}

export interface AppPopularityMetrics {
  appId: string;
  installCount: number;
  uninstallCount: number;
  upgradeCount: number;
  failureCount: number;
  lastInstalled: Date;
}

export enum EventsStatsCategory {
  TASKS = 'tasks',
  USERS = 'users',
  SERVERS = 'servers',
  DRIVES = 'drives',
  POOLS = 'pools',
  FOLDERS = 'folders',
  TIMELINE = 'timeline',
  ERRORS = 'errors',
}

export interface EventTaskStats {
  taskType: string;
  total: number;
  completed: number;
  failed: number;
  successRate: number;
  avgDurationSeconds: number | null;
}

export interface EventUserActivity {
  userId: string;
  totalEvents: number;
  lastLogin: string | null;
  tasksInitiated: number;
  appActions: number;
  failures: number;
}

export interface EventAppLifecycle {
  appId: string;
  discovered: number;
  installAttempts: number;
  installSuccesses: number;
  installFailures: number;
  upgradeAttempts: number;
  upgradeSuccesses: number;
  uninstalls: number;
  lastActivity: string;
}

export interface EventServerActivity {
  hostId: string;
  connections: number;
  disconnections: number;
  totalEvents: number;
  lastConnection: string | null;
}

export interface EventTimeline {
  timestamp: string;
  eventCount: number;
  failures: number;
}

export interface EventErrorPattern {
  taskType: string | null;
  errorMessage: string;
  occurrences: number;
  lastOccurrence: string;
}

export interface EventDriveActivity {
  driveSerial: string;
  driveModel: string | null;
  discovered: number;
  utilized: number;
  replaced: number;
  removed: number;
  failed: number;
  healthy: number;
  lastActivity: string;
}

export interface EventPoolActivity {
  poolName: string;
  poolId: number | null;
  creates: number;
  updates: number;
  deletes: number;
  totalEvents: number;
  lastActivity: string;
}

export interface EventFolderActivity {
  folderName: string;
  creates: number;
  updates: number;
  deletes: number;
  locks: number;
  unlocks: number;
  totalEvents: number;
  lastActivity: string;
}

export type EventsStatsData =
  | EventTaskStats
  | EventUserActivity
  | EventAppLifecycle
  | EventServerActivity
  | EventTimeline
  | EventErrorPattern
  | EventDriveActivity
  | EventPoolActivity
  | EventFolderActivity;

export type TimelineGroupBy = 'hour' | 'day';

export interface EventsListParams {
  page?: number;
  pageSize?: number;
  eventName?: string | string[];
  userId?: string;
  hostId?: string;
  taskType?: string;
  taskStatus?: string;
  appId?: string;
  startDate?: string;
  endDate?: string;
}

export interface EventsStatsParams {
  type: EventsStatsCategory;
  days?: number;
  groupBy?: TimelineGroupBy;
  userId?: string;
  hostId?: string;
  taskType?: string;
  taskStatus?: string;
  appId?: string;
  startDate?: string;
  endDate?: string;
}