import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  statementImage: string | null;
  passportImage: string | null;
}

const initialState: ImageState = {
  statementImage: null,
  passportImage: null
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setStatementImage: (state, action: PayloadAction<string | null>) => {
      state.statementImage = action.payload;
    },
    setPassportImage: (state, action: PayloadAction<string | null>) => {
      state.passportImage = action.payload;
    }
  }
});

export const { setStatementImage, setPassportImage } = imageSlice.actions;
export default imageSlice.reducer;
