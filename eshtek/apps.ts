import type { AvailableApp } from '../truenas/webui/interfaces/available-app.interface';
import type { AppState } from '../truenas/webui/enums/app-state.enum';
import type { LocationPreferenceId } from './preferences';
import { FileAccess } from './server';
import { ChartFormValue } from '../truenas/webui/interfaces/chart-release.interface';

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
    train: string;
}
export enum AppSpec {
    STORAGE_100MB = '100MB',
    STORAGE_200MB = '200MB',
    STORAGE_500MB = '500MB',
    STORAGE_1GB = '1GB',
    STORAGE_2GB = '2GB',
    CPU_1CORE = '1CORE',
    CPU_2CORE = '2CORE',
    CPU_4CORE = '4CORE',
    CPU_8CORE = '8CORE',
    HARDWARE_GPU = 'GPU',
}

export enum AppPermission {
    READ_WRITE_LOCATIONS = 'READ_WRITE_LOCATIONS',
}

export interface AppRequirements {
    permissions: AppPermission[];
    specifications: AppSpec[];
    locations: LocationPreferenceId[];
    ports: number[];
}
export interface AppRequirementsCheck {
    permissions: {
        met: AppPermission[];
        unmet: AppPermission[];
    };
    specifications: {
        met: AppSpec[];
        unmet: AppSpec[];
    };
    locations: {
        met: LocationPreferenceId[];
        unmet: LocationPreferenceId[];
    };
}

export interface AppListing extends AvailableApp {
    hexos: boolean;
    installScript?: string;
    requirements?: AppRequirements;
}

export interface AppInfo extends AppBasics {
    status: AppState;
    url_webui: string;
}
export interface AppInfoDetailed extends AppInfo {
    data: number[][];
}

export enum AppsError {
    APP_ENGINE_NOT_RUNNING = 'APP_ENGINE_NOT_RUNNING',
}

export enum AppsWarning {
    NO_GPU_AVAILABLE = 'NO_GPU_AVAILABLE',
    INSUFFICIENT_MEMORY = 'INSUFFICIENT_MEMORY',
}

export enum AppsActions {
    RESTART_APP_ENGINE = 'RESTART_APP_ENGINE',
    INSTALL_NVIDIA_DRIVERS = 'INSTALL_NVIDIA_DRIVERS',
}
export interface AppsHealth {
    healthy: boolean;
    errors: AppsError[];
    warnings: AppsWarning[];
    actions_available: AppsActions[];
}
interface AppsInstallScriptV1 {
    version: 1;
    ensure_directories_exists?: Array<string | { path: string; network_share?: boolean; posix?: boolean }>;
    ensure_permissions_exists?: Array<{
        path: string;
        username: string;
        access: FileAccess;
        posix?: { groupname: string };
    }>;
    app_values: Record<string, ChartFormValue>;
}

export type AppsInstallScript = AppsInstallScriptV1;
