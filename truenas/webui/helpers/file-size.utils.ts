import type { ServerPool } from '../../../eshtek/server';
import { Gb, kb, Mb, Tb } from '../constants/bits.constant';
import { GiB, KiB, MiB, TiB } from '../constants/bytes.constant';

export function normalizeFileSize(
    value: number,
    baseUnit: 'b' | 'B' = 'B',
    base: 10 | 2 = 2,
    increment?: number,
): [formatted: number, unit: string, increment: number] {
    return base === 10 ? normalizeFileSizeBase10(value, baseUnit, increment) : normalizeFileSizeBase2(value, baseUnit, increment);
}

export function buildNormalizedFileSize(value: number, baseUnit: 'b' | 'B' = 'B', base: 10 | 2 = 2, providedIncrement?: number): string {
    const [formatted, unit] = normalizeFileSize(value, baseUnit, base, providedIncrement);
    return `${formatted} ${unit}`;
}

function normalizeFileSizeBase2(value: number, baseUnit: 'b' | 'B', providedIncrement?: number): [formatted: number, unit: string, increment: number] {
    let formatted = value;
    let increment = providedIncrement ?? 1;
    if (providedIncrement) {
        formatted = value / increment;
    } else {
        while (formatted >= 1024) {
            increment *= 1024;
            formatted = value / increment;
        }
    }
    formatted = Math.round((formatted + Number.EPSILON) * 100) / 100;
    switch (increment) {
        case KiB:
            return [formatted, 'Ki' + baseUnit, increment];
        case MiB:
            return [formatted, 'Mi' + baseUnit, increment];
        case GiB:
            return [formatted, 'Gi' + baseUnit, increment];
        case TiB:
            return [formatted, 'Ti' + baseUnit, increment];
        default:
            return [formatted, baseUnit, increment];
    }
}

function normalizeFileSizeBase10(value: number, baseUnit: 'b' | 'B', providedIncrement?: number): [formatted: number, unit: string, increment: number] {
    let formatted = value;
    let increment = providedIncrement ?? 1;
    if (providedIncrement) {
        formatted = value / increment;
    } else {
        while (formatted >= 1000) {
            increment *= 1000;
            formatted = value / increment;
        }
    }
    formatted = Math.round((formatted + Number.EPSILON) * 100) / 100;
    switch (increment) {
        case kb:
            return [formatted, 'k' + baseUnit, increment];
        case Mb:
            return [formatted, 'M' + baseUnit, increment];
        case Gb:
            return [formatted, 'G' + baseUnit, increment];
        case Tb:
            return [formatted, 'T' + baseUnit, increment];
        default:
            return [formatted, baseUnit, increment];
    }
}


export const getUsableStorage = (pool: ServerPool) => {
    const drives = pool.drives;
    if (!drives.length) {
        return buildNormalizedFileSize(0, 'B', 10);
    } else if (drives.length === 1) {
        return buildNormalizedFileSize(drives[0].realsize, 'B', 10);
    } else if (drives.length === 2) {
        const usableSize = drives.reduce((acc, drive) => acc + drive.realsize, 0) / 2;
        return buildNormalizedFileSize(usableSize, 'B', 10);
    } else if (drives.length >= 3) {
        const smallestDriveSize = Math.min(...drives.map((drive) => drive.realsize));
        const usableSize = smallestDriveSize * (drives.length - 1);
        return buildNormalizedFileSize(usableSize, 'B', 10);
    }
};


export function parseFileSize(value: string): number | null {
    if (!value) return null;
    const match = /^([\d.]+)\s*(kB|MB|GB|TB|KiB|MiB|GiB|TiB|B)$/i.exec(value.trim());
    if (!match) return null;

    const num = parseFloat(match[1]);
    const unit = match[2].toUpperCase();

    const multipliers: Record<string, number> = {
        B: 1,
        KB: 1e3, MB: 1e6, GB: 1e9, TB: 1e12,
        KIB: 1024, MIB: 1024 ** 2, GIB: 1024 ** 3, TIB: 1024 ** 4,
    };

    return multipliers[unit] ? num * multipliers[unit] : null;
}