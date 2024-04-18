import type { ID } from './common';

export interface User {
    id: ID;
    email: string;
    name: string;
    image?: string;
}
