import type { HexTaskType } from './tasks';

export enum EventTaskType {
  PROVISION_WIPE_DISKS = 'PROVISION_WIPE_DISKS',
  PROVISION_CREATE_POOLS = 'PROVISION_CREATE_POOLS',
  PROVISION_VALIDATE_STORAGE = 'PROVISION_VALIDATE_STORAGE',
  PROVISION_CONFIGURE_NETWORK = 'PROVISION_CONFIGURE_NETWORK',
  PROVISION_CONFIGURE_DOCKER = 'PROVISION_CONFIGURE_DOCKER',
  PROVISION_INSTALL_HEXOS = 'PROVISION_INSTALL_HEXOS',
}

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
  SERVER_CLAIMED: 'server_claimed',
  SERVER_UNCLAIMED: 'server_unclaimed',
  SERVER_RESET: 'server_reset',
  SERVER_SETUP_STARTED: 'server_setup_started',
  SERVER_SETUP_COMPLETED: 'server_setup_completed',
  SERVER_SETUP_FAILED: 'server_setup_failed',
  TASK: 'task', // Separate from HexTasks ie. EventTaskTypes
  USER_LOGIN: 'user_login',
  USER_LOGOUT: 'user_logout',
  DRIVE_UTILIZED: 'drive_utilized',
  DRIVE_REPLACED: 'drive_replaced',
  DRIVE_REMOVED: 'drive_removed',
  DRIVE_FAILED: 'drive_failed',
  DRIVE_HEALTHY: 'drive_healthy',
  DRIVE_DISCOVERED: 'drive_discovered',
  APP_DISCOVERED: 'app_discovered',
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

export interface EventTask {
  taskType: EventTaskType;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'SKIPPED';
  progress: number;
  errorMessage?: string;
  updatedAt?: string;
}

export interface EventTaskStatusData {
  tasks: EventTask[];
  isComplete: boolean;
  hasFailed: boolean;
}