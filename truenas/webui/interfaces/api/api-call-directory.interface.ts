import type { AlertPolicy } from '../../enums/alert-policy.enum';
import type { DatasetRecordSize, DatasetType } from '../../enums/dataset.enum';
import type { DeviceType } from '../../enums/device-type.enum';
import type { EnclosureSlotStatus } from '../../enums/enclosure-slot-status.enum';
import type { FailoverDisabledReason } from '../../enums/failover-disabled-reason.enum';
import type { FailoverStatus } from '../../enums/failover-status.enum';
import type { OnOff } from '../../enums/on-off.enum';
import type { ProductType } from '../../enums/product-type.enum';
import type { ServiceName } from '../../enums/service-name.enum';
import type { SmbInfoLevel } from '../../enums/smb-info-level.enum';
import type { SystemEnvironment } from '../../enums/system-environment.enum';
import type { TransportMode } from '../../enums/transport-mode.enum';
import type {
    Acl,
    AclQueryParams,
    AclTemplateByPath,
    AclTemplateByPathParams,
    AclTemplateCreateParams,
    AclTemplateCreateResponse,
} from '../../interfaces/acl.interface';
import type { ActiveDirectoryConfig } from '../../interfaces/active-directory-config.interface';
import type { AdvancedConfig, AdvancedConfigUpdate } from '../../interfaces/advanced-config.interface';
import type { AlertService, AlertServiceEdit } from '../../interfaces/alert-service.interface';
import type { Alert, AlertCategory, AlertClasses, AlertClassesUpdate } from '../../interfaces/alert.interface';
import type { ApiTimestamp } from '../../interfaces/api-date.interface';
import type { ApiKey, CreateApiKeyRequest, UpdateApiKeyRequest } from '../../interfaces/api-key.interface';
import type { AppUpgradeSummary, UpgradeSummary } from '../../interfaces/application.interface';
import type { AuditConfig, AuditEntry, AuditQueryParams } from '../../interfaces/audit/audit.interface';
import type { AuthSession } from '../../interfaces/auth-session.interface';
import type { LoginQuery } from '../../interfaces/auth.interface';
import type { AvailableApp } from '../../interfaces/available-app.interface';
import type { Bootenv, CreateBootenvParams, SetBootenvAttributeParams, UpdateBootenvParams } from '../../interfaces/bootenv.interface';
import type {
    Catalog,
    CatalogApp,
    CatalogItems,
    CatalogItemsQueryParams,
    CatalogQueryParams,
    CatalogUpdate,
    GetItemDetailsParams,
} from '../../interfaces/catalog.interface';
import type { CertificateAuthority, CertificateAuthoritySignRequest, CertificateAuthorityUpdate } from '../../interfaces/certificate-authority.interface';
import type { Certificate, CertificateProfiles, ExtendedKeyUsageChoices } from '../../interfaces/certificate.interface';
import type { ChartReleaseEvent } from '../../interfaces/chart-release-event.interface';
import type { ChartRelease, ChartReleaseQueryParams, ChartReleaseUpgradeParams } from '../../interfaces/chart-release.interface';
import type { Choices } from '../../interfaces/choices.interface';
import type { CloudBackup, CloudBackupSnapshot, CloudBackupUpdate } from '../../interfaces/cloud-backup.interface';
import type { CloudSyncDirectoryListing, CloudSyncListDirectoryParams, CloudSyncTask, CloudSyncTaskUpdate } from '../../interfaces/cloud-sync-task.interface';
import type {
    CloudSyncBucket,
    CloudSyncCredential,
    CloudSyncCredentialUpdate,
    CloudSyncCredentialVerify,
    CloudSyncCredentialVerifyResult,
} from '../../interfaces/cloudsync-credential.interface';
import type { CloudSyncProvider, CloudSyncRestoreParams } from '../../interfaces/cloudsync-provider.interface';
import type { ContainerConfig, ContainerConfigUpdate } from '../../interfaces/container-config.interface';
import type { ContainerImage, DeleteContainerImageParams } from '../../interfaces/container-image.interface';
import type { CoreDownloadQuery, CoreDownloadResponse } from '../../interfaces/core-download.interface';
import type {
    CountManualSnapshotsParams,
    EligibleManualSnapshotsCount,
    TargetUnmatchedSnapshotsParams,
} from '../../interfaces/count-manual-snapshots.interface';
import type { Cronjob, CronjobUpdate } from '../../interfaces/cronjob.interface';
import type { DatasetHasVmsQueryParams } from '../../interfaces/dataset-has-vms-query-params.interface';
import type { DatasetQuota, DatasetQuotaQueryParams, SetDatasetQuota } from '../../interfaces/dataset-quota.interface';
import type { Dataset, DatasetCreate, DatasetDetails, DatasetUpdate, ExtraDatasetQueryOptions } from '../../interfaces/dataset.interface';
import type { Device } from '../../interfaces/device.interface';
import type { DirectoryServicesState } from '../../interfaces/directory-services-state.interface';
import type { AuthenticatorSchema, CreateDnsAuthenticator, DnsAuthenticator, UpdateDnsAuthenticator } from '../../interfaces/dns-authenticator.interface';
import type { DockerHubRateLimit } from '../../interfaces/dockerhub-rate-limit.interface';
import type { DsUncachedGroup, DsUncachedUser, LoggedInUser } from '../../interfaces/ds-cache.interface';
import type { EnclosureUi } from '../../interfaces/enclosure.interface';
import type { FailoverConfig, FailoverUpdate } from '../../interfaces/failover.interface';
import type { FileRecord, ListdirQueryParams } from '../../interfaces/file-record.interface';
import type { FileSystemStat, Statfs } from '../../interfaces/filesystem-stat.interface';
import type { FtpConfig, FtpConfigUpdate } from '../../interfaces/ftp-config.interface';
import type { CreateGroup, DeleteGroupParams, Group, UpdateGroup } from '../../interfaces/group.interface';
import type { IdmapBackendOptions } from '../../interfaces/idmap-backend-options.interface';
import type { Idmap, IdmapUpdate } from '../../interfaces/idmap.interface';
import type { CreateInitShutdownScript, InitShutdownScript, UpdateInitShutdownScriptParams } from '../../interfaces/init-shutdown-script.interface';
import type { Ipmi, IpmiChassis, IpmiQueryParams, IpmiUpdate } from '../../interfaces/ipmi.interface';
import type { IscsiGlobalConfig, IscsiGlobalConfigUpdate, IscsiGlobalSession } from '../../interfaces/iscsi-global-config.interface';
import type {
    IscsiAuthAccess,
    IscsiAuthAccessUpdate,
    IscsiExtent,
    IscsiExtentUpdate,
    IscsiInitiatorGroup,
    IscsiInitiatorGroupUpdate,
    IscsiPortal,
    IscsiPortalUpdate,
    IscsiTarget,
    IscsiTargetExtent,
    IscsiTargetExtentUpdate,
    IscsiTargetUpdate,
} from '../../interfaces/iscsi.interface';
import type { Jbof, JbofUpdate } from '../../interfaces/jbof.interface';
import type { Job } from '../../interfaces/job.interface';
import type { KerberosConfig, KerberosConfigUpdate, KerberosKeytab, KerberosKeytabUpdate } from '../../interfaces/kerberos-config.interface';
import type { KerberosRealm, KerberosRealmUpdate } from '../../interfaces/kerberos-realm.interface';
import type {
    KeychainCredential,
    KeychainCredentialCreate,
    KeychainCredentialUpdate,
    KeychainSshCredentials,
    SshKeyPair,
} from '../../interfaces/keychain-credential.interface';
import type { KmipConfig } from '../../interfaces/kmip-config.interface';
import type { KubernetesConfig } from '../../interfaces/kubernetes-config.interface';
import type { KubernetesStatusData } from '../../interfaces/kubernetes-status-data.interface';
import type { LdapConfig } from '../../interfaces/ldap-config.interface';
import type { MailConfig, MailConfigUpdate } from '../../interfaces/mail-config.interface';
import type { NetworkConfiguration, NetworkConfigurationUpdate } from '../../interfaces/network-configuration.interface';
import type {
    NetworkInterface,
    NetworkInterfaceAlias,
    NetworkInterfaceCreate,
    NetworkInterfaceUpdate,
    ServiceRestartedOnNetworkSync,
} from '../../interfaces/network-interface.interface';
import type { NetworkSummary } from '../../interfaces/network-summary.interface';
import type { AddNfsPrincipal, NfsConfig, NfsConfigUpdate } from '../../interfaces/nfs-config.interface';
import type { Nfs3Session, Nfs4Session, NfsShare, NfsShareUpdate } from '../../interfaces/nfs-share.interface';
import type { CreateNtpServer, NtpServer } from '../../interfaces/ntp-server.interface';
import type { MapOption } from '../../interfaces/option.interface';
import type { PeriodicSnapshotTask, PeriodicSnapshotTaskCreate, PeriodicSnapshotTaskUpdate } from '../../interfaces/periodic-snapshot-task.interface';
import type { DatasetAttachment, PoolAttachment } from '../../interfaces/pool-attachment.interface';
import type { CreatePoolScrubTask, PoolScrubTask } from '../../interfaces/pool-scrub.interface';
import type { Pool, PoolInstance } from '../../interfaces/pool.interface';
import type { Privilege, PrivilegeRole, PrivilegeUpdate } from '../../interfaces/privilege.interface';
import type { Process } from '../../interfaces/process.interface';
import type { QueryParams } from '../../interfaces/query-api.interface';
import type { ReplicationConfigUpdate } from '../../interfaces/replication-config-update.interface';
import type { ReplicationConfig } from '../../interfaces/replication-config.interface';
import type { ReplicationCreate, ReplicationTask } from '../../interfaces/replication-task.interface';
import type {
    CreateReportingExporter,
    ReportingExporter,
    ReportingExporterSchema,
    UpdateReportingExporter,
} from '../../interfaces/reporting-exporters.interface';
import type { ReportingGraph } from '../../interfaces/reporting-graph.interface';
import type { ReportingData, ReportingQueryParams } from '../../interfaces/reporting.interface';
import type { ResilverConfig, ResilverConfigUpdate } from '../../interfaces/resilver-config.interface';
import type { RsyncTask, RsyncTaskUpdate } from '../../interfaces/rsync-task.interface';
import type { Service } from '../../interfaces/service.interface';
import type { ResizeShellRequest } from '../../interfaces/shell.interface';
import type {
    SmartManualTestParams,
    SmartConfig,
    SmartConfigUpdate,
    SmartTestTask,
    SmartTestResults,
    ManualSmartTest,
    SmartTestTaskUpdate,
} from '../../interfaces/smart-test.interface';
import type { SmbConfig, SmbConfigUpdate } from '../../interfaces/smb-config.interface';
import type { SmbPresets, SmbShare, SmbSharesec, SmbSharesecAce, SmbShareUpdate } from '../../interfaces/smb-share.interface';
import type { SmbStatus } from '../../interfaces/smb-status.interface';
import type { SnmpConfig, SnmpConfigUpdate } from '../../interfaces/snmp-config.interface';
import type { SshConfig, SshConfigUpdate } from '../../interfaces/ssh-config.interface';
import type { RemoteSshScanParams, SshConnectionSetup, SshSemiAutomaticSetup } from '../../interfaces/ssh-connection-setup.interface';
import type { StaticRoute, UpdateStaticRoute } from '../../interfaces/static-route.interface';
import type { Disk, ExtraDiskQueryOptions, DiskTemperatures, DiskTemperatureAgg, DiskUpdate, UnusedDisk } from '../../interfaces/storage.interface';
import type { SystemGeneralConfig, SystemGeneralConfigUpdate } from '../../interfaces/system-config.interface';
import type { SystemDatasetConfig } from '../../interfaces/system-dataset-config.interface';
import type { SystemInfo } from '../../interfaces/system-info.interface';
import type { SystemSecurityConfig } from '../../interfaces/system-security-config.interface';
import type { SystemUpdate, SystemUpdateChange, SystemUpdateTrains } from '../../interfaces/system-update.interface';
import type {
    TrueCommandConfig,
    TrueCommandConnectionState,
    TrueCommandUpdateResponse,
    UpdateTrueCommand,
} from '../../interfaces/true-command-config.interface';
import type { Tunable } from '../../interfaces/tunable.interface';
import type { GlobalTwoFactorConfig, GlobalTwoFactorConfigUpdate, UserTwoFactorConfig } from '../../interfaces/two-factor-config.interface';
import type { UpsConfig, UpsConfigUpdate } from '../../interfaces/ups-config.interface';
import type { DeleteUserParams, SetPasswordParams, User, UserUpdate } from '../../interfaces/user.interface';
import type {
    VirtualizationDetails,
    VirtualMachine,
    VirtualMachineUpdate,
    VmCloneParams,
    VmDeleteParams,
    VmDisplayWebUri,
    VmDisplayWebUriParams,
    VmPortWizardResult,
} from '../../interfaces/virtual-machine.interface';
import type {
    VmDevice,
    VmDeviceDelete,
    VmDeviceUpdate,
    VmDisplayDevice,
    VmPassthroughDeviceChoice,
    VmUsbPassthroughDeviceChoice,
} from '../../interfaces/vm-device.interface';
import type { MatchDatastoresWithDatasets, MatchDatastoresWithDatasetsParams, VmwareSnapshot, VmwareSnapshotUpdate } from '../../interfaces/vmware.interface';
import type { CloneZfsSnapshot, CreateZfsSnapshot, ZfsRollbackParams, ZfsSnapshot } from '../../interfaces/zfs-snapshot.interface';
import type { SimilarIssue, SimilarIssuesParams, SupportConfig, SupportConfigUpdate } from '../modules/feedback/interfaces/file-ticket.interface';
import type { SystemHealth } from '../system-health.interface';
import type { App, AppQueryParams, AppUpgradeParams } from '../app.interface';
import type { DetailsDisk, DiskSmartAttribute } from '../disk.interface';
import { DockerConfig, DockerStatusData } from '../../enums/docker-config.interface';

