export type ID = `${number}` | number;

export const hasItems = (data: any) => {
    if (!data) return false;
    if (Array.isArray(data)) {
        return data.length > 0;
    } else if (data && typeof data === 'object') {
        return Object.keys(data).length > 0;
    }
    return false;
};
