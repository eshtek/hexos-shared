import type { FailoverDisabledReason } from '@shared/truenas/webui/enums/failover-disabled-reason.enum';

export interface FailoverDisabledReasonEvent {
    disabled_reasons: FailoverDisabledReason[];
}
