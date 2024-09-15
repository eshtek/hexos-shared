import { AppState } from './app-state.enum';

export enum AppStatus {
    Started = 'STARTED',
    Starting = 'STARTING',
    Deploying = 'DEPLOYING',
    Stopped = 'STOPPED',
    Stopping = 'STOPPING',
}