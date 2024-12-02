import type { UntypedFormArray } from '@angular/forms';
import type { Observable } from 'rxjs';
import type { CodeEditorLanguage } from '../truenas/webui/enums/code-editor-language.enum';
import type { DynamicFormSchemaType } from '../truenas/webui/enums/dynamic-form-schema-type.enum';
import type { ChartSchemaNode } from '../truenas/webui/interfaces/chart-release.interface';
import type { Option } from '../truenas/webui/interfaces/option.interface';
import type { TreeNodeProvider } from '../modules/ix-forms/components/ix-explorer/tree-node-provider.interface';

export interface DynamicFormSchema {
    name: string;
    description: string;
    schema: DynamicFormSchemaNode[];
}

export interface DynamicWizardSchema extends DynamicFormSchema {
    help: string;
}

export type DynamicFormSchemaNode =
    | DynamicFormSchemaUri
    | DynamicFormSchemaCron
    | DynamicFormSchemaInput
    | DynamicFormSchemaSelect
    | DynamicFormSchemaEnum
    | DynamicFormSchemaExplorer
    | DynamicFormSchemaCheckbox
    | DynamicFormSchemaIpaddr
    | DynamicFormSchemaDict
    | DynamicFormSchemaList
    | DynamicFormSchemaText;

export interface DynamicFormSchemaBase {
    controlName: string;
    dependsOn?: string[];
    title?: string;
    required?: boolean;
    tooltip?: string;
    hidden?: boolean;
    editable?: boolean;
    indent?: boolean;
    default?: unknown[];
}

export interface DynamicFormSchemaInput extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Input;
    tooltip?: string;
    inputType?: 'password' | 'number';
    placeholder?: string;
}

export interface DynamicFormSchemaText extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Text;
    tooltip?: string;
    placeholder?: string;
    language: CodeEditorLanguage;
}

export interface DynamicFormSchemaUri extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Uri;
    inputType?: string;
    tooltip?: string;
    placeholder?: string;
}

export interface DynamicFormSchemaCron extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Cron;
    tooltip?: string;
}

export interface DynamicFormSchemaSelect extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Select;
    tooltip?: string;
    options?: Observable<Option[]>;
    hideEmpty?: boolean;
}

export interface DynamicFormSchemaEnum extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Enum;
    tooltip?: string;
    options?: Observable<Option[]>;
}

export interface DynamicFormSchemaExplorer extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Explorer;
    tooltip?: string;
    nodeProvider?: TreeNodeProvider;
}

export interface DynamicFormSchemaCheckbox extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Checkbox;
    tooltip?: string;
}

export interface DynamicFormSchemaIpaddr extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Ipaddr;
    tooltip?: string;
}

export interface DynamicFormSchemaList extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.List;
    items?: DynamicFormSchemaNode[];
    itemsSchema?: ChartSchemaNode[];
}

export interface DynamicFormSchemaDict extends DynamicFormSchemaBase {
    type: DynamicFormSchemaType.Dict;
    attrs?: DynamicFormSchemaNode[];
}

export interface AddListItemEvent {
    array: UntypedFormArray;
    schema: ChartSchemaNode[];
}

export interface DeleteListItemEvent {
    array: UntypedFormArray;
    index: number;
}
