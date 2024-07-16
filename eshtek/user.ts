import type { ID } from './common';

export interface User {
    id: ID;
    email: string;
    name: string;
    image?: string;
    preferences?: Preferences;
}

export interface NewUserRequest {
    name: string;
    email: string;
    password: string;
    clientip?: string;
}

export enum UserPreferenceTheme {
    LIGHT = 'light',
    DARK = 'dark',
}
export enum UserPreferenceTemperature {
    FARENHEIT = 'farenheit',
    CELSIUS = 'celsius',
}

export interface Preferences {
    theme: UserPreferenceTheme;
    temperature: UserPreferenceTemperature;
}
