import { GlobalErrorCode } from './errors';
import type { AppConfiguration } from './apps';
import type { LocationPreferenceId } from './preferences';
import type { ServerPool, ServerPoolNew, ServerUser, ServerUserType } from './server';
import type { VMBasics, VMSettings } from './vms';

export type ResponseSuccess<T> = {
    success: true;
    data: T;
};

export type ResponseError<T> = {
    success: false;
    error: string | GlobalErrorCode;
    data?: T;
};
export type Response<T> = ResponseSuccess<T> | ResponseError<T>;

export interface PaginationMeta {
    total_items: number;
    total_pages: number;
    current_page: number;
    page_size: number;
}

export interface PaginationRequest {
    page: number;
    page_size: number;
}

export interface PaginationResult<T> {
    total: number;
    data: T[];
}

export interface ResponsePaginatedSuccess<T> {
    success: true;
    data: T[];
    meta: PaginationMeta;
}
export type ResponsePaginated<T> = ResponsePaginatedSuccess<T> | ResponseError<T>;

export interface RequestAuth {
    email: string;
    password: string;
}

export interface RequestAuth2FA {
    email: string;
    password: string;
    twofactor: string;
}

export interface RequestNewAccount {
    name: string;
    email: string;
    password: string;
    clientip?: string;
}

export interface RequestClaimServer {
    password: string;
    hostId: string;
}

export interface RequestUser extends ServerUser {
    password: string;
    type: ServerUserType;
}

export interface RequestFinishServer {
    hostId: string;
    pools: ServerPool[];
    name: string;
}

export interface RequestFeedback {
    email: string;
    message: string;
}

export interface RequestId {
    id: string;
}

export interface RequestDeleteFolder {
    pool: string;
    dataset: string;
}

export interface RequestVMCreate extends VMBasics {
    settings: VMSettings;
}

export interface RequestSetting {
    value: string;
    json?: boolean;
}

export interface RequestPreferenceLocationUpdate {
    id: LocationPreferenceId;
    path: string;
}

export interface RequestListDir {
    path: string;
    limit?: number;
    fileType?: 'files' | 'directories' | 'all';
}

export interface RequestCreatePool {
    pools: ServerPoolNew[];
}

export interface RequestDockerUpdatePool {
    poolName: string;
}

export interface RequestAppInstall extends AppConfiguration {
    id: string;
    train?: 'community' | 'stable';
}

export interface RequestAppUpdate extends AppConfiguration {}
export interface RequestAppUpdateAnalysis extends AppConfiguration {}


export enum ResourceChangeType {
    STORAGE = 'storage',
    NETWORK = 'network',
    ENVIRONMENT = 'environment',
    RESOURCE = 'resource',
    PERMISSION = 'permission',
    CONFIG = 'config'
}

export enum ResourceChangeAction {
    CREATE = 'create',
    UPDATE = 'update',
    DELETE = 'delete',
    NO_OP = 'no-op'
}

export interface ResponseResourceChanges {
    resourceChanges: Array<{
        address: string;
        type: ResourceChangeType;
        change: {
            actions: Array<ResourceChangeAction>;
            before: any;
            after: any;
        };
    }>;
    planSummary: {
        totalChanges: number;
        changesByAction: {
            create: number;
            update: number;
            delete: number;
            noOp: number;
        };
    };
    validation: {
        updateCompatible: boolean;
        compatibilityConstraint?: string;
        warnings: string[];
    };
    versionInfo: {
        current?: string;
        target: string;
        changelog?: string;
    };
}

export interface RequestAppDelete {
    deleteData?: boolean;
}

export enum AppSearchSortBy {
    NAME = 'name',
    POPULARITY = 'popularity',
    CREATED_AT = 'createdAt',
    UPDATED_AT = 'updatedAt',
}

export enum AppSearchSortOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export interface RequestAppSearch {
    appId?: string;
    search?: string;
    category?: string;
    fresh?: boolean;
    supported?: boolean;
    recommended?: boolean;
    train?: 'stable' | 'community';
    sortBy?: AppSearchSortBy;
    sortOrder?: AppSearchSortOrder;
    popularityStartDate?: string;
    popularityEndDate?: string;
    page?: number;
    pageSize?: number;
    limit?: number; // -1 means return all results
}

export interface AppCategoryInfo {
    name: string;
    appCount: number;
}

export interface RequestAppCategories {
    train?: 'stable' | 'community';
    supported?: boolean;
    fresh?: boolean;
}

export type ResponseAppCategories = Response<AppCategoryInfo[]>;