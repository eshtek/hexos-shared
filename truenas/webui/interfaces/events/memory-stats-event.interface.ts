import type { VirtualMemoryUpdate } from '../truenas/webui/interfaces/reporting.interface';

export type MemoryStatsEventData = VirtualMemoryUpdate & { arc_size?: number };
