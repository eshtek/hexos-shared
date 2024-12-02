import type { ExportFormat } from '../truenas/webui/enums/export-format.enum';
import type { QueryFilters, QueryOptions } from '../truenas/webui/interfaces/query-api.interface';

export interface ExportParams<T, F = ExportFormat> {
    'query-filters'?: QueryFilters<T>;
    'query-options'?: QueryOptions<T>;
    export_format?: F;
}
