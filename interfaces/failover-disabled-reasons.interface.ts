import { FailoverDisabledReason } from '@shared/enums/failover-disabled-reason.enum';

export interface FailoverDisabledReasonEvent {
  disabled_reasons: FailoverDisabledReason[];
}