/**
 * API definitions for `call` methods.
 * For jobs see ApiJobDirectory.
 * For events from `subscribed` see ApiEventDirectory.
 */
export interface ApiCallDirectory {
    // Acme DNS
    'acme.dns.authenticator.authenticator_schemas': {
        params: void;
        response: AuthenticatorSchema[];
    };
    'acme.dns.authenticator.create': {
        params: [CreateDnsAuthenticator];
        response: DnsAuthenticator;
    };
    'acme.dns.authenticator.delete': { params: [id: number]; response: boolean };
    'acme.dns.authenticator.query': { params: void; response: DnsAuthenticator[] };
    'acme.dns.authenticator.update': {
        params: [number, UpdateDnsAuthenticator];
        response: DnsAuthenticator;
    };

    // Active Directory
    'activedirectory.config': { params: void; response: ActiveDirectoryConfig };
    'activedirectory.nss_info_choices': { params: void; response: string[] };

    // Alert
    'alert.dismiss': { params: string[]; response: void };
    'alert.list': { params: void; response: Alert[] };
    'alert.list_categories': { params: void; response: AlertCategory[] };
    'alert.list_policies': { params: void; response: AlertPolicy[] };
    'alert.restore': { params: string[]; response: void };

    // Alert Classes
    'alertclasses.config': { params: void; response: AlertClasses };
    'alertclasses.update': { params: [AlertClassesUpdate]; response: AlertClasses };
    'alertservice.create': { params: [AlertServiceEdit]; response: AlertService };
    'alertservice.delete': { params: [number]; response: boolean };
    'alertservice.query': { params: QueryParams<AlertService>; response: AlertService[] };
    'alertservice.test': { params: [AlertServiceEdit]; response: boolean };
    'alertservice.update': {
        params: [id: number, update: AlertServiceEdit];
        response: AlertService;
    };

