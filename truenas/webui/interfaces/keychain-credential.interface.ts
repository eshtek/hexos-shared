import type { KeychainCredentialType } from '../truenas/webui/enums/keychain-credential-type.enum';
import type { SshCredentials } from '../truenas/webui/interfaces/ssh-credentials.interface';

export type KeychainCredential = KeychainSshKeyPair | KeychainSshCredentials;

export interface KeychainSshKeyPair {
    attributes: SshKeyPair;
    id: number;
    name: string;
    type: KeychainCredentialType.SshKeyPair;
}

export interface SshKeyPair {
    private_key: string;
    public_key: string;
}

export interface KeychainSshCredentials {
    attributes: SshCredentials;
    id: number;
    name: string;
    type: KeychainCredentialType.SshCredentials;
}

export type KeychainCredentialCreate = Omit<KeychainCredential, 'id'>;
export type KeychainCredentialUpdate = Omit<KeychainCredential, 'id' | 'type'>;
