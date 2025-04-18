//  route protection
export const isAuthenticated = () => {
  return !!localStorage?.getItem('token');
};
