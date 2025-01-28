import type { DirectoryServiceState } from '../enums/directory-service-state.enum';

export interface DirectoryServicesState {
    activedirectory: DirectoryServiceState;
    ldap: DirectoryServiceState;
}
