const T = (str: string) => str;

export enum RetentionPolicy {
    Source = 'SOURCE',
    Custom = 'CUSTOM',
    None = 'NONE',
}

export const retentionPolicyNames = new Map<RetentionPolicy, string>([
    [RetentionPolicy.Source, T('Same as Source')],
    [RetentionPolicy.Custom, T('Custom')],
    [RetentionPolicy.None, T('None')],
]);
