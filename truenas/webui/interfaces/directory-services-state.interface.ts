import type { DirectoryServiceState } from '@shared/truenas/webui/enums/directory-service-state.enum';

export interface DirectoryServicesState {
    activedirectory: DirectoryServiceState;
    ldap: DirectoryServiceState;
}
