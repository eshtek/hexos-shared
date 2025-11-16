/**
 * Admin API Types and Interfaces
 */

/**
 * Response from the catalog status endpoint
 */
export interface CatalogStatusResponse {
    totalApps: number;
    supportedApps: number;
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