import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FileState {
  statementFile: File | null;
  passportFile: File | null;
}

const initialState: FileState = {
  statementFile: null,
  passportFile: null
};

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setStatementFile: (state, action: PayloadAction<File | null>) => {
      state.statementFile = action.payload;
    },
    setPassportFile: (state, action: PayloadAction<File | null>) => {
      state.passportFile = action.payload;
    }
  }
});

export const { setStatementFile, setPassportFile } = fileSlice.actions;
export default fileSlice.reducer;