    // API Key
    'api_key.create': { params: [CreateApiKeyRequest]; response: ApiKey };
    'api_key.delete': { params: [id: string]; response: boolean };
    'api_key.query': { params: QueryParams<ApiKey>; response: ApiKey[] };
    'api_key.update': { params: UpdateApiKeyRequest; response: ApiKey };

    // App
    'app.query': { params: AppQueryParams; response: App[] };
    'app.upgrade_summary': { params: AppUpgradeParams; response: AppUpgradeSummary };
    'app.available': { params: QueryParams<AvailableApp>; response: AvailableApp[] };
    'app.available_space': { params: void; response: number };
    'app.categories': { params: void; response: string[] };
    'app.latest': { params: QueryParams<AvailableApp>; response: AvailableApp[] };
    'app.similar': { params: [app_name: string, train: string]; response: AvailableApp[] };
    'app.rollback_versions': { params: [app_name: string]; response: string[] };
    'app.used_ports': { params: void; response: number[] };

    // Audit
    'audit.config': { params: void; response: AuditConfig };
    'audit.query': { params: [AuditQueryParams]; response: AuditEntry[] };
    'audit.update': { params: [AuditConfig]; response: AuditEntry[] };
    'audit.download_report': { params: [{ report_name?: string }]; response: string[] };

    // Auth
    'auth.generate_token': { params: void; response: string };
    'auth.login': { params: LoginQuery; response: boolean };
    'auth.login_with_token': { params: [token: string]; response: boolean };
    'auth.login_with_api_key': { params: [api_key: string]; response: boolean };
    'auth.logout': { params: void; response: void };
    'auth.me': { params: void; response: LoggedInUser };
    'auth.sessions': { params: QueryParams<AuthSession>; response: AuthSession[] };
    'auth.set_attribute': { params: [key: string, value: unknown]; response: void };
    'auth.terminate_other_sessions': { params: void; response: void };
    'auth.terminate_session': { params: [id: string]; response: void };
    'auth.two_factor_auth': { params: [string, string]; response: boolean };
    'auth.twofactor.config': { params: void; response: GlobalTwoFactorConfig };
    'auth.twofactor.update': {
        params: [GlobalTwoFactorConfigUpdate];
        response: GlobalTwoFactorConfig;
    };

    // Boot
    'boot.detach': { params: [disk: string]; response: void };
    'boot.get_state': { params: void; response: PoolInstance };
    'boot.set_scrub_interval': { params: [number]; response: number };
    'boot.get_disks': { params: void; response: string[] };

    // Bootenv
    'bootenv.activate': { params: [string]; response: boolean };
    'bootenv.create': { params: CreateBootenvParams; response: string };
    'bootenv.query': { params: QueryParams<Bootenv>; response: Bootenv[] };
    'bootenv.set_attribute': { params: SetBootenvAttributeParams; response: boolean };
    'bootenv.update': { params: UpdateBootenvParams; response: string };

    // Catalog
    'catalog.delete': { params: [name: string]; response: boolean };
    'catalog.get_item_details': {
        params: [name: string, params: GetItemDetailsParams];
        response: CatalogApp;
    };
    'catalog.items': {
        params: [label: string, params?: CatalogItemsQueryParams];
        response: CatalogItems;
    };
    'catalog.query': { params: CatalogQueryParams; response: Catalog[] };
    'catalog.update': { params: [id: string, update: CatalogUpdate]; response: Catalog };

    // Certificate
    'certificate.acme_server_choices': { params: void; response: Choices };
    'certificate.country_choices': { params: void; response: Choices };
    'certificate.ec_curve_choices': { params: void; response: Choices };
    'certificate.extended_key_usage_choices': { params: void; response: ExtendedKeyUsageChoices };
    'certificate.get_domain_names': { params: [number]; response: string[] };
    'certificate.profiles': { params: void; response: CertificateProfiles };
    'certificate.query': { params: QueryParams<Certificate>; response: Certificate[] };

    // Certificate Authority
    'certificateauthority.ca_sign_csr': {
        params: [CertificateAuthoritySignRequest];
        response: CertificateAuthority;
    };
    'certificateauthority.create': {
        params: [CertificateAuthorityUpdate];
        response: CertificateAuthority;
    };
    'certificateauthority.delete': { params: [id: number]; response: boolean };
    'certificateauthority.profiles': { params: void; response: CertificateProfiles };
    'certificateauthority.query': {
        params: QueryParams<CertificateAuthority>;
        response: CertificateAuthority[];
    };
    'certificateauthority.update': {
        params: [number, Partial<CertificateAuthorityUpdate>];
        response: CertificateAuthority;
    };

    // Chart
    'chart.release.events': { params: [name: string]; response: ChartReleaseEvent[] };
    'chart.release.get_chart_releases_using_chart_release_images': {
        params: [name: string];
        response: Choices;
    };
    'chart.release.pod_console_choices': { params: [string]; response: Record<string, string[]> };
    'chart.release.pod_logs_choices': { params: [string]; response: Record<string, string[]> };
    'chart.release.query': { params: ChartReleaseQueryParams; response: ChartRelease[] };
    'chart.release.upgrade_summary': {
        params: ChartReleaseUpgradeParams;
        response: UpgradeSummary;
    };

    // CloudBackup
    'cloud_backup.abort': { params: [id: number]; response: void };
    'cloud_backup.create': { params: [CloudBackupUpdate]; response: CloudBackup };
    'cloud_backup.delete': { params: [id: number]; response: boolean };
    'cloud_backup.list_snapshots': { params: [id: number]; response: CloudBackupSnapshot[] };
    'cloud_backup.query': { params: [id: QueryParams<CloudBackup>]; response: CloudBackup[] };
    'cloud_backup.update': {
        params: [id: number, update: CloudBackupUpdate];
        response: CloudBackup;
    };

