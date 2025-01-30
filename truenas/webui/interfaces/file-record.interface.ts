import type { FileAttribute } from '../enums/file-attribute.enum';
import type { FileType } from '../enums/file-type.enum';
import type { QueryFilter, QueryOptions } from '../interfaces/query-api.interface';

export interface FileRecord {
    acl: boolean;
    gid: number;
    mode: number;
    name: string;
    path: string;
    realpath: string;
    size: number;
    type: FileType;
    uid: number;
    is_ctldir: boolean;
    is_mountpoint: boolean;
    attributes: FileAttribute[];
}

export type ListdirQueryParams = [path: string, filter: [QueryFilter<FileRecord>?], options: QueryOptions<FileRecord>];
