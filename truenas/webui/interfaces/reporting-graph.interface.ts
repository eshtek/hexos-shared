import type { ReportingGraphName } from '@shared/truenas/webui/enums/reporting.enum';

export interface ReportingGraph {
    identifiers: string[];
    name: ReportingGraphName;
    title: string;
    vertical_label: string;
}
