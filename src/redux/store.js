// redux/store.js

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authSlice from './slices/auth/authSlice';
import { apiSlice } from '../api/apiSlice';

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
const rootReducer = combineReducers({
  auth: authSlice,
  [apiSlice.reducerPath]: apiSlice.reducer, // Include RTK Query reducer here
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Redux store configured with persisted reducers.
 */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

/**
 * Redux Persistor linked to the store.
 * Used to persist and rehydrate the state.
 */
const persistor = persistStore(store);

export { store, persistor };
