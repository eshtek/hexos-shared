import type { ServiceName } from '../truenas/webui/enums/service-name.enum';
import type { ServiceStatus } from '../truenas/webui/enums/service-status.enum';

export interface Service {
    enable: boolean;
    id: number;
    pids: number[];
    service: ServiceName;
    state: ServiceStatus;
}

export interface ServiceRow extends Service {
    name: string;
}
