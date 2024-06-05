import type { FormGroup } from '@angular/forms';
import type { Subscription } from 'rxjs';
import type {
    ChartFormValue,
    ChartSchemaNode,
    ChartSchemaNodeConf,
} from '@shared/truenas/webui/interfaces/chart-release.interface';
import type {
    AddListItemEvent,
    DynamicFormSchemaNode,
} from '@shared/truenas/webui/interfaces/dynamic-form-schema.interface';
import type { HierarchicalObjectMap } from '@shared/truenas/webui/interfaces/hierarhical-object-map.interface';
import type { CustomUntypedFormGroup } from '@shared/modules/ix-dynamic-form/components/ix-dynamic-form/classes/custom-untyped-form-group';

export interface FormControlPayload {
    chartSchemaNode: ChartSchemaNode;
    formGroup: CustomUntypedFormGroup | FormGroup;
    config: HierarchicalObjectMap<ChartFormValue>;
    isNew: boolean;
    isParentImmutable: boolean;
    path?: string;
}

export interface FormListItemPayload {
    event: AddListItemEvent;
    isNew: boolean;
    isParentImmutable: boolean;
    config?: HierarchicalObjectMap<ChartFormValue>;
}

export interface CommonSchemaTransform {
    schema: ChartSchemaNodeConf;
    chartSchemaNode: ChartSchemaNode;
    isNew: boolean;
    isParentImmutable: boolean;
    newSchema: DynamicFormSchemaNode[];
}

export interface CommonSchemaAddControl {
    schema: ChartSchemaNodeConf;
    isNew: boolean;
    subscription: Subscription;
    formGroup: CustomUntypedFormGroup | FormGroup;
    config: HierarchicalObjectMap<ChartFormValue>;
    isParentImmutable: boolean;
    chartSchemaNode: ChartSchemaNode;
    path?: string;
}

export interface CommonSchemaBase {
    controlName: string;
    title: string;
    required: boolean;
    editable: boolean;
    tooltip: string;
}

export interface KeysRestoredFromFormGroup {
    newConfig: HierarchicalObjectMap<ChartFormValue>;
    keyConfig: string;
    valueConfig: ChartFormValue | HierarchicalObjectMap<ChartFormValue>;
    formConfig: FormGroup;
}

export type SerializeFormValue =
    | HierarchicalObjectMap<ChartFormValue>
    | HierarchicalObjectMap<ChartFormValue>[]
    | ChartFormValue;

export type TransformNodeFunction = (
    chartSchemaNode: ChartSchemaNode,
    isNew: boolean,
    isParentImmutable: boolean,
) => DynamicFormSchemaNode[];
