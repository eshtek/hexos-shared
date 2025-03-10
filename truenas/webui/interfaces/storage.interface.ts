import type { DiskBus } from '../enums/disk-bus.enum';
import type { DiskPowerLevel } from '../enums/disk-power-level.enum';
import type { DiskStandby } from '../enums/disk-standby.enum';
import type { DiskType } from '../enums/disk-type.enum';
import type { DiskWipeMethod } from '../enums/disk-wipe-method.enum';
import { TopologyItemType } from '../enums/v-dev-type.enum';
import type { TopologyItemStatus } from '../enums/vdev-status.enum';
import type { Alert } from '../interfaces/alert.interface';
import type { SmartTestResult } from '../interfaces/smart-test.interface';
import type { ZfsProperty } from './zfs-property.interface';

// As returned by pool.query under topology[<vdevtype>]
export type TopologyItem = VDev | TopologyDisk;

export interface VDev {
    type: Exclude<TopologyItemType, TopologyItemType.Disk>;
    children: TopologyDisk[];
    guid: string;
    name: string;
    path: string;
    stats: TopologyItemStats;
    status: TopologyItemStatus;
    unavail_disk: unknown;
    disk?: string;
}

export interface TopologyDisk {
    type: TopologyItemType.Disk;
    children: TopologyDisk[];
    device: string;
    disk: string;
    guid: string;
    name: string;
    path: string;
    stats: TopologyItemStats;
    status: TopologyItemStatus;
    unavail_disk: unknown;
}

export function isTopologyDisk(topologyItem: TopologyItem): topologyItem is TopologyDisk {
    return topologyItem.type === TopologyItemType.Disk;
}

export function isVdev(topologyItem: TopologyItem): topologyItem is VDev {
    return topologyItem.type !== TopologyItemType.Disk;
}

export interface TopologyItemStats {
    timestamp: number;
    read_errors: number;
    write_errors: number;
    checksum_errors: number;
    ops: number[];
    bytes: number[];
    size: number;
    allocated: number;
    fragmentation: number;
    self_healed: number;
    configured_ashift: number;
    logical_ashift: number;
    physical_ashift: number;
    draid_data_disks?: number;
    draid_spare_disks?: number;
    draid_parity?: number;
}

// Is currently part of disk.query but is soon to be deprecated
// Anticipate enclosure number to be replaced by enclosure id (string)
export interface EnclosureAndSlot {
    number: number;
    slot: number;
}

export interface EnclosureIdAndSlot {
    id?: string;
    number: number;
    slot: number;
}

export interface Disk {
    advpowermgmt: DiskPowerLevel;
    bus: DiskBus;
    critical: number;
    description: string;
    devname: string;
    difference: number;
    duplicate_serial: string[];
    enclosure: EnclosureIdAndSlot; // TODO: Verify if number or id is included?
    expiretime: string;
    hddstandby: DiskStandby;
    identifier: string;
    informational: number;
    lunid?: string;
    model: string;
    multipath_member: string;
    multipath_name: string;
    name: string;
    number: number;
    passwd?: string;
    pool: string;
    rotationrate: number;
    serial: string;
    size: number;
    smartoptions: string;
    subsystem: string;
    supports_smart?: boolean;
    togglesmart: boolean;
    transfermode: string;
    type: DiskType;
    zfs_guid: string;
    tests?: SmartTestResult[];
}

export interface StorageDashboardDisk extends Disk {
    alerts: Alert[];
    smartTestsRunning: number;
    smartTestsFailed: number;
    tempAggregates: TemperatureAgg;
}

/**
 * Additional disk query options
 */
export interface ExtraDiskQueryOptions {
    extra?: {
        /**
         * Will also include expired disks.
         */
        include_expired?: boolean;

        /**
         * Will not hide KMIP password for the disks.
         */
        passwords?: boolean;

        /**
         * Will join pool name for each disk.
         */
        pools?: boolean;
    };
}

export interface DiskUpdate {
    togglesmart?: boolean;
    advpowermgmt?: DiskPowerLevel;
    description?: string;
    hddstandby?: DiskStandby;
    passwd?: string;
    smartoptions?: string;
    critical?: number;
    difference?: number;
    informational?: number;
    enclosure?: EnclosureAndSlot;
    number?: number;
    pool?: string;
}

export interface UnusedDisk extends Disk {
    partitions: {
        path: string;
    }[];
    exported_zpool: string;
}

/**
 * As returned by snapshot.query
 */
export interface Snapshot {
    name: string;
    snapshot: string;
    dataset: string;
    created?: string;
    properties?: ZfsProperties;
    referenced?: string;
    used?: string;
}

export interface ZfsProperties {
    acltype: ZfsProperty<string>;
    casesensitivity: ZfsProperty<string>;
    clones: ZfsProperty<string>;
    compressratio: ZfsProperty<string>;
    context: ZfsProperty<string>;
    createtxg: ZfsProperty<string>;
    creation: ZfsProperty<string>;
    defcontext: ZfsProperty<string>;
    defer_destroy: ZfsProperty<string>;
    devices: ZfsProperty<string>;
    encryption: ZfsProperty<string>;
    encryptionroot: ZfsProperty<string>;
    exec: ZfsProperty<string>;
    fscontext: ZfsProperty<string>;
    guid: ZfsProperty<string>;
    inconsistent: ZfsProperty<string>;
    ivsetguid: ZfsProperty<string>;
    keyguid: ZfsProperty<string>;
    keystatus: ZfsProperty<string>;
    logicalreferenced: ZfsProperty<string>;
    mlslabel: ZfsProperty<string>;
    name: ZfsProperty<string>;
    nbmand: ZfsProperty<string>;
    normalization: ZfsProperty<string>;
    numclones: ZfsProperty<string>;
    objsetid: ZfsProperty<string>;
    primarycache: ZfsProperty<string>;
    redact_snaps: ZfsProperty<string>;
    redacted: ZfsProperty<string>;
    refcompressratio: ZfsProperty<string>;
    referenced: ZfsProperty<string>;
    remaptxg: ZfsProperty<string>;
    rootcontext: ZfsProperty<string>;
    secondarycache: ZfsProperty<string>;
    setuid: ZfsProperty<string>;
    type: ZfsProperty<string>;
    unique: ZfsProperty<string>;
    used: ZfsProperty<string>;
    useraccounting: ZfsProperty<string>;
    userrefs: ZfsProperty<string>;
    utf8only: ZfsProperty<string>;
    version: ZfsProperty<string>;
    volsize: ZfsProperty<string>;
    written: ZfsProperty<string>;
    xattr: ZfsProperty<string>;
}

export type DiskWipeParams = [disk: string, method: DiskWipeMethod];

export type DiskTemperatures = Record<string, number | null>;

export type DiskTemperatureAgg = Record<string, TemperatureAgg>;

export interface TemperatureAgg {
    min: number;
    max: number;
    avg: number;
}
