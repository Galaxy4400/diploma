import { store } from './store.root';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
