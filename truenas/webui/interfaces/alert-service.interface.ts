import type { AlertLevel } from '@shared/truenas/webui/enums/alert-level.enum';
import type { AlertServiceType } from '@shared/truenas/webui/enums/alert-service-type.enum';

export interface AlertServiceEdit {
    enabled?: boolean;
    level?: AlertLevel;
    name?: string;
    type?: AlertServiceType;
    attributes?: Record<string, string | number | boolean | number[] | string[]>;
}

export interface AlertService extends AlertServiceEdit {
    id: number;
    type__title: string;
}
