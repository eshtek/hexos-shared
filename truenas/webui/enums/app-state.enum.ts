const T = (str: string) => str;


export enum AppState {
  Running = 'RUNNING',
  Deploying = 'DEPLOYING',
  Stopped = 'STOPPED',
  Stopping = 'STOPPING',
  Crashed = 'CRASHED',
}

export const appStateIcons = new Map<AppState, string>([
  [AppState.Running, 'mdi-check-circle'],
  [AppState.Deploying, 'mdi-progress-wrench'],
  [AppState.Stopped, 'mdi-stop-circle'],
  [AppState.Stopping, 'mdi-check-circle'],
  [AppState.Crashed, 'mdi-alert-circle'],
]);

export const appStateLabels = new Map<AppState, string>([
  [AppState.Running, T('Running')],
  [AppState.Deploying, T('Deploying')],
  [AppState.Stopped, T('Stopped')],
  [AppState.Stopping, T('Stopping')],
  [AppState.Crashed, T('Crashed')],
]);