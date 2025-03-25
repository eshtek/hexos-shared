import type { ServerFolderUse } from './server';

export interface ResolvedPreferences {
  locations: Record<LocationPreferenceId, ResolvedLocationPreference>;
}

export interface StoredPreferences {
  locations: Partial<Record<LocationPreferenceId, string>>;
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
  [LocationPreferenceId.VIRTUAL_DISKS]: 'vms/select',
}

export interface ResolvedLocationPreference {
  id: LocationPreferenceId;
  name: string; 
  path: string;
  parentId?: LocationPreferenceId;
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
