// src/store/guestFileState.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
  isEnabled: boolean;
  showInfoGuest: boolean;
}

const initialState: PageState = {
  isEnabled: true,
  showInfoGuest: false,
};

const pageStateSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
      setPageState: (state, action: PayloadAction<PageState>) => {
        return action.payload;
    }
  }
});

export const { setPageState } = pageStateSlice.actions;
export default pageStateSlice.reducer;
