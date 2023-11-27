// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';

import qrScanReducer from "@/store/Reducers/reducersQr";
import infoGuestReducer from './Slice/guestInfoPageState';
import FileReducer from './Slice/guestFileState';
import imageReducer from './Slice/guestImgState';

const store = configureStore({
  reducer: {
    qrScan: qrScanReducer,
    infoGuest: infoGuestReducer,
    file: FileReducer,
    image: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
