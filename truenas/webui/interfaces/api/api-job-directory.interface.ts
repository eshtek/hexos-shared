import type { DockerConfig, DockerConfigUpdate } from '../../enums/docker-config.interface';
import type { SetAcl } from '../../interfaces/acl.interface';
import type { ActiveDirectoryConfig, LeaveActiveDirectory } from '../../interfaces/active-directory-config.interface';
import type { ActiveDirectoryUpdate } from '../../interfaces/active-directory.interface';
import type { AuditEntry } from '../../interfaces/audit/audit.interface';
import type { Catalog, CatalogCreate } from '../../interfaces/catalog.interface';
import type { Certificate, CertificateCreate, CertificateUpdate } from '../../interfaces/certificate.interface';
import type { CloudSyncTaskUpdate } from '../../interfaces/cloud-sync-task.interface';
import type { ConfigResetParams } from '../../interfaces/config-reset-params.interface';
import type { PullContainerImageParams, PullContainerImageResponse } from '../../interfaces/container-image.interface';
import type { CoreBulkQuery, CoreBulkResponse } from '../../interfaces/core-bulk.interface';
import type { DatasetChangeKeyParams } from '../../interfaces/dataset-change-key.interface';
import type { DatasetEncryptionSummary, DatasetEncryptionSummaryQueryParams } from '../../interfaces/dataset-encryption-summary.interface';
import type { DatasetLockParams, DatasetUnlockParams, DatasetUnlockResult } from '../../interfaces/dataset-lock.interface';
import type { ExportParams } from '../../interfaces/export-params.interface';
import type { FailoverUpgradeParams } from '../../interfaces/failover.interface';
import type { FilesystemPutParams, FilesystemSetPermParams } from '../../interfaces/filesystem-stat.interface';
import type { IpmiEvent } from '../../interfaces/ipmi.interface';
import { Job } from '../../interfaces/job.interface';
import type { KmipConfig, KmipConfigUpdate } from '../../interfaces/kmip-config.interface';
import { KubernetesConfig, KubernetesConfigUpdate } from '../../interfaces/kubernetes-config.interface';
import type { LdapConfig, LdapConfigUpdate } from '../../interfaces/ldap-config.interface';
import type { MailConfigUpdate, SendMailParams } from '../../interfaces/mail-config.interface';
import type { PoolExportParams } from '../../interfaces/pool-export.interface';
import type { PoolFindResult, PoolImportParams } from '../../interfaces/pool-import.interface';
import type { PoolRemoveParams } from '../../interfaces/pool-remove.interface';
import type { PoolScrubTaskParams } from '../../interfaces/pool-scrub.interface';
import type { CreatePool, Pool, PoolAttachParams, PoolExpandParams, PoolReplaceParams, UpdatePool } from '../../interfaces/pool.interface';
import type { DiskWipeParams } from '../../interfaces/storage.interface';
import type { SystemDatasetConfig, SystemDatasetUpdate } from '../../interfaces/system-dataset-config.interface';
import type { SystemSecurityConfig } from '../../interfaces/system-security-config.interface';
import type { UpdateParams } from '../../interfaces/system-update.interface';
import type { Tunable, TunableCreate, TunableUpdate } from '../../interfaces/tunable.interface';
import type { VmStopParams } from '../../interfaces/virtual-machine.interface';
import type { App, AppCreate, AppDeleteParams, AppRollbackParams, AppStartQueryParams, AppUpdate, AppUpgradeParams } from '../app.interface';

export interface ApiJobDirectory {
    // Active Directory
    'activedirectory.update': { params: [ActiveDirectoryUpdate]; response: ActiveDirectoryConfig };
    'activedirectory.leave': { params: [LeaveActiveDirectory]; response: void };

    // Audit
    'audit.export': { params: [ExportParams<AuditEntry>]; response: string };

    // Boot
    'boot.attach': { params: [disk: string, params: { expand?: boolean }]; response: void };
    'boot.replace': { params: [oldDisk: string, newDisk: string]; response: void };
    'boot.scrub': { params: void; response: void };

    // Boot Environment
    'bootenv.delete': { params: [string]; response: boolean };

    // Catalog
    'catalog.create': { params: [CatalogCreate]; response: Catalog };
    'catalog.sync': { params: void; response: void };

    // Certificate
    'certificate.create': { params: [CertificateCreate]; response: Certificate };
    'certificate.delete': { params: [id: number, force?: boolean]; response: boolean };
    'certificate.update': {
        params: [id: number, update: CertificateUpdate];
        response: Certificate;
    };

    // App
    'app.create': { params: [AppCreate]; response: App };
    'app.update': { params: [string, AppUpdate]; response: App };
    'app.start': { params: AppStartQueryParams; response: void };
    'app.stop': { params: AppStartQueryParams; response: void };
    'app.delete': { params: AppDeleteParams; response: boolean };
    'app.upgrade': { params: AppUpgradeParams; response: App };
    'app.rollback': { params: AppRollbackParams; response: App };

