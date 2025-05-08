// redux/store.js

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authSlice from './slices/auth/authSlice';

/**
 * Configuration for redux-persist.
 * Defines the storage method and which slices of state to persist.
 */
const persistConfig = {
  key: 'root', // Key for root-level persistence
  storage, // Default localStorage
  whitelist: ['auth'], // Only persist the 'auth' reducer
};

// Combine reducers and apply persistence wrapper
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authSlice,
  })
);

/**
 * Redux store configured with persisted reducers.
 */
const store = configureStore({
  reducer: persistedReducer,
});

/**
 * Redux Persistor linked to the store.
 * Used to persist and rehydrate the state.
 */
const persistor = persistStore(store);

export { store, persistor };
