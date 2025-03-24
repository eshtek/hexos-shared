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

export const PreferenceLocationIcons: Record<PreferenceLocationId, string> = {
  [PreferenceLocationId.APPLICATIONS_PERFORMANCE]: 'misc/app',
  [PreferenceLocationId.APPLICATIONS_CAPACITY]: 'misc/app',
  [PreferenceLocationId.DOWNLOADS]: 'vms/download',
  [PreferenceLocationId.DOCUMENTS]: 'files/file-txt',
  [PreferenceLocationId.MEDIA]: 'files/file-movie',
  [PreferenceLocationId.PHOTOS]: 'files/file-image',
  [PreferenceLocationId.MUSIC]: 'files/file-audio',
  [PreferenceLocationId.MOVIES]: 'files/file-movie',
  [PreferenceLocationId.SHOWS]: 'misc/remote',
  [PreferenceLocationId.VIDEOS]: 'vms/play',
  [PreferenceLocationId.VIRTUALIZATION_PERFORMANCE]: 'files/folder-virtualization',
  [PreferenceLocationId.VIRTUALIZATION_CAPACITY]: 'files/folder-virtualization',
  [PreferenceLocationId.INSTALL_MEDIA]: 'storage/usb-key',
  [PreferenceLocationId.VIRTUAL_DISKS]: 'vms/select',
}

export interface PreferenceLocation {
  id: PreferenceLocationId;
  name: string; 
  path: string;
  parentId?: PreferenceLocationId;
  used_by: ServerFolderUse[];
  created: boolean
}
export interface PreferenceLocationTree extends PreferenceLocation {
  children?: PreferenceLocationTree[];
}

export enum PreferenceLocationDependencyType {
  APP = 'app',
  VM = 'vm',
}
