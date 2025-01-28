/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ChartRelease } from '../interfaces/chart-release.interface';

export interface ChartUpgradeDialogConfig {
    appInfo: ChartRelease;
    upgradeSummary: any;
}
