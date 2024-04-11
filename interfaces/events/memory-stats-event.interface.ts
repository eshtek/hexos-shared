import { VirtualMemoryUpdate } from '@shared/interfaces/reporting.interface';

export type MemoryStatsEventData = VirtualMemoryUpdate & { arc_size?: number };
