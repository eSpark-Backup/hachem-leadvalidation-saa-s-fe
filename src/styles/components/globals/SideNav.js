const backDropStyles = { backgroundColor: 'rgba(0, 0, 0, 0.04)' };
const drawerPropsStyles = {
  bgcolor: '#FFF',
  color: 'red',
  p: 2,
  boxShadow: '4px 0 10px rgba(0,0,0,0.2)',
  borderTopRightRadius: '43px',
  display: 'flex',
  flexDirection: 'column',

  width: 280,
  minHeight: '290px',
  overflowX: 'hidden',
  overflowY: 'hidden',
};
const mobileDrawerStyles = { zIndex: (theme) => theme?.zIndex?.appBar + 100 };

export { backDropStyles, drawerPropsStyles, mobileDrawerStyles };
