import type { VdevType } from '@shared/truenas/webui/enums/v-dev-type.enum';
import type { TopologyItem } from '@shared/truenas/webui/interfaces/storage.interface';

export interface VDevGroup {
    group: string;
    guid: VdevType;
    children: TopologyItem[];
}

export type DeviceNestedDataNode = TopologyItem | VDevGroup;

export function isVdevGroup(node: DeviceNestedDataNode): node is VDevGroup {
    return 'group' in node;
}
