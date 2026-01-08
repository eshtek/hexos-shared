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
  TIMELINE = 'timeline',
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

export interface EventTimeline {
  timestamp: string;
  eventCount: number;
  failures: number;
}

export type EventsStatsData =
  | EventTaskStats
  | EventUserActivity
  | EventTimeline;

export type TimelineGroupBy = 'hour' | 'day';

export interface EventsListParams {
  id?: number | string;
  page?: number;
  pageSize?: number;
  eventName?: string | string[];
  userId?: string;
  hostId?: string;
  taskType?: string;
  taskStatus?: string;
  appId?: string;
  appIdRaw?: string;
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