import type { ExportFormat } from '../enums/export-format.enum';
import type { QueryFilters, QueryOptions } from '../interfaces/query-api.interface';

export interface ExportParams<T, F = ExportFormat> {
    'query-filters'?: QueryFilters<T>;
    'query-options'?: QueryOptions<T>;
    export_format?: F;
}
