import type { UpgradeSummary } from '../truenas/webui/interfaces/application.interface';
import type { ChartRelease } from '../truenas/webui/interfaces/chart-release.interface';

export interface ChartUpgradeDialogConfig {
    appInfo: ChartRelease;
    upgradeSummary: UpgradeSummary;
}
