import type { ReportingGraphName } from '../enums/reporting.enum';

export interface ReportingGraph {
    identifiers: string[];
    name: ReportingGraphName;
    title: string;
    vertical_label: string;
}