    // CloudSync
    'cloudsync.abort': { params: [id: number]; response: boolean };
    'cloudsync.create': { params: [CloudSyncTaskUpdate]; response: CloudSyncTask };
    'cloudsync.create_bucket': { params: [number, string]; response: void };
    'cloudsync.credentials.create': {
        params: [CloudSyncCredentialUpdate];
        response: CloudSyncCredential;
    };
    'cloudsync.credentials.delete': { params: [id: number]; response: boolean };
    'cloudsync.credentials.query': {
        params: QueryParams<CloudSyncCredential>;
        response: CloudSyncCredential[];
    };
    'cloudsync.credentials.update': {
        params: [id: number, update: CloudSyncCredentialUpdate];
        response: CloudSyncCredential;
    };
    'cloudsync.credentials.verify': {
        params: [CloudSyncCredentialVerify];
        response: CloudSyncCredentialVerifyResult;
    };
    'cloudsync.delete': { params: [id: number]; response: boolean };
    'cloudsync.list_buckets': { params: [id: number]; response: CloudSyncBucket[] };
    'cloudsync.list_directory': {
        params: [CloudSyncListDirectoryParams];
        response: CloudSyncDirectoryListing[];
    };
    'cloudsync.providers': { params: void; response: CloudSyncProvider[] };
    'cloudsync.query': { params: QueryParams<CloudSyncTask>; response: CloudSyncTask[] };
    'cloudsync.restore': { params: CloudSyncRestoreParams; response: void };
    'cloudsync.update': {
        params: [id: number, task: CloudSyncTaskUpdate];
        response: CloudSyncTask;
    };

    // Container
    'container.config': { params: void; response: ContainerConfig };
    'container.image.delete': { params: DeleteContainerImageParams; response: void };
    'container.image.dockerhub_rate_limit': { params: void; response: DockerHubRateLimit };
    'container.image.query': { params: QueryParams<ContainerImage>; response: ContainerImage[] };
    'container.update': { params: [ContainerConfigUpdate]; response: ContainerConfig };

    // Core
    'core.download': { params: CoreDownloadQuery; response: CoreDownloadResponse };
    'core.get_jobs': { params: QueryParams<Job>; response: Job[] };
    'core.job_abort': { params: [jobId: number]; response: void };
    'core.job_download_logs': { params: [id: number, filename: string]; response: string };
    'core.resize_shell': { params: ResizeShellRequest; response: void };

    // Cronjob
    'cronjob.create': { params: [CronjobUpdate]; response: Cronjob };
    'cronjob.delete': { params: [id: number]; response: boolean };
    'cronjob.query': { params: QueryParams<Cronjob>; response: Cronjob[] };
    'cronjob.run': { params: [id: number]; response: void };
    'cronjob.update': { params: [id: number, update: CronjobUpdate]; response: Cronjob };

    // Device
    'device.get_info': {
        params: [DeviceType];
        response: {
            [key: string]: DetailsDisk;
        };
    };

    // Directory Services
    'directoryservices.get_state': { params: void; response: DirectoryServicesState };

    // Disk
    'disk.get_unused': { params: [joinPartitions?: boolean]; response: UnusedDisk[] };
    'disk.query': { params: QueryParams<Disk, ExtraDiskQueryOptions>; response: Disk[] };
    'disk.temperature_agg': {
        params: [disks: string[], days: number];
        response: DiskTemperatureAgg;
    };
    'disk.temperature_alerts': { params: [disks: string[]]; response: Alert[] };
    'disk.temperatures': { params: [disks: string[]]; response: DiskTemperatures };
    'disk.update': { params: [id: string, update: DiskUpdate]; response: Disk };

    // Docker
    'docker.config': { params: void; response: DockerConfig };
    'docker.status': { params: void; response: DockerStatusData };
    'docker.nvidia_present': { params: void; response: boolean };

    // Enclosure
    'enclosure2.query': { params: void; response: EnclosureUi[] };
    'webui.enclosure.dashboard': { params: void; response: EnclosureUi[] };
    'enclosure.update': {
        params: [enclosureId: string, update: { label: string }];
        response: EnclosureUi;
    };
    'enclosure.set_slot_status': {
        params: [id: string, slot: number, status: EnclosureSlotStatus];
        response: void;
    };

    // Failover
    'failover.become_passive': { params: void; response: void };
    'failover.config': { params: void; response: FailoverConfig };
    'failover.disabled.reasons': { params: void; response: FailoverDisabledReason[] };
    'failover.get_ips': { params: void; response: string[] };
    'failover.licensed': { params: void; response: boolean };
    'failover.node': { params: void; response: string };
    'failover.status': { params: void; response: FailoverStatus };
    'failover.sync_from_peer': { params: void; response: void };
    'failover.sync_to_peer': { params: [{ reboot?: boolean }]; response: void };
    'failover.update': { params: [FailoverUpdate]; response: FailoverConfig };
    'failover.upgrade_pending': { params: void; response: boolean };

    // Filesystem
    'filesystem.acl_is_trivial': {
        params: [string];
        /**
         * Returns True if the ACL can be fully expressed as a file mode without losing any access rules,
         * or if the path does not support NFSv4 ACLs (for example a path on a tmpfs filesystem).
         */
        response: boolean;
    };
    'filesystem.acltemplate.by_path': {
        params: [AclTemplateByPathParams];
        response: AclTemplateByPath[];
    };
    'filesystem.acltemplate.create': {
        params: [AclTemplateCreateParams];
        response: AclTemplateCreateResponse;
    };
    'filesystem.acltemplate.delete': { params: [id: number]; response: boolean };
    'filesystem.getacl': { params: AclQueryParams; response: Acl };
    'filesystem.listdir': { params: ListdirQueryParams; response: FileRecord[] };
    'filesystem.stat': { params: [path: string]; response: FileSystemStat };
    'filesystem.statfs': { params: [path: string]; response: Statfs };
    'filesystem.get': { params: [path: string]; response: File };
    'filesystem.mkdir': { params: [path: string]; response: void };

    // FTP
    'ftp.config': { params: void; response: FtpConfig };
    'ftp.update': { params: [FtpConfigUpdate]; response: FtpConfig };

    // Group
    'group.create': { params: [CreateGroup]; response: number };
    'group.delete': { params: DeleteGroupParams; response: number };
    'group.get_group_obj': {
        params: [{ groupname?: string; gid?: number }];
        response: DsUncachedGroup;
    };
    'group.get_next_gid': { params: void; response: number };
    'group.query': { params: QueryParams<Group>; response: Group[] };
    'group.update': { params: [number, UpdateGroup]; response: number };

    // Idmap
    'idmap.backend_options': { params: void; response: IdmapBackendOptions };
    'idmap.create': { params: [IdmapUpdate]; response: Idmap };
    'idmap.delete': { params: [id: number]; response: boolean };
    'idmap.query': { params: QueryParams<Idmap>; response: Idmap[] };
    'idmap.update': { params: [id: number, update: IdmapUpdate]; response: Idmap };

    // Initshutdownscript
    'initshutdownscript.create': {
        params: [CreateInitShutdownScript];
        response: InitShutdownScript;
    };
    'initshutdownscript.delete': { params: [id: number]; response: boolean };
    'initshutdownscript.query': {
        params: QueryParams<InitShutdownScript>;
        response: InitShutdownScript[];
    };
    'initshutdownscript.update': {
        params: UpdateInitShutdownScriptParams;
        response: InitShutdownScript;
    };

