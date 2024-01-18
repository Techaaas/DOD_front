import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoGuestState } from '../Types/types';
import data from '@/data/info_guest.json'

const initialState: InfoGuestState = {
  isStatementSelected: false,
  isPassportSelected: false,
  name: data.name,
  surname: data.surname,
  isAbsent: false,
};

export const infoGuestSlice = createSlice({
  name: 'infoGuest',
  initialState,
  reducers: {
    setStatementSelection: (state, action: PayloadAction<boolean>) => {
      state.isStatementSelected = action.payload;
    },
    setPassportSelection: (state, action: PayloadAction<boolean>) => {
      state.isPassportSelected = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    setIsAbsent: (state, action: PayloadAction<boolean>) => {
      state.isAbsent = action.payload;
    },
  },
});

export const { setStatementSelection, setPassportSelection, setName, setSurname, setIsAbsent } = infoGuestSlice.actions;

export default infoGuestSlice.reducer;
