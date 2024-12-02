import type { SmartPowerMode } from '../truenas/webui/enums/smart-power.mode';
import type { SmartTestResultStatus } from '../truenas/webui/enums/smart-test-result-status.enum';
import type { SmartTestType } from '../truenas/webui/enums/smart-test-type.enum';
import type { ApiTimestamp } from '../truenas/webui/interfaces/api-date.interface';
import type { Schedule } from '../truenas/webui/interfaces/schedule.interface';

export interface SmartTestTask {
    all_disks: boolean;
    desc: string;
    disks: string[];
    id: number;
    schedule: Schedule;
    type: SmartTestType;
}

export type SmartTestTaskUpdate = Omit<SmartTestTask, 'id'>;

export interface SmartTestTaskUi extends SmartTestTask {
    cron_schedule: string;
    frequency: string;
    next_run: string;
    disksLabel?: string[];
}

export interface SmartConfig {
    critical: number;
    difference: number;
    id: number;
    informational: number;
    interval: number;
    powermode: SmartPowerMode;
}

export type SmartConfigUpdate = Omit<SmartConfig, 'id'>;

export interface SmartManualTestParams {
    identifier: string;
    type: SmartTestType;
}

export interface SmartTestResults {
    disk: string;
    tests: SmartTestResult[];
}

export interface SmartTestResult {
    description: string;
    lba_of_first_error: number;
    lifetime: number;
    num: number;
    remaining: number;
    status: SmartTestResultStatus;
    status_verbose: string;
    segment_number: number;
}

export interface ManualSmartTest {
    disk: string;
    expected_result_time: ApiTimestamp;
    identifier: string;
    job: number;
    error?: string;
}

export interface SmartTestResultsRow extends SmartTestResult {
    disk: string;
}
