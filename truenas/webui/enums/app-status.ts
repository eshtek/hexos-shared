export enum AppStatus {
    Started = 'STARTED',
    Starting = 'STARTING',
    Deploying = 'DEPLOYING',
    Stopped = 'STOPPED',
    Stopping = 'STOPPING',
}

export const translateAppStatus = (status: AppStatus) => {
    const { t } = useI18n();

    switch (status) {
        case AppStatus.Started:
            return t('Running');
        case AppStatus.Starting:
            return t('Starting');
        case AppStatus.Deploying:
            return t('Deploying');
        case AppStatus.Stopped:
            return t('Stopped');
        case AppStatus.Stopping:
            return t('Stopping');
        default:
            return status;
    }
};
