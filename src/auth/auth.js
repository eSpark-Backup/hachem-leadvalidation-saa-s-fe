// src/auth/auth.js
export const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // simulate token check
};
