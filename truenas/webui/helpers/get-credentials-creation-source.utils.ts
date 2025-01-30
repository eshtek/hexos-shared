import type { Credentials } from '../interfaces/credential-type.interface';
import { CredentialType } from '../interfaces/credential-type.interface';

export function getCredentialsCreationSource(credentials: Credentials): string {
    if (credentials.type === CredentialType.UnixSocket || credentials.type === CredentialType.LoginPassword) {
        return credentials.data.username;
    }
    if (credentials.type === CredentialType.ApiKey) {
        return credentials.data.api_key;
    }
    if (credentials.type === CredentialType.Token) {
        return getCredentialsCreationSource(credentials.data.parent);
    }
    return '';
}
