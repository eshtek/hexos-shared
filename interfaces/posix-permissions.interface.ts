import { PosixPermissions } from '@shared/interfaces/acl.interface';

export interface UnixFilePermissions {
  owner: PosixPermissions;
  group: PosixPermissions;
  other: PosixPermissions;
}
