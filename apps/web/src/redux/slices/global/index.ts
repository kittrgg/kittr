import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    fallbackLoader: false,
  },
  reducers: {
    setFallbackLoader: (state, action: { payload: boolean }) => {
      state.fallbackLoader = action.payload;
    },
  },
});

export const { setFallbackLoader } = globalSlice.actions;
