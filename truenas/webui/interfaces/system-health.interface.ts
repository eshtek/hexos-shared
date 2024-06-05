// Eshtek added because not yet implemented in TrueNas as of 6/2/2024 should replace with official when it becomes available
import { PoolStatus } from '@shared/truenas/webui/enums/pool-status.enum';

export interface SystemHealth {
    cpu_percent: number;
    memory: {
        total: number;
        available: number;
        percent: number;
        used: number;
        free: number;
        active: number;
        inactive: number;
        buffers: number;
        cached: number;
        shared: number;
        slab: number;
    };
    pools: {
        [key: string]: {
            status: PoolStatus;
        };
    };
    update?: 'AVAILABLE'; // not sure on this yet just putting values I've seen on my box
}
