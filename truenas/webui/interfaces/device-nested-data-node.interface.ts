import type { VdevType } from '../enums/v-dev-type.enum';
import type { TopologyItem } from '../interfaces/storage.interface';

export interface VDevGroup {
    group: string;
    guid: VdevType;
    children: TopologyItem[];
}

export type DeviceNestedDataNode = TopologyItem | VDevGroup;

export function isVdevGroup(node: DeviceNestedDataNode): node is VDevGroup {
    return 'group' in node;
}
