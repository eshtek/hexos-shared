const T = (str: string) => str;

export enum DeduplicationSetting {
    On = 'ON',
    Off = 'OFF',
    Verify = 'VERIFY',
}

export const deduplicationSettingLabels = new Map<DeduplicationSetting, string>([
    [DeduplicationSetting.On, T('On')],
    [DeduplicationSetting.Off, T('Off')],
    [DeduplicationSetting.Verify, T('Verify')],
]);
