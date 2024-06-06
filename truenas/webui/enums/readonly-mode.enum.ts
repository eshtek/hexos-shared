const T = (str: string) => str;

export enum ReadOnlyMode {
    Set = 'SET',
    Require = 'REQUIRE',
    Ignore = 'IGNORE',
}

export const readonlyModeNames = new Map<ReadOnlyMode, string>([
    [ReadOnlyMode.Set, T('SET')],
    [ReadOnlyMode.Require, T('REQUIRE')],
    [ReadOnlyMode.Ignore, T('IGNORE')],
]);
