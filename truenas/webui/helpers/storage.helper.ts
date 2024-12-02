import { VdevType } from '../truenas/webui/enums/v-dev-type.enum';

export function isTopologyLimitedToOneLayout(type: VdevType): boolean {
    return type === VdevType.Spare || type === VdevType.Cache;
}
