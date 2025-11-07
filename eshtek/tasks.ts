/* eslint-disable @typescript-eslint/no-explicit-any */
// tasks.ts

import type { DiskType } from '../truenas/webui/enums/disk-type.enum';

export interface HexTaskBase<K extends HexTaskType> {
  id: string;
  userId: string;
  type: K;
  status: HexTaskStatus;
  progress: number;
  created: Date;
  updated: Date;
  active: boolean;
}


export enum HexAchievement {
  FIRST_NETWORK_UPDATE = 'FIRST_NETWORK_UPDATE',
  FIRST_RESTART = 'FIRST_RESTART',
  FIRST_SHUTDOWN = 'FIRST_SHUTDOWN',
  FIRST_USER = 'FIRST_USER',
  FIRST_FOLDER = 'FIRST_FOLDER',
  FIRST_APP = 'FIRST_APP',
  FIRST_VM = 'FIRST_VM',
}

export enum HexTaskType {
  RESTART = 'RESTART',
  SHUTDOWN = 'SHUTDOWN',
  NETWORK_UPDATE = 'NETWORK_UPDATE',
  POOL_CREATE = 'POOL_CREATE',
  POOL_UPDATE = 'POOL_UPDATE',
  POOL_DELETE = 'POOL_DELETE',
  FOLDER_CREATE = 'FOLDER_CREATE',
  FOLDER_UPDATE = 'FOLDER_UPDATE',
  FOLDER_DELETE = 'FOLDER_DELETE',
  FOLDER_LOCK = 'FOLDER_LOCK',
  FOLDER_UNLOCK = 'FOLDER_UNLOCK',
  USER_CREATE = 'USER_CREATE',
  USER_UPDATE = 'USER_UPDATE',
  USER_DELETE = 'USER_DELETE',
  USERS_DELETE_ALL = 'USERS_DELETE_ALL',
  SERVER_RESET = 'SERVER_RESET',
  SERVER_UPDATE = 'SERVER_UPDATE',
  APP_INSTALL = 'APP_INSTALL',
  APP_UNINSTALL = 'APP_UNINSTALL',
  APP_UPGRADE = 'APP_UPGRADE',
  APP_UPDATE = 'APP_UPDATE',
  PREFERENCE_LOCATION_PATH_MIGRATION = 'PREFERENCE_LOCATION_PATH_MIGRATION',
  POOLS_DELETE_ALL = 'POOLS_DELETE_ALL',
  DRIVE_REPLACE = 'DRIVE_REPLACE',
  DOCKER_UPDATE = 'DOCKER_UPDATE',
}


export type HexTask<T extends HexTaskType = HexTaskType> = HexTaskBase<T> & HexTaskDataMap[T];
export type HexTaskNew<T extends HexTaskType = HexTaskType> = {
  type: T;
  status?: HexTaskStatus;
  progress?: number;
  active?: boolean;
} & HexTaskDataMap[T];
export type HexTaskUpdate<T extends HexTaskType = HexTaskType> = {
  progress?: number;
  status?: HexTaskStatus;
  active?: boolean;
  data?: HexTaskDataMap[T]['data'];
  hostId?: string;
  parentTaskId?: string;
};
export type HexTaskWithChildren<T extends HexTaskType = HexTaskType> = HexTaskBase<T> & HexTaskDataMap[T] & {
  childTasks: HexTask[];
  parentTask?: HexTask;
}

export enum HexTaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  DISMISSED = 'DISMISSED',
}

export const enforceCompletionProgress = (status: HexTaskStatus, progress: number): number => {
  return status === HexTaskStatus.COMPLETED ? 100 : progress;
};

export const parseTaskData = <T extends HexTaskType>(
  data: string | null | undefined
): HexTaskDataMap[T]['data'] | undefined => {
  if (!data) return undefined;
  try {
    return JSON.parse(data) as HexTaskDataMap[T]['data'];
  } catch (e) {
    console.error('Failed to parse task data:', e);
    return undefined;
  }
};


interface HexTaskTypeInfo {
  canHaveMultiple: boolean;
  predictedSecondsToComplete?: number
}

type HexTaskDataBase = {
  error?: string;
  jobId?: number | number[];
};

type HexTaskMeta<TData extends HexTaskDataBase, TParent extends string | never = never> = {
  hostId: string;
  data: TData;
  parentTaskId?: TParent;
};

