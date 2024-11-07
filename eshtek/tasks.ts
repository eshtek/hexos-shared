/* eslint-disable @typescript-eslint/no-explicit-any */
// tasks.ts

export interface HexTaskBase<K extends HexTaskType> {
  id: string;
  userId: string;
  type: K;
  status: HexTaskStatus;
  progress: number;
  created: Date;
  updated: Date;
  active: boolean;
  parentTaskId?: string;
}

export interface HexTaskDataAchievement {
  achievementId: string;
  data: Record<string, any>;
}

export enum HexTaskType {
  RESTART = 'RESTART',
  SHUTDOWN = 'SHUTDOWN',
  NETWORK_UPDATE = 'NETWORK_UPDATE',
  ACHIEVEMENT = 'ACHIEVEMENT',
}


export type HexTask<T extends HexTaskType = HexTaskType> = HexTaskBase<T> & HexTaskDataMap[T];
export type HexTaskNew<T extends HexTaskType = HexTaskType> = Omit<HexTask<T>, 'id' | 'userId' | 'active' | 'created' | 'updated'>;
export type HexTaskUpdate<T extends HexTaskType = HexTaskType> = Partial<Omit<HexTask<T>, 'id' | 'userId' | 'type' | 'created' | 'updated'>>;

export enum HexTaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export const enforceCompletionProgress = (status: HexTaskStatus, progress: number): number => {
  return status === HexTaskStatus.COMPLETED ? 100 : progress;
};

export const parseTaskData = <T extends HexTaskType>(
  data: string | null | undefined
): HexTaskDataMap[T]['data'] | undefined => {
  if (!data) return undefined;
  return JSON.parse(data) as HexTaskDataMap[T]['data'];
};


interface HexTaskTypeInfo {
  canHaveMultiple: boolean;
  predictedSecondsToComplete?: number;
  requiresParentTask?: boolean;
}

export type HexTaskDataMap = {
  [HexTaskType.RESTART]: {
    hostId: string;
    data?: never;
  };
  [HexTaskType.SHUTDOWN]: {
    hostId: string;
    data?: never;
  };
  [HexTaskType.NETWORK_UPDATE]: {
    hostId: string;
    data?: never;
  };
  [HexTaskType.ACHIEVEMENT]: {
    data: HexTaskDataAchievement;
    hostId?: never;
  };
};

// This looks a little strange with duplicated code, but we need a runtime const avail for the utils file
export const HexTaskDataMapDefinitions: {
  [K in HexTaskType]: HexTaskTypeInfo;
} = {
  [HexTaskType.RESTART]: { canHaveMultiple: false, predictedSecondsToComplete: 120 },
  [HexTaskType.SHUTDOWN]: { canHaveMultiple: false, predictedSecondsToComplete: 120 },
  [HexTaskType.NETWORK_UPDATE]: { canHaveMultiple: false, predictedSecondsToComplete: 90 },
  [HexTaskType.ACHIEVEMENT]: { canHaveMultiple: true },
};