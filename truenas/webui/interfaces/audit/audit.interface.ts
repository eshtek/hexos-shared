import { AuditEvent, AuditService } from '../truenas/webui/enums/audit.enum';
import { ApiTimestamp } from '../truenas/webui/interfaces/api-date.interface';
import { MiddlewareAuditEntry } from '../truenas/webui/interfaces/audit/middleware-audit-entry.interface';
import { SmbAuditEntry } from '../truenas/webui/interfaces/audit/smb-audit-entry.interface';
import { QueryFilters, QueryOptions } from '../truenas/webui/interfaces/query-api.interface';

export interface AuditQueryParams {
    services?: AuditService[];
    'query-filters'?: QueryFilters<AuditEntry>;
    'query-options'?: QueryOptions<AuditEntry>;
}

export interface BaseAuditEntry {
    audit_id: string;
    session: string;
    message_timestamp: number;
    timestamp: ApiTimestamp;
    address: string;
    username: string;
    event: AuditEvent;
    success: boolean;
}

export interface AuditConfig {
    retention: number;
    reservation: number;
    quota: number;
    quota_fill_warning: number;
    quota_fill_critical: number;
}

export type AuditEntry = SmbAuditEntry | MiddlewareAuditEntry;

export interface AuditVersions {
    major: number;
    minor: number;
}
