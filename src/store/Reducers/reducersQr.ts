import { TOGGLE_INFO_GUEST, SET_ENABLED, TOGGLE_CAMERA } from '../Action/actionQrPage';
import { QrScanState } from '../Types/types';

const initialState: QrScanState = {
  isEnabled: true,
  showInfoGuest: false,
  isCameraEnabled: true,
};

export const qrScanReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_INFO_GUEST:
      return { ...state, showInfoGuest: !state.showInfoGuest };
    case SET_ENABLED:
      return { ...state, isEnabled: action.payload };
    case TOGGLE_CAMERA:
      return { ...state, isCameraEnabled: !state.isCameraEnabled };
    default:
      return state;
  }
};

export default qrScanReducer;