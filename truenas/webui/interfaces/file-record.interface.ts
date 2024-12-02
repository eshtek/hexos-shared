import type { FileAttribute } from '../truenas/webui/enums/file-attribute.enum';
import type { FileType } from '../truenas/webui/enums/file-type.enum';
import type { QueryFilter, QueryOptions } from '../truenas/webui/interfaces/query-api.interface';

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
