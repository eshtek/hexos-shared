const T = (str: string) => str;

export enum InitShutdownScriptType {
    Command = 'COMMAND',
    Script = 'SCRIPT',
}

export const initShutdownScriptTypeLabels = new Map<InitShutdownScriptType, string>([
    [InitShutdownScriptType.Command, T('Command')],
    [InitShutdownScriptType.Script, T('Script')],
]);
