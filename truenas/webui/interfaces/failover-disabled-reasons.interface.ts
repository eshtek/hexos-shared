import type { FailoverDisabledReason } from '../enums/failover-disabled-reason.enum';

export interface FailoverDisabledReasonEvent {
    disabled_reasons: FailoverDisabledReason[];
}
