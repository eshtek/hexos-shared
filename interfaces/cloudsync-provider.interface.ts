import { CloudSyncProviderName } from '@shared/enums/cloudsync-provider.enum';
import { TransferMode } from '@shared/enums/transfer-mode.enum';

export interface CloudSyncProvider {
  bucket_title: string;
  buckets: boolean;
  credentials_oauth: string;
  credentials_schema: unknown[];
  name: CloudSyncProviderName;
  task_schema: unknown[]; // Not really used
  title: string;
}

export type CloudSyncRestoreParams = [
  id: number,
  params: {
    description: string;
    transfer_mode: TransferMode;
    path: string;
  },
];
