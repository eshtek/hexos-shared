import { DockerStatus } from 'app/enums/docker-status.enum';

export interface DockerConfig {
  id: number;
  pool: string;
  dataset: string;
  enable_image_updates: boolean;
  nvidia: boolean;
  address_pools: DockerAddressPool[];
  migrate_applications?: boolean;
}

export interface DockerAddressPool {
  base: string;
  size: number;
}

export interface DockerConfigUpdate {
  pool?: string | null;
  nvidia?: boolean;
  address_pools?: DockerAddressPool[];
  enable_image_updates?: boolean;
}

export interface DockerStatusData {
  status: DockerStatus;
  description: string;
}