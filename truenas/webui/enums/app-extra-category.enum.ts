const T = (str: string) => str;

export enum AppExtraCategory {
    NewAndUpdated = 'new-and-updated',
    Recommended = 'recommended',
}

export const appExtraCategoryLabels = new Map([
    [AppExtraCategory.NewAndUpdated, T('New & Updated Apps')],
    [AppExtraCategory.Recommended, T('Recommended Apps')],
]);
