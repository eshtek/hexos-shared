import type { ID } from './common';

export interface User {
    id: ID;
    email: string;
    name: string;
    image?: string;
    preferences?: UserPreferences;
    purchases?: UserPurchase[];
}

export interface UserPreferences {
    theme: UserPreferenceTheme;
    temperature: UserPreferenceTemperature;
}

export enum UserPreferenceTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

export enum UserPreferenceTemperature {
    FARENHEIT = 'farenheit',
    CELSIUS = 'celsius',
}

export enum UserPurchaseType {
    Beta = 'beta',
    Pro = 'pro',
}

export interface UserPurchase {
    active: boolean;
    purchase_type: UserPurchaseType;
    purchased?: Date;
    expiraration?: Date;
}

export interface NewUserRequest {
    name: string;
    email: string;
    password: string;
    clientip?: string;
}
