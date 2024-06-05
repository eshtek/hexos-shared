import type { UpgradeSummary } from '@shared/truenas/webui/interfaces/application.interface';
import type { ChartRelease } from '@shared/truenas/webui/interfaces/chart-release.interface';

export interface ChartUpgradeDialogConfig {
    appInfo: ChartRelease;
    upgradeSummary: UpgradeSummary;
}