    // CloudBackup
    'cloud_backup.sync': { params: [id: number, params?: { dry_run: boolean }]; response: void };

    // CloudSync
    'cloudsync.sync': { params: [id: number, params?: { dry_run: boolean }]; response: number };
    'cloudsync.sync_onetime': {
        params: [task: CloudSyncTaskUpdate, params: { dry_run?: boolean }];
        response: void;
    };

    // Container
    'container.image.pull': {
        params: [PullContainerImageParams];
        response: PullContainerImageResponse;
    };

    // Config
    'config.reset': { params: [ConfigResetParams]; response: void };
    'config.upload': { params: void; response: void };

    // Core
    'core.bulk': { params: CoreBulkQuery; response: CoreBulkResponse[] };

    // Directory Services
    'directoryservices.cache_refresh': { params: void; response: void };

    // Disk
    'disk.wipe': { params: DiskWipeParams; response: void };

    // Failover
    'failover.reboot.other_node': { params: void; response: void };
    'failover.upgrade': { params: [FailoverUpgradeParams]; response: boolean };
    'failover.upgrade_finish': { params: void; response: boolean };

    // Filesystem
    'filesystem.put': { params: FilesystemPutParams; response: boolean };
    'filesystem.setacl': { params: [SetAcl]; response: void };
    'filesystem.setperm': { params: [FilesystemSetPermParams]; response: void };

    // idmap
    'idmap.clear_idmap_cache': { params: void; response: void };

    // IPMI
    'ipmi.sel.clear': { params: void; response: void };
    'ipmi.sel.elist': { params: void; response: IpmiEvent[] };

    // KMIP
    'kmip.update': { params: [KmipConfigUpdate]; response: KmipConfig };

    // Docker
    'docker.update': { params: [DockerConfigUpdate]; response: DockerConfig };

    // LDAP
    'ldap.update': { params: [LdapConfigUpdate]; response: LdapConfig };

    // Mail
    'mail.send': { params: [SendMailParams, MailConfigUpdate]; response: boolean };

    // Pool
    'pool.attach': { params: [id: number, params: PoolAttachParams]; response: void };
    'pool.create': { params: [CreatePool]; response: Pool };
    'pool.expand': { params: PoolExpandParams; response: null };
    'pool.export': { params: PoolExportParams; response: void };
    'pool.import_find': { params: void; response: PoolFindResult[] };
    'pool.import_pool': { params: [PoolImportParams]; response: boolean };
    'pool.remove': { params: PoolRemoveParams; response: void };
    'pool.replace': { params: [id: number, params: PoolReplaceParams]; response: boolean };
    'pool.scrub': { params: PoolScrubTaskParams; response: void };
    'pool.update': { params: [id: number, update: UpdatePool]; response: Pool };
    'pool.dataset.change_key': {
        params: [id: string, params: DatasetChangeKeyParams];
        response: void;
    };
    'pool.dataset.encryption_summary': {
        params: [path: string, params?: DatasetEncryptionSummaryQueryParams];
        response: DatasetEncryptionSummary[];
    };
    'pool.dataset.export_key': { params: [id: string, download?: boolean]; response: string };
    'pool.dataset.lock': { params: DatasetLockParams; response: boolean };
    'pool.dataset.unlock': {
        params: [path: string, params: DatasetUnlockParams];
        response: DatasetUnlockResult;
    };

    // Replication
    'replication.run': { params: [id: number]; response: number };

    // Rsync
    'rsynctask.run': { params: [id: number]; response: null };

    // System
    'system.reboot': { params: { delay?: number }; response: void };
    'system.shutdown': { params: { delay?: number }; response: void };
    'system.security.update': { params: [SystemSecurityConfig]; response: void };

    // SystemDataset
    'systemdataset.update': { params: [SystemDatasetUpdate]; response: SystemDatasetConfig };

    // TrueNAS
    'truenas.set_production': {
        params: [production: boolean, attach_debug: boolean];
        response: { ticket: number; url: string };
    };

    // Tunable
    'tunable.create': { params: [TunableCreate]; response: Tunable };
    'tunable.delete': { params: [id: number]; response: true };
    'tunable.update': { params: [id: number, update: TunableUpdate]; response: Tunable };

    // Update
    'update.download': { params: void; response: boolean };
    'update.file': { params: [{ resume: boolean }?]; response: void };
    'update.update': { params: [UpdateParams]; response: void };
    'update.run': { params: [UpdateParams]; response: void };

    // VM
    'vm.restart': { params: [id: number]; response: void };
    'vm.stop': { params: VmStopParams; response: void };
}

export type ApiJobMethod = keyof ApiJobDirectory;
export type ApiJobParams<T extends ApiJobMethod> = ApiJobDirectory[T]['params'];
export type ApiJobResponse<T extends ApiJobMethod> = ApiJobDirectory[T]['response'];
