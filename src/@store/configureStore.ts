import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { cryptoApi } from './crypto/cryptoApi';

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    // [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
});

export default { store };