    // Interface
    'interface.bridge_members_choices': { params: [id: string]; response: Choices };
    'interface.cancel_rollback': { params: void; response: void };
    'interface.checkin': { params: void; response: void };
    'interface.checkin_waiting': { params: void; response: number | null };
    'interface.commit': { params: [{ checkin_timeout: number }]; response: void };
    'interface.create': { params: [NetworkInterfaceCreate]; response: NetworkInterface };
    'interface.default_route_will_be_removed': { params: void; response: boolean };
    'interface.delete': { params: [id: string]; response: string };
    'interface.has_pending_changes': { params: void; response: boolean };
    'interface.lacpdu_rate_choices': { params: void; response: Choices };
    'interface.lag_ports_choices': { params: [id: string]; response: Choices };
    'interface.lag_supported_protocols': { params: void; response: string[] };
    'interface.query': { params: QueryParams<NetworkInterface>; response: NetworkInterface[] };
    'interface.rollback': { params: void; response: void };
    'interface.save_default_route': { params: string[]; response: void };
    'interface.services_restarted_on_sync': {
        params: void;
        response: ServiceRestartedOnNetworkSync[];
    };
    'interface.update': {
        params: [id: string, update: NetworkInterfaceUpdate];
        response: NetworkInterface;
    };
    'interface.vlan_parent_interface_choices': { params: void; response: Choices };
    'interface.xmit_hash_policy_choices': { params: void; response: Choices };
    'interface.ip_in_use': { params: void; response: NetworkInterfaceAlias[] };

    // IPMI
    'ipmi.chassis.identify': { params: [OnOff]; response: void };
    'ipmi.chassis.info': { params: void; response: IpmiChassis };
    'ipmi.is_loaded': { params: void; response: boolean };
    'ipmi.lan.query': { params: IpmiQueryParams; response: Ipmi[] };
    'ipmi.lan.update': { params: [id: number, update: IpmiUpdate]; response: Ipmi };

    // iSCSI
    'iscsi.auth.create': { params: [IscsiAuthAccessUpdate]; response: IscsiAuthAccess };
    'iscsi.auth.delete': { params: [id: number]; response: boolean };
    'iscsi.auth.query': { params: QueryParams<IscsiAuthAccess>; response: IscsiAuthAccess[] };
    'iscsi.auth.update': {
        params: [id: number, auth: IscsiAuthAccessUpdate];
        response: IscsiAuthAccess;
    };
    'iscsi.extent.create': { params: [IscsiExtentUpdate]; response: IscsiExtent };
    'iscsi.extent.delete': {
        params: [id: number, remove: boolean, force: boolean];
        response: boolean;
    };
    'iscsi.extent.disk_choices': { params: void; response: Choices };
    'iscsi.extent.query': { params: QueryParams<IscsiExtent>; response: IscsiExtent[] };
    'iscsi.extent.update': {
        params: [id: number, update: IscsiExtentUpdate];
        response: IscsiExtentUpdate;
    };
    'iscsi.global.config': { params: void; response: IscsiGlobalConfig };
    'iscsi.global.sessions': {
        params: QueryParams<IscsiGlobalSession>;
        response: IscsiGlobalSession[];
    };
    'iscsi.global.update': { params: [IscsiGlobalConfigUpdate]; response: IscsiGlobalConfig };
    'iscsi.initiator.create': {
        params: [IscsiInitiatorGroupUpdate];
        response: IscsiInitiatorGroup;
    };
    'iscsi.initiator.delete': { params: [id: number]; response: boolean };
    'iscsi.initiator.query': {
        params: QueryParams<IscsiInitiatorGroup>;
        response: IscsiInitiatorGroup[];
    };
    'iscsi.initiator.update': {
        params: [id: number, initiator: IscsiInitiatorGroupUpdate];
        response: IscsiInitiatorGroup;
    };
    'iscsi.portal.create': { params: [IscsiPortalUpdate]; response: IscsiPortal };
    'iscsi.portal.delete': { params: [number]; response: boolean };
    'iscsi.portal.listen_ip_choices': { params: void; response: Choices };
    'iscsi.portal.query': { params: QueryParams<IscsiPortal>; response: IscsiPortal[] };
    'iscsi.portal.update': {
        params: [id: number, target: IscsiPortalUpdate];
        response: IscsiPortal;
    };
    'iscsi.target.create': { params: [IscsiTargetUpdate]; response: IscsiTarget };
    'iscsi.target.delete': { params: [id: number, force?: boolean]; response: boolean };
    'iscsi.target.query': { params: QueryParams<IscsiTarget>; response: IscsiTarget[] };
    'iscsi.target.update': {
        params: [id: number, target: IscsiTargetUpdate];
        response: IscsiTarget;
    };
    'iscsi.targetextent.create': { params: [IscsiTargetExtentUpdate]; response: IscsiTargetExtent };
    'iscsi.targetextent.delete': { params: [id: number, force?: boolean]; response: boolean };
    'iscsi.targetextent.query': {
        params: QueryParams<IscsiTargetExtent>;
        response: IscsiTargetExtent[];
    };
    'iscsi.targetextent.update': {
        params: [id: number, extent: IscsiTargetExtentUpdate];
        response: IscsiTargetExtent;
    };
    'iscsi.target.validate_name': { params: string[]; response: null | string };

    // Jbof
    'jbof.licensed': { params: void; response: number };
    'jbof.query': { params: [QueryParams<Jbof>]; response: Jbof[] };
    'jbof.create': { params: [JbofUpdate]; response: Jbof };
    'jbof.update': { params: [id: number, update: JbofUpdate]; response: Jbof };
    'jbof.delete': { params: [id: number]; response: boolean };

    // Kerberos
    'kerberos.config': { params: void; response: KerberosConfig };
    'kerberos.keytab.create': { params: [KerberosKeytabUpdate]; response: KerberosKeytab };
    'kerberos.keytab.delete': { params: [id: number]; response: boolean };
    'kerberos.keytab.kerberos_principal_choices': { params: void; response: string[] };
    'kerberos.keytab.query': { params: QueryParams<KerberosKeytab>; response: KerberosKeytab[] };
    'kerberos.keytab.update': {
        params: [id: number, update: KerberosKeytabUpdate];
        response: KerberosKeytab;
    };
    'kerberos.realm.create': { params: [KerberosRealmUpdate]; response: KerberosRealm };
    'kerberos.realm.delete': { params: [id: number]; response: boolean };
    'kerberos.realm.query': { params: QueryParams<KerberosRealm>; response: KerberosRealm[] };
    'kerberos.realm.update': {
        params: [id: number, update: KerberosRealmUpdate];
        response: KerberosRealm;
    };
    'kerberos.update': { params: [KerberosConfigUpdate]; response: KerberosConfig };

    // Keychain credential
    'keychaincredential.create': {
        params: [KeychainCredentialCreate];
        response: KeychainCredential;
    };
    'keychaincredential.delete': { params: [id: number]; response: void };
    'keychaincredential.generate_ssh_key_pair': { params: void; response: SshKeyPair };
    'keychaincredential.query': {
        params: QueryParams<KeychainCredential>;
        response: KeychainCredential[];
    };
    'keychaincredential.remote_ssh_host_key_scan': {
        params: [RemoteSshScanParams];
        response: string;
    };
    'keychaincredential.remote_ssh_semiautomatic_setup': {
        params: [SshSemiAutomaticSetup];
        response: KeychainSshCredentials;
    };
    'keychaincredential.setup_ssh_connection': {
        params: [SshConnectionSetup];
        response: KeychainSshCredentials;
    };
    'keychaincredential.update': {
        params: [id: number, credential: KeychainCredentialUpdate];
        response: KeychainCredential;
    };

    // KMIP
    'kmip.clear_sync_pending_keys': { params: void; response: void };
    'kmip.config': { params: void; response: KmipConfig };
    'kmip.kmip_sync_pending': { params: void; response: boolean };
    'kmip.sync_keys': { params: void; response: void };

