/**
 * GPU interface types based on TrueNAS middleware API
 * From middlewared/middlewared/api/v25_04_1/app.py
 */

export interface GpuVendorSpecificConfig {
    uuid?: string;
    [key: string]: unknown;
}

export interface GpuDevice {
    vendor: string | null;
    description: string | null;
    error: string | null;
    vendor_specific_config: GpuVendorSpecificConfig;
    gpu_details: Record<string, unknown>;
    pci_slot: string | null;
}

export type GpuChoices = Record<string, GpuDevice>;