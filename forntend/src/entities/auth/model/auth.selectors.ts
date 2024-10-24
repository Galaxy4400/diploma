import { RootState } from '@/app/store';

export const selectAuth = ({ auth }: RootState) => auth;

export const selectAuthId = ({ auth }: RootState) => auth.id;
