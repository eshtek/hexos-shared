import { KubernetesStatus } from '../pages/apps/enum/kubernetes-status.enum';

export interface KubernetesStatusData {
    status: KubernetesStatus;
    description: string;
}
