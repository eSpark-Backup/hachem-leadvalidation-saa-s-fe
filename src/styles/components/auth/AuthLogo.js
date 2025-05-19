const AuthLogoStyles = (pathname, splash) => ({
  width: pathname === splash ? '55%' : '35%',
  maxWidth: pathname === splash ? '512px' : '360px',
  height: 'auto',
  position: 'relative',
  aspectRatio: pathname === splash ? '512 / 145' : '360 / 100',
  mx: { xs: 2, sm: 0 },
  mt: {
    xs: pathname === splash ? 'calc(-100vh * 0.15)' : 'auto',
    sm: `calc(-100vh * ${pathname === splash ? 0.19 : 0.1})`,
  },
  mb: {
    xs: pathname === splash ? 0 : '6%',
    sm: 0,
  },
});
export default AuthLogoStyles;
