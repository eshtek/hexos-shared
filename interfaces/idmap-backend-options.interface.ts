import { IdmapBackend } from '@shared/enums/idmap.enum';

export type IdmapBackendOptions = {
  [key in IdmapBackend]: IdmapBackendOption;
};

export interface IdmapBackendOption {
  description: string;
  parameters: Record<string, IdmapBackendParameter>;
  has_secrets: boolean;
  services: string[];
}

export interface IdmapBackendParameter {
  default: string | boolean | number;
  required: boolean;
}
