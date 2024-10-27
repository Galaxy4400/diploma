import { createSelector } from '@reduxjs/toolkit';

export const selectApp = (state: RootState) => state.app;

export const selectFilter = createSelector(selectApp, (app) => app.filter);
