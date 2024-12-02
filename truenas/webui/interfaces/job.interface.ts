import type { JobState } from '../truenas/webui/enums/job-state.enum';
import type { ResponseErrorType } from '../truenas/webui/enums/response-error-type.enum';
import type { ApiJobMethod } from '../truenas/webui/interfaces/api/api-job-directory.interface';
import type { ApiTimestamp } from '../truenas/webui/interfaces/api-date.interface';
import type { Credentials } from '../truenas/webui/interfaces/credential-type.interface';

export interface Job<R = unknown, A = unknown[]> {
    abortable: boolean;
    arguments: A;
    transient: boolean;
    description: string;
    error: string;
    extra?: Record<string, unknown>;
    exc_info: {
        type?: ResponseErrorType | null;
        extra: string | number | boolean | unknown[] | Record<string, unknown>;
        repr?: string;
    };
    exception: string;
    id: number;
    logs_excerpt: string;
    credentials: Credentials | null;
    logs_path: string;
    method: ApiJobMethod;
    progress: JobProgress;
    result: R;
    state: JobState;
    time_finished: ApiTimestamp | null;
    time_started: ApiTimestamp;
}

export interface JobProgress {
    percent: number;
    description: string;
    extra: string;
}
