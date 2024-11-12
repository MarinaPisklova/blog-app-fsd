import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getScroll = (state: StateSchema) => state.scroll.scroll;

export const [useScrollByPath, getScrollByPath] = buildSelector(
  createSelector(
    getScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
  ),
);
