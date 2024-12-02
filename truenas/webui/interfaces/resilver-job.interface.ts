import type { PoolScanUpdate } from '../truenas/webui/interfaces/pool.interface';

export interface PoolScan {
    name: string;
    scan: PoolScanUpdate;
}