    // Kubernetes
    'kubernetes.bindip_choices': { params: void; response: Choices };
    'kubernetes.config': { params: void; response: KubernetesConfig };
    'kubernetes.status': { params: void; response: KubernetesStatusData };

    // LDAP
    'ldap.config': { params: void; response: LdapConfig };
    'ldap.schema_choices': { params: void; response: string[] };
    'ldap.ssl_choices': { params: void; response: string[] };

    // Mail
    'mail.config': { params: void; response: MailConfig };
    'mail.local_administrator_email': { params: void; response: string | null };
    'mail.update': { params: [MailConfigUpdate]; response: MailConfig };

    // Network configuration
    'network.configuration.activity_choices': { params: void; response: MapOption[] };
    'network.configuration.config': { params: void; response: NetworkConfiguration };
    'network.configuration.update': {
        params: [NetworkConfigurationUpdate];
        response: NetworkConfiguration;
    };
    'network.general.summary': { params: void; response: NetworkSummary };

    // NFS
    'nfs.add_principal': { params: [AddNfsPrincipal]; response: boolean };
    'nfs.bindip_choices': { params: void; response: Choices };
    'nfs.config': { params: void; response: NfsConfig };
    'nfs.get_nfs3_clients': {
        params: [params?: QueryParams<Nfs3Session>];
        response: Nfs3Session[];
    };
    'nfs.get_nfs4_clients': {
        params: [params?: QueryParams<Nfs4Session>];
        response: Nfs4Session[];
    };
    'nfs.update': { params: [NfsConfigUpdate]; response: NfsConfig };

    // Pool
    'pool.attachments': { params: [id: number]; response: PoolAttachment[] };
    'pool.dataset.attachments': { params: [datasetId: string]; response: DatasetAttachment[] };
    'pool.dataset.checksum_choices': { params: void; response: Choices };
    'pool.dataset.compression_choices': { params: void; response: Choices };
    'pool.dataset.create': { params: [DatasetCreate]; response: Dataset };
    'pool.dataset.delete': {
        params: [path: string, params: { recursive: boolean; force?: boolean }];
        response: boolean;
    };
    'pool.dataset.details': { params: void; response: DatasetDetails[] };
    'pool.dataset.encryption_algorithm_choices': { params: void; response: Choices };
    'pool.dataset.export_keys_for_replication': { params: [id: number]; response: unknown };
    'pool.dataset.get_instance': { params: [path: string]; response: DatasetDetails };
    'pool.dataset.get_quota': { params: DatasetQuotaQueryParams; response: DatasetQuota[] };
    'pool.dataset.inherit_parent_encryption_properties': { params: [id: string]; response: void };
    'pool.dataset.processes': { params: [datasetId: string]; response: Process[] };
    'pool.dataset.promote': { params: [id: string]; response: void };
    'pool.dataset.query': {
        params: QueryParams<Dataset, ExtraDatasetQueryOptions>;
        response: Dataset[];
    };
    'pool.dataset.recommended_zvol_blocksize': {
        params: [name: string];
        response: DatasetRecordSize;
    };
    'pool.dataset.recordsize_choices': { params: void; response: string[] };
    'pool.dataset.set_quota': {
        params: [dataset: string, quotas: SetDatasetQuota[]];
        response: void;
    };
    'pool.dataset.unlock_services_restart_choices': { params: [id: string]; response: Choices };
    'pool.dataset.update': { params: [id: string, update: DatasetUpdate]; response: Dataset };
    'pool.detach': { params: [id: number, params: { label: string }]; response: boolean };
    'pool.filesystem_choices': { params: [DatasetType[]?]; response: string[] };
    'pool.get_disks': { params: [ids: string[]]; response: string[] };
    'pool.is_upgraded': { params: [poolId: number]; response: boolean };
    'pool.offline': { params: [id: number, params: { label: string }]; response: boolean };
    'pool.online': { params: [id: number, params: { label: string }]; response: boolean };
    'pool.processes': { params: [id: number]; response: Process[] };
    'pool.query': { params: QueryParams<Pool>; response: Pool[] };
    'pool.resilver.config': { params: void; response: ResilverConfig };
    'pool.resilver.update': { params: [ResilverConfigUpdate]; response: ResilverConfig };
    'pool.scrub.create': { params: [CreatePoolScrubTask]; response: PoolScrubTask };
    'pool.scrub.delete': { params: [id: number]; response: boolean };
    'pool.scrub.query': { params: QueryParams<PoolScrubTask>; response: PoolScrubTask[] };
    'pool.scrub.update': {
        params: [id: number, params: CreatePoolScrubTask];
        response: PoolScrubTask;
    };
    'pool.snapshottask.create': {
        params: [PeriodicSnapshotTaskCreate];
        response: PeriodicSnapshotTask;
    };
    'pool.snapshottask.delete': { params: [id: number]; response: boolean };
    'pool.snapshottask.query': {
        params: QueryParams<PeriodicSnapshotTask>;
        response: PeriodicSnapshotTask[];
    };
    'pool.snapshottask.update': {
        params: [id: number, update: PeriodicSnapshotTaskUpdate];
        response: PeriodicSnapshotTask;
    };
    'pool.upgrade': { params: [id: number]; response: boolean };
    'pool.validate_name': { params: string[]; response: boolean | { error: boolean } };

    // Privilege
    'privilege.create': { params: [PrivilegeUpdate]; response: Privilege };
    'privilege.delete': { params: [id: number]; response: boolean };
    'privilege.query': { params: QueryParams<Privilege>; response: Privilege[] };
    'privilege.roles': { params: QueryParams<PrivilegeRole>; response: PrivilegeRole[] };
    'privilege.update': { params: [id: number, update: PrivilegeUpdate]; response: Privilege };

    // Replication
    'replication.config.config': { params: void; response: ReplicationConfig };
    'replication.config.update': { params: [ReplicationConfigUpdate]; response: ReplicationConfig };
    'replication.count_eligible_manual_snapshots': {
        params: [CountManualSnapshotsParams];
        response: EligibleManualSnapshotsCount;
    };
    'replication.create': { params: [ReplicationCreate]; response: ReplicationTask };
    'replication.delete': { params: [id: number]; response: boolean };
    'replication.list_datasets': {
        params: [transport: TransportMode, credentials?: number];
        response: string[];
    };
    'replication.list_naming_schemas': { params: void; response: string[] };
    'replication.query': { params: QueryParams<ReplicationTask>; response: ReplicationTask[] };
    'replication.restore': {
        params: [id: number, params: { name: string; target_dataset: string }];
        response: void;
    };
    'replication.target_unmatched_snapshots': {
        params: TargetUnmatchedSnapshotsParams;
        response: Record<string, string[]>;
    };
    'replication.update': {
        params: [id: number, update: Partial<ReplicationCreate>];
        response: ReplicationTask;
    };

    // Reporting
    'reporting.clear': { params: void; response: void };
    'reporting.exporters.create': {
        params: [CreateReportingExporter];
        response: ReportingExporter;
    };
    'reporting.exporters.delete': { params: [id: number]; response: boolean };
    'reporting.exporters.exporter_schemas': { params: void; response: ReportingExporterSchema[] };
    'reporting.exporters.get_instance': { params: [id: number]; response: ReportingExporter };
    'reporting.exporters.query': {
        params: QueryParams<ReportingExporter>;
        response: ReportingExporter[];
    };
    'reporting.exporters.update': {
        params: [number, UpdateReportingExporter];
        response: ReportingExporter;
    };
    'reporting.netdata_get_data': { params: ReportingQueryParams; response: ReportingData[] };
    'reporting.netdata_graphs': { params: QueryParams<ReportingGraph>; response: ReportingGraph[] };
    'reporting.netdataweb_generate_password': { params: []; response: string };

