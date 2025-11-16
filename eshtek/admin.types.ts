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