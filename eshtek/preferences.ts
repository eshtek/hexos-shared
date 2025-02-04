import type { ServerFolderUse } from './server';

export interface Preferences {
  locations: Record<PreferenceLocationId, PreferenceLocation>;
}

export enum PreferenceLocationId { 
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

export interface PreferenceLocation {
  id: PreferenceLocationId;
  name: string; 
  path: string;
  parentId?: PreferenceLocationId;
  used_by?: ServerFolderUse[];
}
export interface PreferenceLocationTree extends PreferenceLocation {
  children?: PreferenceLocationTree[];
}

export enum PreferenceLocationDependencyType {
  APP = 'app',
  VM = 'vm',
}
