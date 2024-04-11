import { AlertLevel } from '@shared/enums/alert-level.enum';
import { AlertServiceType } from '@shared/enums/alert-service-type.enum';

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
