import type { AuditEvent, AuditService } from '../../enums/audit.enum';
import type { ApiTimestamp } from '../../interfaces/api-date.interface';
import type { MiddlewareAuditEntry } from '../../interfaces/audit/middleware-audit-entry.interface';
import type { SmbAuditEntry } from '../../interfaces/audit/smb-audit-entry.interface';
import type { QueryFilters, QueryOptions } from '../../interfaces/query-api.interface';

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
