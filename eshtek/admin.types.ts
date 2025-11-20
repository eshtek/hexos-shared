/**
 * Admin API Types and Interfaces
 */

/**
 * Response from the catalog status endpoint
 */
export interface CatalogStatusResponse {
    totalApps: number;
    totalNonDeprecated: number;
    totalWithScripts: number;
    totalWithScriptsNonDeprecated: number;
    totalDeprecated: number;
    lastSync: Date | null;
}

/**
 * Individual app in the catalog
 */
export interface CatalogApp {
    id: number;
    name: string;
    train: string | null;
    version: string | null;
    appVersion: string | null;
    title: string | null;
    description: string | null;
    home: string | null;
    iconUrl: string | null;
    screenshots: string[];
    sources: string[];
    categories: string[];
    keywords: string[];
    maintainers: any[];
    supported: boolean;
    deprecated: boolean;
    installScript: string | null;
    requirements: any;
    compatibility: string | null;
    lastCatalogSync: Date | null;
    metadata: any;
    // Event statistics (detailed)
    installsCompleted?: number;
    installsFailed?: number;
    uninstallsCompleted?: number;
    uninstallsFailed?: number;
    upgradesCompleted?: number;
    upgradesFailed?: number;
    updatesCompleted?: number;
    updatesFailed?: number;
}

/**
 * Response from the catalog data endpoint
 */
export interface AppsCatalogResponse {
    apps: CatalogApp[];
    totalApps: number;
    totalWithScripts: number;
    totalDeprecated: number;
    lastSync: Date | null;
}

/**
 * Drive data with event statistics
 */
export interface DriveData {
    id: number;
    manufacturer: string;
    model: string;
    name: string | null;
    type: string | null;
    size: number | null;
    smr: boolean;
    notes: string | null;
    isUserDiscovered: boolean;
    createdAt: Date;
    updatedAt: Date;
    // Event statistics
    utilized: number;
    replaced: number;
    removed: number;
    failed: number;
    discovered: number;
}

/**
 * Response from the drives data endpoint
 */
export interface DrivesResponse {
    drives: DriveData[];
    totalDrives: number;
    totalSMR: number;
    totalUtilized: number;
    totalFailed: number;
    totalRemoved: number;
}