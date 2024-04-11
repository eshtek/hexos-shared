import { PodSelectDialogType } from '@shared/enums/pod-select-dialog.enum';
import { PodSelectDialogComponent } from '@shared/pages/apps/components/pod-select-dialog/pod-select-dialog.component';

export interface PodDialogData {
  type: PodSelectDialogType;
  title: string;
  appName: string;
  containerImageKey: string;
  customSubmit: (formValue: PodDialogFormValue, appName: string) => void;
}

export type PodDialogFormValue = PodSelectDialogComponent['form']['value'];