export type HexTaskDataMap = {
  [HexTaskType.RESTART]: HexTaskMeta<HexTaskDataBase, never>;
  [HexTaskType.SHUTDOWN]: HexTaskMeta<HexTaskDataBase, never>;
  [HexTaskType.NETWORK_UPDATE]: HexTaskMeta<HexTaskDataBase, never>;
  [HexTaskType.POOL_CREATE]: HexTaskMeta<HexTaskDataBase & { name: string; type: DiskType }, never>;
  [HexTaskType.POOL_UPDATE]: HexTaskMeta<HexTaskDataBase & { poolId: number; name: string }, never>;
  [HexTaskType.POOL_DELETE]: HexTaskMeta<HexTaskDataBase & { poolId: number; name: string }, string>;
  [HexTaskType.FOLDER_CREATE]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.FOLDER_UPDATE]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.FOLDER_DELETE]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.FOLDER_LOCK]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.FOLDER_UNLOCK]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.USER_CREATE]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.USER_UPDATE]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.USER_DELETE]: HexTaskMeta<HexTaskDataBase & { name: string }, never>;
  [HexTaskType.SERVER_RESET]: HexTaskMeta<HexTaskDataBase, never>;
  [HexTaskType.SERVER_UPDATE]: HexTaskMeta<HexTaskDataBase & { targetVersion: string }, never>;
  [HexTaskType.USERS_DELETE_ALL]: HexTaskMeta<HexTaskDataBase, string>;
  [HexTaskType.POOLS_DELETE_ALL]: HexTaskMeta<HexTaskDataBase, string>;
  [HexTaskType.APP_INSTALL]: HexTaskMeta<HexTaskDataBase & { appId: string; train?: string; installType?: 'standard' | 'custom' }, string>;
  [HexTaskType.APP_UNINSTALL]: HexTaskMeta<HexTaskDataBase & { appId: string }, string>;
  [HexTaskType.APP_UPGRADE]: HexTaskMeta<HexTaskDataBase & { appId: string; fromVersion?: string; toVersion?: string }, string>;
  [HexTaskType.APP_UPDATE]: HexTaskMeta<HexTaskDataBase & { appId: string; reason?: 'location_preference_change'; locationPreferenceId?: string }, string>;
  [HexTaskType.PREFERENCE_LOCATION_PATH_MIGRATION]: HexTaskMeta<HexTaskDataBase & { locationPreferenceId: string; oldPath: string; newPath: string }, never>;
  [HexTaskType.DRIVE_REPLACE]: HexTaskMeta<HexTaskDataBase & { poolId: number; devname: string; newDevname: string; label: string; disk: string }, string>;
  [HexTaskType.DOCKER_UPDATE]: HexTaskMeta<HexTaskDataBase & { poolName: string; }, string>;
};

// This looks a little strange with duplicated code, but we need a runtime const avail for the utils file
export const HexTaskSettings: {
  [K in HexTaskType]: HexTaskTypeInfo;
} = {
  [HexTaskType.RESTART]: { canHaveMultiple: false, predictedSecondsToComplete: 120 },
  [HexTaskType.SHUTDOWN]: { canHaveMultiple: false, predictedSecondsToComplete: 120 },
  [HexTaskType.NETWORK_UPDATE]: { canHaveMultiple: false, predictedSecondsToComplete: 90 },
  [HexTaskType.POOL_CREATE]: { canHaveMultiple: true, predictedSecondsToComplete: 30 },
  [HexTaskType.POOL_UPDATE]: { canHaveMultiple: true, predictedSecondsToComplete: 10 },
  [HexTaskType.POOL_DELETE]: { canHaveMultiple: true, predictedSecondsToComplete: 30 },
  [HexTaskType.FOLDER_CREATE]: { canHaveMultiple: true, predictedSecondsToComplete: 10 },
  [HexTaskType.FOLDER_UPDATE]: { canHaveMultiple: true, predictedSecondsToComplete: 10 },
  [HexTaskType.FOLDER_DELETE]: { canHaveMultiple: true, predictedSecondsToComplete: 10 },
  [HexTaskType.FOLDER_LOCK]: { canHaveMultiple: false, predictedSecondsToComplete: 10 },
  [HexTaskType.FOLDER_UNLOCK]: { canHaveMultiple: false, predictedSecondsToComplete: 10 },
  [HexTaskType.USER_CREATE]: { canHaveMultiple: true, predictedSecondsToComplete: 10 },
  [HexTaskType.USER_UPDATE]: { canHaveMultiple: true, predictedSecondsToComplete: 10 },
  [HexTaskType.USER_DELETE]: { canHaveMultiple: true, predictedSecondsToComplete: 10 },
  [HexTaskType.SERVER_RESET]: { canHaveMultiple: false, predictedSecondsToComplete: 300 },
  [HexTaskType.SERVER_UPDATE]: { canHaveMultiple: false, predictedSecondsToComplete: 1200 },
  [HexTaskType.USERS_DELETE_ALL]: { canHaveMultiple: false, predictedSecondsToComplete: 30 },
  [HexTaskType.POOLS_DELETE_ALL]: { canHaveMultiple: false, predictedSecondsToComplete: 120 },
  [HexTaskType.APP_INSTALL]: { canHaveMultiple: true, predictedSecondsToComplete: 500 },
  [HexTaskType.APP_UNINSTALL]: { canHaveMultiple: true, predictedSecondsToComplete: 500 },
  [HexTaskType.APP_UPGRADE]: { canHaveMultiple: true, predictedSecondsToComplete: 500 },
  [HexTaskType.APP_UPDATE]: { canHaveMultiple: true, predictedSecondsToComplete: 500 },
  [HexTaskType.PREFERENCE_LOCATION_PATH_MIGRATION]: { canHaveMultiple: false, predictedSecondsToComplete: 1200 },
  [HexTaskType.DRIVE_REPLACE]: { canHaveMultiple: true, predictedSecondsToComplete: 120 },
  [HexTaskType.DOCKER_UPDATE]: { canHaveMultiple: false, predictedSecondsToComplete: 120 },
};