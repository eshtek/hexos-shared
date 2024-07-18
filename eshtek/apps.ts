import type { AppStatus } from '../truenas/webui/enums/app-status';

export enum AppJobAction {
    NONE = 'none',
    INSTALL = 'install',
    RESTART = 'restart',
    UNINSTALL = 'uninstall',
    DELETE = 'delete',
    PROVISIONING = 'provisioning',
}

export interface AppBasics {
    id: string;
    name: string;
    description: string;
    version: string;
    icon: string;
}

export interface AppListing extends AppBasics {
    suggested?: boolean;
}

export interface AppInfo extends AppBasics {
    status: AppStatus;
    url_webui: string;
}
export interface AppInfoDetailed extends AppInfo {
    data: number[][];
}
