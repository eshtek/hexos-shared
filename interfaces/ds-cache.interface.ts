import { AccountAttribute } from '@shared/enums/account-attribute.enum';
import { Role } from '@shared/enums/role.enum';
import { Preferences } from '@shared/interfaces/preferences.interface';
import { UserTwoFactorConfig } from '@shared/interfaces/two-factor-config.interface';
import { DashConfigItem } from '@shared/pages/dashboard-old/components/widget-controller/widget-controller.component';

export interface DsUncachedUser {
  pw_dir: string;
  pw_gecos: string;
  pw_gid: number;
  pw_name: string;
  pw_shell: string;
  pw_uid: number;
  attributes: {
    preferences: Preferences;
    dashState: DashConfigItem[];
    appsAgreement: boolean;
  };
}

export interface LoggedInUser extends DsUncachedUser {
  privilege: AuthMePrivilege;
  account_attributes: AccountAttribute[];
  two_factor_config: UserTwoFactorConfig;
}

export interface AuthMePrivilege {
  roles: {
    $set: Role[];
  };
  web_shell: boolean;
  webui_access: boolean;
}

export interface DsUncachedGroup {
  gr_gid: number;
  gr_mem: unknown[];
  gr_name: string;
}
