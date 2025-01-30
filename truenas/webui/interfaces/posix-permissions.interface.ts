import type { PosixPermissions } from '../interfaces/acl.interface';

export interface UnixFilePermissions {
    owner: PosixPermissions;
    group: PosixPermissions;
    other: PosixPermissions;
}
