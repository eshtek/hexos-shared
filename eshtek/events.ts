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
}

export type TaskEventName = `${Lowercase<`${HexTaskType}`>}_${EventState}`;

export const SystemEventNames = {
  SERVER_CONNECTED: 'server_connected',
  SERVER_DISCONNECTED: 'server_disconnected',
  USER_LOGIN: 'user_login',
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