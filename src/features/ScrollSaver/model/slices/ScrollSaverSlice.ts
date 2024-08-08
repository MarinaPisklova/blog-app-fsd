import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaverSchema } from '../types/ScrollSaverSchema';

type ScrollPosition = { path: string; position: number };

const initialState: ScrollSaverSchema = {
  scroll: {},
};

export const scrollSaverSlice = createSlice({
  name: 'scrollSaver',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<ScrollPosition>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSaverActions } = scrollSaverSlice;
export const { reducer: scrollSaverReducer } = scrollSaverSlice;