    // Rsynctask
    'rsynctask.create': { params: [RsyncTaskUpdate]; response: RsyncTask };
    'rsynctask.delete': { params: [id: number]; response: boolean };
    'rsynctask.query': { params: QueryParams<RsyncTask>; response: RsyncTask[] };
    'rsynctask.update': { params: [id: number, params: RsyncTaskUpdate]; response: RsyncTask };

    // Service
    'service.query': { params: QueryParams<Service>; response: Service[] };
    'service.restart': { params: [ServiceName]; response: boolean };
    'service.start': { params: [ServiceName, { silent: boolean }]; response: boolean };
    'service.started': { params: [ServiceName]; response: boolean };
    'service.stop': {
        params: [ServiceName, { silent: boolean }];
        response: boolean; // False indicates that service has been stopped.
    };
    'service.update': { params: [number | ServiceName, Partial<Service>]; response: number };

    // Sharing
    'sharing.nfs.create': { params: [NfsShareUpdate]; response: NfsShare };
    'sharing.nfs.delete': { params: [id: number]; response: boolean };
    'sharing.nfs.query': { params: QueryParams<NfsShare>; response: NfsShare[] };
    'sharing.nfs.update': { params: [id: number, update: NfsShareUpdate]; response: NfsShare };
    'sharing.smb.create': { params: [SmbShareUpdate]; response: SmbShare };
    'sharing.smb.delete': { params: [id: number]; response: boolean };
    'sharing.smb.getacl': { params: [{ share_name: string }]; response: SmbSharesec };
    'sharing.smb.presets': { params: void; response: SmbPresets };
    'sharing.smb.query': { params: QueryParams<SmbShare>; response: SmbShare[] };
    'sharing.smb.setacl': {
        params: [{ share_name: string; share_acl: SmbSharesecAce[] }];
        response: SmbSharesec;
    };
    'sharing.smb.share_precheck': {
        params: [{ name: string }];
        response: null | { reason: string };
    };
    'sharing.smb.update': { params: [id: number, update: SmbShareUpdate]; response: SmbShare };

    // SMART
    'smart.config': { params: void; response: SmartConfig };
    'smart.test.create': { params: [SmartTestTaskUpdate]; response: SmartTestTask };
    'smart.test.delete': { params: [id: number]; response: boolean };
    'smart.test.disk_choices': { params: void; response: Choices };
    'smart.test.manual_test': { params: [SmartManualTestParams[]]; response: ManualSmartTest[] };
    'smart.test.query': { params: QueryParams<SmartTestTask>; response: SmartTestTask[] };
    'smart.test.query_for_disk': { params: [disk: string]; response: SmartTestTask[] };
    'smart.test.results': { params: QueryParams<SmartTestResults>; response: SmartTestResults[] };
    'smart.test.update': {
        params: [id: number, update: SmartTestTaskUpdate];
        response: SmartTestTask;
    };
    'smart.update': { params: [SmartConfigUpdate]; response: SmartConfig };
    'disk.smart_attributes': {
        params: [disk: string];
        response: DiskSmartAttribute[];
    };

    // SMB
    'smb.bindip_choices': { params: void; response: Choices };
    'smb.config': { params: void; response: SmbConfig };
    'smb.status': {
        params: [level: SmbInfoLevel, params?: QueryParams<SmbStatus>];
        response: SmbStatus[];
    };
    'smb.unixcharset_choices': { params: void; response: Choices };
    'smb.update': { params: [SmbConfigUpdate]; response: SmbConfig };

    // SNMP
    'snmp.config': { params: void; response: SnmpConfig };
    'snmp.update': { params: [SnmpConfigUpdate]; response: SnmpConfig };

    // SSH
    'ssh.bindiface_choices': { params: void; response: Choices };
    'ssh.config': { params: void; response: SshConfig };
    'ssh.update': { params: [SshConfigUpdate]; response: SshConfig };

    // Static route
    'staticroute.create': { params: [UpdateStaticRoute]; response: StaticRoute };
    'staticroute.delete': { params: [id: number]; response: boolean };
    'staticroute.query': { params: QueryParams<StaticRoute>; response: StaticRoute[] };
    'staticroute.update': {
        params: [id: number, update: UpdateStaticRoute];
        response: StaticRoute;
    };

    // Support
    'support.config': { params: void; response: SupportConfig };
    'support.is_available': { params: void; response: boolean };
    'support.is_available_and_enabled': { params: void; response: boolean };
    'support.update': { params: [SupportConfigUpdate]; response: SupportConfig };
    'support.similar_issues': { params: SimilarIssuesParams; response: SimilarIssue[] };
    'support.attach_ticket_max_size': { params: void; response: number };

    // System
    'system.advanced.config': { params: void; response: AdvancedConfig };
    'system.advanced.sed_global_password': { params: void; response: string };
    'system.advanced.sed_global_password_is_set': { params: void; response: boolean };
    'system.advanced.serial_port_choices': { params: void; response: Choices };
    'system.advanced.syslog_certificate_authority_choices': { params: void; response: Choices };
    'system.advanced.syslog_certificate_choices': { params: void; response: Choices };
    'system.advanced.update': { params: [Partial<AdvancedConfigUpdate>]; response: AdvancedConfig };
    'system.advanced.update_gpu_pci_ids': {
        params: [isolated_gpu_pci_ids: string[]];
        response: void;
    };
    'system.build_time': { params: void; response: ApiTimestamp };
    'system.environment': { params: void; response: SystemEnvironment };
    'system.general.config': { params: void; response: SystemGeneralConfig };
    'system.general.kbdmap_choices': { params: void; response: Choices };
    'system.general.language_choices': { params: void; response: Choices };
    'system.general.timezone_choices': { params: void; response: Choices };
    'system.general.ui_address_choices': { params: void; response: Choices };
    'system.general.ui_certificate_choices': { params: void; response: Record<number, string> };
    'system.general.ui_httpsprotocols_choices': { params: void; response: Choices };
    'system.general.ui_restart': { params: void; response: void };
    'system.general.ui_v6address_choices': { params: void; response: Choices };
    'system.general.update': { params: [SystemGeneralConfigUpdate]; response: SystemGeneralConfig };
    'system.host_id': { params: void; response: string };
    'system.info': { params: void; response: SystemInfo };
    'system.is_stable': { params: void; response: boolean };
    'system.license': { params: void; response: null | object };
    'system.license_update': { params: [license: string]; response: void };
    'system.ntpserver.create': { params: [CreateNtpServer]; response: NtpServer };
    'system.ntpserver.delete': { params: [id: number]; response: boolean };
    'system.ntpserver.query': { params: QueryParams<NtpServer>; response: NtpServer[] };
    'system.ntpserver.update': {
        params: [id: number, params: CreateNtpServer];
        response: NtpServer;
    };
    'system.product_type': { params: void; response: ProductType };
    'system.security.config': { params: void; response: SystemSecurityConfig };
    'system.security.info.fips_available': { params: void; response: boolean };
    'system.set_time': { params: [number]; response: void };

    // Systemdataset
    'systemdataset.config': { params: void; response: SystemDatasetConfig };
    'systemdataset.pool_choices': { params: void; response: Choices };

