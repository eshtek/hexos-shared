const T = (str: string) => str;

export enum InitShutdownScriptWhen {
    PreInit = 'PREINIT',
    PostInit = 'POSTINIT',
    Shutdown = 'SHUTDOWN',
}

export const initShutdownScriptWhenLabels = new Map<InitShutdownScriptWhen, string>([
    [InitShutdownScriptWhen.PreInit, T('Pre Init')],
    [InitShutdownScriptWhen.PostInit, T('Post Init')],
    [InitShutdownScriptWhen.Shutdown, T('Shutdown')],
]);
