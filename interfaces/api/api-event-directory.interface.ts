import { FailoverStatus } from '@shared/enums/failover-status.enum';
import { Alert } from '@shared/interfaces/alert.interface';
import { ChartRelease, ChartReleaseStats } from '@shared/interfaces/chart-release.interface';
import {
    PullContainerImageResponse,
    PullContainerImageParams,
    ContainerImage,
} from '@shared/interfaces/container-image.interface';
import { DirectoryServicesState } from '@shared/interfaces/directory-services-state.interface';
import { FailoverDisabledReasonEvent } from '@shared/interfaces/failover-disabled-reasons.interface';
import { Group } from '@shared/interfaces/group.interface';
import { Job } from '@shared/interfaces/job.interface';
import { KubernetesStatusData } from '@shared/interfaces/kubernetes-status-data.interface';
import { Pool } from '@shared/interfaces/pool.interface';
import { ReportingRealtimeUpdate } from '@shared/interfaces/reporting.interface';
import { PoolScan } from '@shared/interfaces/resilver-job.interface';
import { Service } from '@shared/interfaces/service.interface';
import { SmartTestProgressUpdate } from '@shared/interfaces/smart-test-progress.interface';
import { Disk } from '@shared/interfaces/storage.interface';
import { TrueCommandConfig } from '@shared/interfaces/true-command-config.interface';
import { User } from '@shared/interfaces/user.interface';
import { VirtualMachine } from '@shared/interfaces/virtual-machine.interface';
import { ZfsSnapshot } from '@shared/interfaces/zfs-snapshot.interface';
import { SystemHealth } from '../system-health.interface';

export interface ApiEventDirectory {
    'alert.list': { response: Alert };
    'chart.release.query': { response: ChartRelease };
    'chart.release.statistics': { response: { id: string; stats: ChartReleaseStats } };
    'core.get_jobs': { response: Job };
    'directoryservices.status': { response: DirectoryServicesState };
    'failover.status': { response: { status: FailoverStatus } };
    'failover.disabled.reasons': { response: FailoverDisabledReasonEvent };
    'service.query': { response: Service };
    'truecommand.config': { response: TrueCommandConfig };
    'vm.query': { response: VirtualMachine };
    'zfs.snapshot.query': { response: ZfsSnapshot };
    'zfs.pool.scan': { response: PoolScan };
    'user.query': { response: User };
    'container.image.pull': { response: Job<PullContainerImageResponse, PullContainerImageParams> };
    'disk.query': { response: Disk };
    'pool.query': { response: Pool };
    'group.query': { response: Group };
    'container.image.query': { response: ContainerImage };
    'reporting.realtime': { response: ReportingRealtimeUpdate };
    'smart.test.progress': { response: SmartTestProgressUpdate };
    'kubernetes.state': { response: KubernetesStatusData };
    'system.health': { response: SystemHealth };
}
