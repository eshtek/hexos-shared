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

export const servernameFormat = (hostname: string): boolean => {
    const regex = /^[a-z.-0-9]*[a-z0-9]$/i;
    return !/\s/.test(hostname) && regex.test(hostname);
};

export const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};
