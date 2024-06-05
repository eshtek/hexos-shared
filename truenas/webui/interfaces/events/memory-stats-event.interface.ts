import type { VirtualMemoryUpdate } from '@shared/truenas/webui/interfaces/reporting.interface';

export type MemoryStatsEventData = VirtualMemoryUpdate & { arc_size?: number };
