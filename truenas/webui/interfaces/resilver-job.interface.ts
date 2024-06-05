import type { PoolScanUpdate } from '@shared/truenas/webui/interfaces/pool.interface';

export interface PoolScan {
    name: string;
    scan: PoolScanUpdate;
}
