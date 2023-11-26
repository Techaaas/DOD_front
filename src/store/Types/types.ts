// types.ts
export interface QrScanState {
  isEnabled: boolean;
  showInfoGuest: boolean;
  isCameraEnabled: boolean
}

export interface FileState {
  file: File | null;
}

export interface InfoGuestState {
  isStatementSelected: boolean;
  isPassportSelected: boolean;
  name: string;
  surname: string;
}
