import { configureStore } from '@reduxjs/toolkit';
import updateProcessReducer from './reducers';

export const store = configureStore({
  reducer: {
    updateProcess: updateProcessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;