import type { ReportingRealtimeUpdate } from '../truenas/webui/interfaces/reporting.interface';

export interface Data<T = unknown> {
    name: string;
    data?: T;
}
export interface DDPClientMeta {
    subscriptions: Record<string, string>;
    apikey?: string;
    hostId: string;
    lanIp: string;
    wanIp: string;
    buildTime?: Date;
    buildVersion?: string;
    userId?: string;
    realtimeReporting?: ReportingRealtimeUpdate;
}
