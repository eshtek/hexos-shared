import { KubernetesStatus } from '@shared/pages/apps/enum/kubernetes-status.enum';

export interface KubernetesStatusData {
  status: KubernetesStatus;
  description: string;
}
