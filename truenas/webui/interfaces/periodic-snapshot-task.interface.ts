import type { LifetimeUnit } from '@shared/truenas/webui/enums/lifetime-unit.enum';
import type { DataProtectionTaskState } from '@shared/truenas/webui/interfaces/data-protection-task-state.interface';
import type { Schedule } from '@shared/truenas/webui/interfaces/schedule.interface';

export interface PeriodicSnapshotTask {
    schedule: Schedule;
    allow_empty?: boolean;
    dataset: string;
    enabled?: boolean;
    exclude?: string[];
    id: number;
    lifetime_unit: LifetimeUnit;
    lifetime_value: number;
    naming_schema: string;
    recursive: boolean;
    state: DataProtectionTaskState;
    vmware_sync: boolean;
}

export interface PeriodicSnapshotTaskCreate {
    dataset: string;
    recursive: boolean;
    exclude?: string[];
    lifetime_value: number;
    lifetime_unit: LifetimeUnit;
    naming_schema: string;
    schedule: Schedule;
    allow_empty?: boolean;
    enabled?: boolean;
}

export interface PeriodicSnapshotTaskUpdate extends PeriodicSnapshotTaskCreate {
    fixate_removal_date?: boolean;
}

export interface PeriodicSnapshotTaskUi extends PeriodicSnapshotTask {
    keepfor: string;
    cron_schedule: string;
    when: string;
    frequency: string;
    next_run: string;
    last_run: string;
    legacy: boolean;
}
