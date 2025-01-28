import type { VirtualMemoryUpdate } from '../../interfaces/reporting.interface';

export type MemoryStatsEventData = VirtualMemoryUpdate & { arc_size?: number };
