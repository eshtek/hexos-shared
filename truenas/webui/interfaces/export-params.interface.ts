import type { ExportFormat } from '@shared/truenas/webui/enums/export-format.enum';
import type {
    QueryFilters,
    QueryOptions,
} from '@shared/truenas/webui/interfaces/query-api.interface';

export interface ExportParams<T, F = ExportFormat> {
    'query-filters'?: QueryFilters<T>;
    'query-options'?: QueryOptions<T>;
    export_format?: F;
}
