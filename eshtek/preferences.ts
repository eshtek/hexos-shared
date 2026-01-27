import type { ServerFolderUse } from './server';
import { HexAchievement } from './tasks';

export interface StoredPreferences {
  "pool-capacity": string;
  "pool-performance": string;
  network_interface_identifier: {[key: string]: number};
  drive_identifier: {[key: string]: number};
  "first-flight-dismissed": Date | null;
  "dashboard-section-system": boolean;
  "dashboard-section-pools": boolean;
  "dashboard-section-apps": boolean;
  "dashboard-item-system-network": {[key: string]: boolean};
  "dashboard-item-system-health": {[key: string]: boolean};
  "dashboard-item-app": {[key: string]: boolean};
  "dashboard-item-pool": {[key: string]: boolean};
  "dashboard-item-system-memory": {[key: string]: boolean};
  "dashboard-item-system-processor": {[key: string]: boolean};
  achievements: {[key in HexAchievement]?: Date | null};
  locations: Partial<Record<LocationPreferenceId, string>>;
}

export type ResolvedPreferences = Omit<StoredPreferences, 'locations'> & {
  locations: Record<LocationPreferenceId, ResolvedLocationPreference>;
}

export interface GlobalPreferences {
  "theme-setting": 'dark' | 'light';
  "language-setting": 'en' | 'es';
  "dev-mode": "on" | "off";
  "expert-mode": "on" | "off";
}

export enum LocationPreferenceId { 
  APPLICATIONS_PERFORMANCE = 'ApplicationsPerformance',
  APPLICATIONS_CAPACITY = 'ApplicationsCapacity',
  DOWNLOADS = 'Downloads',
  DOCUMENTS = 'Documents',
  MEDIA = 'Media',
  PHOTOS = 'Photos',
  MUSIC = 'Music',
  MOVIES = 'Movies',
  SHOWS = 'Shows',
  VIDEOS = 'Videos',
  VIRTUALIZATION_PERFORMANCE = 'VirtualizationPerformance',
  VIRTUALIZATION_CAPACITY = 'VirtualizationCapacity',
  INSTALL_MEDIA = 'InstallMedia',
  VIRTUAL_DISKS = 'VirtualDisks',
}

export const PreferenceLocationIcons: Record<LocationPreferenceId, string> = {
  [LocationPreferenceId.APPLICATIONS_PERFORMANCE]: 'misc/app',
  [LocationPreferenceId.APPLICATIONS_CAPACITY]: 'misc/app',
  [LocationPreferenceId.DOWNLOADS]: 'vms/download',
  [LocationPreferenceId.DOCUMENTS]: 'files/file-txt',
  [LocationPreferenceId.MEDIA]: 'files/file-movie',
  [LocationPreferenceId.PHOTOS]: 'files/file-image',
  [LocationPreferenceId.MUSIC]: 'files/file-audio',
  [LocationPreferenceId.MOVIES]: 'files/file-movie',
  [LocationPreferenceId.SHOWS]: 'misc/remote',
  [LocationPreferenceId.VIDEOS]: 'vms/play',
  [LocationPreferenceId.VIRTUALIZATION_PERFORMANCE]: 'files/folder-virtualization',
  [LocationPreferenceId.VIRTUALIZATION_CAPACITY]: 'files/folder-virtualization',
  [LocationPreferenceId.INSTALL_MEDIA]: 'storage/usb-key',
  [LocationPreferenceId.VIRTUAL_DISKS]: 'application/VHD',
}

export interface ResolvedLocationPreference {
  id: LocationPreferenceId;
  name: string; 
  path: string;
  used_by: ServerFolderUse[];
  created: boolean
}
export interface ResolvedLocationPreferenceNode extends ResolvedLocationPreference {
  children?: ResolvedLocationPreferenceNode[];
}

export enum LocationPreferenceDependencyType {
  APP = 'app',
  VM = 'vm',
}
