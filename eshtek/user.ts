import type { ID } from './common';
import type { Preferences } from './preferences';

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

