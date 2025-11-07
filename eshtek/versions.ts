export interface VersionParts {
    year: number;
    month: number;
    build: number;
    patch: number;
}

export const parseVersion = (version: string): VersionParts => {
    const cleanVersion = version.split('-')[0];
    const parts = cleanVersion.split('.').map(p => {
        const num = Number(p);
        return isNaN(num) ? 0 : num;
    });
    return {
        year: parts[0] || 0,
        month: parts[1] || 0,
        build: parts[2] || 0,
        patch: parts[3] || 0,
    };
};

export const compareVersions = (a: VersionParts, b: VersionParts): number => {
    if (a.year !== b.year) return a.year - b.year;
    if (a.month !== b.month) return a.month - b.month;
    if (a.build !== b.build) return a.build - b.build;
    return a.patch - b.patch;
};

export const parseRange = (range: string): { min?: VersionParts; max?: VersionParts; minInclusive: boolean; maxInclusive: boolean } => {
    const parts = range.split(/\s+/);
    let min: VersionParts | undefined;
    let max: VersionParts | undefined;
    let minInclusive = false;
    let maxInclusive = false;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part.startsWith('>=')) {
            min = parseVersion(part.substring(2));
            minInclusive = true;
        } else if (part.startsWith('>')) {
            min = parseVersion(part.substring(1));
            minInclusive = false;
        } else if (part.startsWith('<=')) {
            max = parseVersion(part.substring(2));
            maxInclusive = true;
        } else if (part.startsWith('<')) {
            max = parseVersion(part.substring(1));
            maxInclusive = false;
        }
    }

    return { min, max, minInclusive, maxInclusive };
};

export const isTrueNASVersionInRange = (buildVersion: string, versionRange: string): boolean => {
    if (!buildVersion) {
        return false;
    }

    try {
        const version = parseVersion(buildVersion);
        const { min, max, minInclusive, maxInclusive } = parseRange(versionRange);

        if (min) {
            const cmp = compareVersions(version, min);
            if (minInclusive) {
                if (cmp < 0) return false;
            } else {
                if (cmp <= 0) return false;
            }
        }

        if (max) {
            const cmp = compareVersions(version, max);
            if (maxInclusive) {
                if (cmp > 0) return false;
            } else {
                if (cmp >= 0) return false;
            }
        }

        return true;
    } catch (error) {
        return false;
    }
};
