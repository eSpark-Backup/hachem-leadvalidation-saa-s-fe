import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authSlice from './slices/auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // specify which reducers you want to persist
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
