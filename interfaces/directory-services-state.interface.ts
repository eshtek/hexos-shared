import { DirectoryServiceState } from '@shared/enums/directory-service-state.enum';

export interface DirectoryServicesState {
  activedirectory: DirectoryServiceState;
  ldap: DirectoryServiceState;
}
