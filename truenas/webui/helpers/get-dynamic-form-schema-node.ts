import { DynamicFormSchemaType } from '../truenas/webui/enums/dynamic-form-schema-type.enum';
import { SchemaType } from '../truenas/webui/enums/schema.enum';
import { toHumanReadableKey } from '../truenas/webui/helpers/object-keys-to-human-readable.helper';
import type { DynamicFormSchemaCheckbox, DynamicFormSchemaInput, DynamicFormSchemaNode } from '../truenas/webui/interfaces/dynamic-form-schema.interface';
import type { Schema } from '../truenas/webui/interfaces/schema.interface';

export function getDynamicFormSchemaNode(schema: Schema): DynamicFormSchemaNode {
    const baseSchema = {
        controlName: schema._name_,
        type: DynamicFormSchemaType.Input,
        title: toHumanReadableKey(schema.title),
        required: schema._required_,
    } as DynamicFormSchemaInput;

    if (schema.type === SchemaType.Boolean) {
        return {
            ...baseSchema,
            type: DynamicFormSchemaType.Checkbox,
        } as DynamicFormSchemaCheckbox;
    }

    if (schema.type === SchemaType.Integer) {
        return {
            ...baseSchema,
            inputType: 'number',
        };
    }

    return baseSchema;
}
