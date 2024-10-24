import { RootState } from '@/app/store/store.types';

export const selectAuth = ({ auth }: RootState) => auth;

export const selectAuthId = ({ auth }: RootState) => auth.id;
