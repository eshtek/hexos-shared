import { ExportFormat } from '@shared/enums/export-format.enum';
import { QueryFilters, QueryOptions } from '@shared/interfaces/query-api.interface';

export interface ExportParams<T, F = ExportFormat> {
  'query-filters'?: QueryFilters<T>;
  'query-options'?: QueryOptions<T>;
  export_format?: F;
}
