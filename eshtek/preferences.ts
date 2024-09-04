export interface Preferences {
  theme: PreferencesTheme;
  temperature: PreferencesTemperature;
  locations: Record<PreferenceLocationId, PreferenceLocation>;
}

export enum PreferenceLocationId {
  SYSTEM = 'System',
  APPS = 'Apps',
  DOWNLOADS = 'Downloads',
  DOCUMENTS = 'Documents',
  MEDIA = 'Media',
  PHOTOS = 'Photos',
  MUSIC = 'Music',
  MOVIES = 'Movies',
  SHOWS = 'Shows',
  VIRTUALIZATION = 'Virtualization',
  INSTALL_MEDIA = 'InstallMedia',
  VIRTUAL_DISKS = 'VirtualDisks',
}

export interface PreferenceLocation {
  id: PreferenceLocationId;
  name: string; 
  path: string; 
}

// Define interface for user preferences
export enum PreferencesTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum PreferenceLocationDependencyType {
  APP = 'app',
  VM = 'vm',
}

export enum PreferencesTemperature {
  FARENHEIT = 'farenheit',
  CELSIUS = 'celsius',
}

