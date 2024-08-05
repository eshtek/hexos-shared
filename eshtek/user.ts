import type { ID } from './common';

export enum UserPurchaseType {
    BETA = 'beta',
    TURBO = 'turbo',
}

export interface UserPurchase {
    active: boolean;
    purchase_type: UserPurchaseType;
    purchased?: Date;
    expiraration?: Date;
}

export interface User {
    id: ID;
    email: string;
    name: string;
    image?: string;
    preferences?: Preferences;
    purchases?: UserPurchase[];
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
