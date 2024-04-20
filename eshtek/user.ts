import type { ID } from './common';

export interface User {
    id: ID;
    email: string;
    name: string;
    image?: string;
}

export interface NewUserRequest {
    name: string;
    email: string;
    password: string;
    clientip?: string;
}
