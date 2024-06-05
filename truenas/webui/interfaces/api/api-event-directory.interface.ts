import { FailoverStatus } from '@shared/truenas/webui/enums/failover-status.enum';
import { Alert } from '@shared/truenas/webui/interfaces/alert.interface';
import {
    ChartRelease,
    ChartReleaseStats,
} from '@shared/truenas/webui/interfaces/chart-release.interface';
import {
    PullContainerImageResponse,
    PullContainerImageParams,
    ContainerImage,
} from '@shared/truenas/webui/interfaces/container-image.interface';
import { DirectoryServicesState } from '@shared/truenas/webui/interfaces/directory-services-state.interface';
import { FailoverDisabledReasonEvent } from '@shared/truenas/webui/interfaces/failover-disabled-reasons.interface';
import { Group } from '@shared/truenas/webui/interfaces/group.interface';
import { Job } from '@shared/truenas/webui/interfaces/job.interface';
import { KubernetesStatusData } from '@shared/truenas/webui/interfaces/kubernetes-status-data.interface';
import { Pool } from '@shared/truenas/webui/interfaces/pool.interface';
import { ReportingRealtimeUpdate } from '@shared/truenas/webui/interfaces/reporting.interface';
import { PoolScan } from '@shared/truenas/webui/interfaces/resilver-job.interface';
import { Service } from '@shared/truenas/webui/interfaces/service.interface';
import { SmartTestProgressUpdate } from '@shared/truenas/webui/interfaces/smart-test-progress.interface';
import { Disk } from '@shared/truenas/webui/interfaces/storage.interface';
import { TrueCommandConfig } from '@shared/truenas/webui/interfaces/true-command-config.interface';
import { User } from '@shared/truenas/webui/interfaces/user.interface';
import { VirtualMachine } from '@shared/truenas/webui/interfaces/virtual-machine.interface';
import { ZfsSnapshot } from '@shared/truenas/webui/interfaces/zfs-snapshot.interface';
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
