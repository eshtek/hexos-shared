import type { Role } from '@shared/truenas/webui/enums/role.enum';
import type { Group } from '@shared/truenas/webui/interfaces/group.interface';

export interface Privilege {
    id: number;
    name: string;
    builtin_name: string;
    local_groups: Group[];
    ds_groups: Group[];
    web_shell: boolean;
    roles: Role[];
}

export interface PrivilegeUpdate {
    name: string;
    local_groups: number[];
    ds_groups: number[];
    web_shell: boolean;
    roles: Role[];
}

export interface PrivilegeRole {
    name: Role;
    title: string;
    includes: Role[];
    builtin: boolean;
}