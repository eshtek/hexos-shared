const T = (str: string) => str;

export enum TransferMode {
    Sync = 'SYNC',
    Copy = 'COPY',
    Move = 'MOVE',
}

export const transferModeNames = new Map<TransferMode, string>([
    [TransferMode.Sync, T('SYNC')],
    [TransferMode.Copy, T('COPY')],
    [TransferMode.Move, T('MOVE')],
]);
