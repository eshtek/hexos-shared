import type { PosixPermissions } from '@shared/truenas/webui/interfaces/acl.interface';

export interface UnixFilePermissions {
    owner: PosixPermissions;
    group: PosixPermissions;
    other: PosixPermissions;
}
