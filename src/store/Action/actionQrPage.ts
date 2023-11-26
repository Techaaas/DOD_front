// actions.ts
export const TOGGLE_INFO_GUEST = 'TOGGLE_INFO_GUEST';
export const SET_ENABLED = 'SET_ENABLED';
export const TOGGLE_CAMERA = 'TOGGLE_CAMERA';

export const toggleCameraAction = () => ({
  type: TOGGLE_CAMERA,
});

export const toggleInfoGuestAction = () => ({ type: TOGGLE_INFO_GUEST });
export const setEnabledAction = (value: boolean) => ({
  type: SET_ENABLED,
  payload: value,
});
