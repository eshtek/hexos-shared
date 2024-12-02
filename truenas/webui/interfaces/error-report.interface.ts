import type { Job } from '../truenas/webui/interfaces/job.interface';

export interface ErrorReport {
    title: string;
    message: string;
    backtrace?: string;
    logs?: Job;
}
