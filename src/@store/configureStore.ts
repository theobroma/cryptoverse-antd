import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import { cryptoApi } from './crypto/cryptoApi';

const logger = createLogger({
  collapsed: true,
});

const reducers = {
  // [coinsSlice.name]: coinsReducer,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  // [uiSlice.name]: uiReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

const rootReducer: Reducer<RootState> = (state, action) => {
  //   if (action.type === RESET_STATE_ACTION_TYPE) {
  //     state = {} as RootState;
  //   }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([logger, cryptoApi.middleware]),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

// eslint-disable-next-line import/no-unused-modules
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
