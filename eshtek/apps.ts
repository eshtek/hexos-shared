export enum AppJobAction {
    INSTALL = 'install',
    RESTART = 'restart',
    UNINSTALL = 'uninstall',
    DELETE = 'delete',
    PROVISIONING = 'provisioning',
}

export interface AppListing {
    name: string;
    description: string;
    appId: string;
}
