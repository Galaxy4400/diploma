import { createSelector } from '@reduxjs/toolkit';

export const selectAuth = (state: RootState) => state.auth;

export const selectAuthId = createSelector(selectAuth, (auth) => auth.id);
