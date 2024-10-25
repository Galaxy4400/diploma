import { createSelector } from '@reduxjs/toolkit';

export const selectAuth = createSelector(
	(state: RootState) => state.auth,
	(auth) => auth,
);

export const selectAuthId = createSelector(selectAuth, (auth) => auth.id);
