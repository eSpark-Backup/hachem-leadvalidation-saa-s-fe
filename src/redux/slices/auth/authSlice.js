// redux/slices/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial state for the auth slice.
 * @typedef {Object} AuthState
 * @property {boolean} loggedInState - Indicates if the user is logged in.
 * @property {Object|null} user - User information (can be null when logged out).
 * @property {Object|null} userProfile - Detailed profile data for the user.
 */
const initialState = {
  loggedInState: false,
  user: null,
  userProfile: null,
};

/**
 * Redux slice for authentication state.
 * Handles user login, logout, and profile updates.
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Sets the user as logged in and stores the user object.
     * @param {AuthState} state - Current auth state.
     * @param {Object} action - Redux action with user payload.
     */
    setLoggedIn: (state, action) => {
      state.loggedInState = true;
      state.user = action.payload;
    },

    /**
     * Sets the user as logged out and clears user information.
     * @param {AuthState} state - Current auth state.
     */
    setLoggedOut: (state) => {
      state.loggedInState = false;
      state.user = null;
    },

    /**
     * Updates the user's profile data.
     * @param {AuthState} state - Current auth state.
     * @param {Object} action - Redux action with profile payload.
     */
    setUserProfile: (state, { payload }) => {
      state.userProfile = payload;
    },
  },
});

// Export actions for use in components or thunks
export const { setLoggedIn, setLoggedOut, setUserProfile } = authSlice.actions;

// Export the reducer to be included in the store
export default authSlice.reducer;
