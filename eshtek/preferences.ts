export interface Preferences {
  locations: Record<PreferenceLocationId, PreferenceLocation>;
}

export enum PreferenceLocationId {
  DOWNLOADS = 'Downloads',
  DOCUMENTS = 'Documents',
  MEDIA = 'Media',
  PHOTOS = 'Photos',
  MUSIC = 'Music',
  MOVIES = 'Movies',
  SHOWS = 'Shows',
  VIDEOS = 'Videos',
  VIRTUALIZATION = 'Virtualization',
  INSTALL_MEDIA = 'InstallMedia',
  VIRTUAL_DISKS = 'VirtualDisks',
}

export interface PreferenceLocation {
  id: PreferenceLocationId;
  name: string; 
  path: string;
  parentId?: PreferenceLocationId;
}
export interface PreferenceLocationTree extends PreferenceLocation {
  children?: PreferenceLocationTree[];
}

export enum PreferenceLocationDependencyType {
  APP = 'app',
  VM = 'vm',
}
