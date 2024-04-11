import { Job } from '@shared/interfaces/job.interface';

export interface ErrorReport {
  title: string;
  message: string;
  backtrace?: string;
  logs?: Job;
}
