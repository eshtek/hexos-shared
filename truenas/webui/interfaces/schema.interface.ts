import type { SchemaType } from '../truenas/webui/enums/schema.enum';

export interface Schema {
    title: string;
    type: SchemaType | SchemaType[];
    _name_: string;
    _required_: boolean;
}
