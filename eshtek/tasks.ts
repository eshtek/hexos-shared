/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
// tasks.ts

export interface HexTask<T extends HexTaskType = HexTaskType> {
    id: string;
    userId: string;
    hostId: HexTaskDataMap[T]['hostId'] extends true ? string : string | undefined;
    type: T;
    status: HexTaskStatus;
    progress: number;
    data: HexTaskDataMap[T]['data'];
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    parentTaskId?: string;
}

export type HexTaskNew<T extends HexTaskType = HexTaskType> = Omit<HexTask<T>, 'id' | 'userId'>;
export type HexTaskUpdate<T extends HexTaskType = HexTaskType> = Partial<Omit<HexTask<T>, 'id' | 'userId' | 'type'>>

export enum HexTaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
}

export const enforceCompletionProgress = (status: HexTaskStatus, progress: number): number => {
    return status === HexTaskStatus.COMPLETED ? 100 : progress;
};

export const parseTaskData = <T extends HexTaskType>(data: string | null | undefined): HexTaskDataMap[T]['data'] => {
    if (!data) return undefined as HexTaskDataMap[T]['data'];
    return JSON.parse(data) as HexTaskDataMap[T]['data'];
};

export interface HexTaskDataAchievment {
    achievmentId: string;
    data: Record<string, any>;
}

export interface HexTaskDataDescriptor {
  hostId: boolean;
  data: any;
  canHaveMultiple: boolean;
  predictedSecondsToComplete?: number;
  requiresParentTask?: boolean;
}

export enum HexTaskType {
  RESTART = 'RESTART',
  SHUTDOWN = 'SHUTDOWN',
  NETWORK_UPDATE = 'NETWORK_UPDATE',
  ACHIEVMENT = 'ACHIEVMENT',
}

export const HexTaskDataMapDefinitions :  { [K in HexTaskType]: HexTaskDataDescriptor } = {
  [HexTaskType.RESTART]: { data: undefined, hostId: true, canHaveMultiple: false, predictedSecondsToComplete: 120 },
  [HexTaskType.SHUTDOWN]: { data: undefined, hostId: true, canHaveMultiple: false, predictedSecondsToComplete: 120 },
  [HexTaskType.NETWORK_UPDATE]: { data: undefined, hostId: true, canHaveMultiple: false, predictedSecondsToComplete: 90 },
  [HexTaskType.ACHIEVMENT]: { data: { achievmentId: '', data: {} as Record<string, any> } as HexTaskDataAchievment, hostId: false, canHaveMultiple: true },
} as const;

// Define the type for HexTaskDataMap based on the descriptor
export type HexTaskDataMap = {
  [K in keyof typeof HexTaskDataMapDefinitions]: typeof HexTaskDataMapDefinitions[K];
};