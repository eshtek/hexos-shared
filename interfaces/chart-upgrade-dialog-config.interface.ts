import { UpgradeSummary } from '@shared/interfaces/application.interface';
import { ChartRelease } from '@shared/interfaces/chart-release.interface';

export interface ChartUpgradeDialogConfig {
  appInfo: ChartRelease;
  upgradeSummary: UpgradeSummary;
}
