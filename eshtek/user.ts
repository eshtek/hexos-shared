import type { ID } from './common';

export interface User {
    id: ID;
    email: string;
    name: string;
    groups?: UserGroups[];
    image?: string;
    preferences?: UserPreferences;
    purchases?: UserPurchase[];
}

export interface UserPreferences {
    theme: UserPreferenceTheme;
    temperature: UserPreferenceTemperature;
}

// must match https://hub.hexos.com/admin/?app=core&module=members&controller=groups
export enum UserGroups {
    GUESTS = '2',
    MEMBERS = '3',
    ADMINISTRATORS = '4',
    MODERATORS = '6',
    BETA_UNLIMITED = '7',
    CUSTOMERS = '8',
    BETA_CUSTOMERS = '9',
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