    // Truecommand
    'truecommand.config': { params: void; response: TrueCommandConfig };
    'truecommand.info': { params: void; response: TrueCommandConnectionState };
    'truecommand.update': { params: [UpdateTrueCommand]; response: TrueCommandUpdateResponse };

    // TrueNAS
    'truenas.accept_eula': { params: void; response: void };
    'truenas.get_eula': { params: void; response: string };
    'truenas.is_eula_accepted': { params: void; response: boolean };
    'truenas.is_production': { params: void; response: boolean };
    'truenas.is_ix_hardware': { params: void; response: boolean };
    'truenas.managed_by_truecommand': { params: void; response: boolean };

    // Tunable
    'tunable.query': { params: QueryParams<Tunable>; response: Tunable[] };
    'tunable.tunable_type_choices': { params: void; response: Choices };

    // Update
    'update.check_available': { params: void; response: SystemUpdate };
    'update.get_auto_download': { params: void; response: boolean };
    'update.get_pending': { params: void; response: SystemUpdateChange[] };
    'update.get_trains': { params: void; response: SystemUpdateTrains };
    'update.set_auto_download': { params: [boolean]; response: void };
    'update.set_train': { params: [train: string]; response: void };

    // UPS
    'ups.config': { params: void; response: UpsConfig };
    'ups.driver_choices': { params: void; response: Choices };
    'ups.port_choices': { params: void; response: string[] };
    'ups.update': { params: [UpsConfigUpdate]; response: UpsConfig };

    // User
    'user.create': { params: [UserUpdate]; response: number };
    'user.delete': { params: DeleteUserParams; response: number };
    'user.get_next_uid': { params: void; response: number };
    'user.get_user_obj': {
        params: [{ username?: string; uid?: number }];
        response: DsUncachedUser;
    };
    'user.has_local_administrator_set_up': { params: void; response: boolean };
    'user.query': { params: QueryParams<User>; response: User[] };
    'user.renew_2fa_secret': {
        params: [string, { interval: number; otp_digits: number }];
        response: User;
    };
    'user.set_password': { params: [SetPasswordParams]; response: void };
    'user.setup_local_administrator': {
        params: [userName: string, password: string, ec2?: { instance_id: string }];
        response: void;
    };
    'user.shell_choices': { params: [ids: number[]]; response: Choices };
    'user.twofactor_config': { params: void; response: UserTwoFactorConfig };
    'user.update': { params: [id: number, update: UserUpdate]; response: number };

    // VM
    'vm.bootloader_options': { params: void; response: Choices };
    'vm.clone': { params: VmCloneParams; response: boolean };
    'vm.cpu_model_choices': { params: void; response: Choices };
    'vm.create': { params: [VirtualMachineUpdate]; response: VirtualMachine };
    'vm.delete': { params: VmDeleteParams; response: boolean };
    'vm.device.bind_choices': { params: void; response: Choices };
    'vm.device.create': { params: [VmDeviceUpdate]; response: VmDevice };
    'vm.device.delete': { params: [number, VmDeviceDelete?]; response: boolean };
    'vm.device.disk_choices': { params: void; response: Choices };
    'vm.device.get_pci_ids_for_gpu_isolation': { params: [string]; response: string[] };
    'vm.device.nic_attach_choices': { params: void; response: Choices };
    'vm.device.passthrough_device_choices': {
        params: void;
        response: Record<string, VmPassthroughDeviceChoice>;
    };
    'vm.device.query': { params: QueryParams<VmDevice>; response: VmDevice[] };
    'vm.device.update': { params: [id: number, update: VmDeviceUpdate]; response: VmDevice };
    'vm.device.usb_controller_choices': { params: void; response: Choices };
    'vm.device.usb_passthrough_choices': {
        params: void;
        response: Record<string, VmUsbPassthroughDeviceChoice>;
    };
    'vm.get_available_memory': { params: void; response: number };
    'vm.get_display_devices': { params: [id: number]; response: VmDisplayDevice[] };
    'vm.get_display_web_uri': { params: VmDisplayWebUriParams; response: VmDisplayWebUri };
    'vm.maximum_supported_vcpus': { params: void; response: number };
    'vm.port_wizard': { params: void; response: VmPortWizardResult };
    'vm.poweroff': { params: [id: number]; response: void };
    'vm.query': { params: QueryParams<VirtualMachine>; response: VirtualMachine[] };
    'vm.random_mac': { params: void; response: string };
    'vm.resolution_choices': { params: void; response: Choices };
    'vm.start': { params: [id: number, params?: { overcommit?: boolean }]; response: void };
    'vm.update': { params: [id: number, update: VirtualMachineUpdate]; response: VirtualMachine };
    'vm.virtualization_details': { params: void; response: VirtualizationDetails };

    // Vmware
    'vmware.create': { params: [VmwareSnapshotUpdate]; response: VmwareSnapshot };
    'vmware.dataset_has_vms': { params: DatasetHasVmsQueryParams; response: boolean };
    'vmware.delete': { params: [id: number]; response: boolean };
    'vmware.match_datastores_with_datasets': {
        params: [MatchDatastoresWithDatasetsParams];
        response: MatchDatastoresWithDatasets;
    };
    'vmware.query': { params: QueryParams<VmwareSnapshot>; response: VmwareSnapshot[] };
    'vmware.update': {
        params: [id: number, update: VmwareSnapshotUpdate];
        response: VmwareSnapshot;
    };

    // WebUI main
    'webui.main.dashboard.sys_info': { params: void; response: SystemInfo };

    // WebUI Crypto
    'webui.crypto.certificate_profiles': { params: void; response: CertificateProfiles };
    'webui.crypto.get_certificate_domain_names': { params: [number]; response: string[] };
    'webui.crypto.certificateauthority_profiles': { params: void; response: CertificateProfiles };

    // ZFS
    'zfs.snapshot.clone': { params: [CloneZfsSnapshot]; response: boolean };
    'zfs.snapshot.create': { params: [CreateZfsSnapshot]; response: ZfsSnapshot };
    'zfs.snapshot.delete': {
        params: [id: string, params?: { defer?: boolean; recursive?: boolean }];
        response: boolean;
    };
    'zfs.snapshot.hold': { params: [string]; response: void };
    'zfs.snapshot.query': { params: QueryParams<ZfsSnapshot>; response: ZfsSnapshot[] };
    'zfs.snapshot.release': { params: [string]; response: void };
    'zfs.snapshot.rollback': { params: ZfsRollbackParams; response: void };

    // Eshtek added because not yet implemented in TrueNAS as of 6/2/2024 should replace with official when it becomes available
    'system.health': { params: { delay?: number }; response: SystemHealth };
    'disk.get_instance': {
        params: [id: string];
        response: Disk;
    };
}

/**
 * Prefer typing like this:
 * ```
 * queryCall: 'user.query' as const
 * ```
 * instead of using ApiMethod.
 */
export type ApiCallMethod = keyof ApiCallDirectory;

export type ApiCallParams<T extends ApiCallMethod> = ApiCallDirectory[T]['params'];
export type ApiCallResponse<T extends ApiCallMethod> = ApiCallDirectory[T]['response'];
export type ApiCallResponseType<T extends ApiCallMethod> = ApiCallDirectory[T]['response'] extends (infer U)[] ? U : never;

export type QueryMethods = {
    [T in ApiCallMethod]: T extends `${string}.query` ? T : never;
}[ApiCallMethod];
