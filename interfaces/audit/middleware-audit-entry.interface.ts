import { AuditEvent, AuditService } from '@shared/enums/audit.enum';
import { AuditVersions, BaseAuditEntry } from '@shared/interfaces/audit/audit.interface';
import { CredentialType } from '@shared/interfaces/credential-type.interface';

interface BaseMiddlewareAuditEntry extends BaseAuditEntry {
  service: AuditService.Middleware;
  service_data: AuditMiddlewareServiceData;
}

export interface MiddlewareAuthenticationEventData {
  credentials: AuditMiddlewareCredentials;
  error: unknown;
}

export interface MiddlewareMethodCallData {
  method: string;
  params: unknown;
  description: string;
  authenticated: boolean;
  authorized: boolean;
}

export interface MiddlewareAuthenticationEntry extends BaseMiddlewareAuditEntry {
  event: AuditEvent.Authentication;
  event_data: MiddlewareAuthenticationEventData;
}

export interface MiddlewareMethodCallEntry extends BaseMiddlewareAuditEntry {
  event: AuditEvent.MethodCall;
  event_data: MiddlewareMethodCallData;
}

export type MiddlewareAuditEntry =
  | MiddlewareMethodCallEntry
  | MiddlewareAuthenticationEntry;

export interface AuditMiddlewareCredentials {
  credentials: CredentialType;
  credentials_data: Record<string, unknown>;
}

export interface AuditMiddlewareServiceData {
  vers: AuditVersions;
  origin: string;
  protocol: string;
  credentials: AuditMiddlewareCredentials;
}
