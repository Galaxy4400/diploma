import { createSelector } from '@reduxjs/toolkit';

export const selectApp = createSelector(
	(state: RootState) => state.app,
	(app) => app,
);

export const selectFilter = createSelector(selectApp, (app) => app.filter);
