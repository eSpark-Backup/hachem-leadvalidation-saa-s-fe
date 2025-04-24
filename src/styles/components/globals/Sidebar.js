const logoContainerStyles = {
  p: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const menuWrapperStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: 1,
  pt: 2.5,
};

const menuItemStyles = (isSelected) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '5px',
  color: '#77797D',
  gap: '17px',
  py: 1,
  pl: 1,
  pr: 0.5,
  cursor: 'pointer',
  background:
    isSelected === true
      ? 'linear-gradient(92.83deg, #24A956 38.94%, #126D30 133.43%)'
      : 'white',
  height: '45px',
  '&:hover': {
    background: 'linear-gradient(92.83deg, #24A956 38.94%, #126D30 133.43%)',
    color: 'white',
  },
  '&:active': {
    background: 'linear-gradient(92.83deg, #24A956 38.94%, #126D30 133.43%)',
    color: 'white',
  },
});

const menuItemContentStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
};

const logoutBoxStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 1,
  cursor: 'pointer',
  px: 1,
  py: 1,
};

const dialogTitleStyles = {
  color: '#000',
};

const dialogContentStyles = {
  color: '#77797D',
  fontSize: 16,
};
const logoutBtnStyles = { fontSize: '20px' };
const labelStyles = {
  fontSize: '16px',
};
const growBoxSTyles = { flexGrow: 1 };
const logoStyles = { width: '100%', maxWidth: '150px' };
export {
  logoContainerStyles,
  menuWrapperStyles,
  menuItemStyles,
  menuItemContentStyles,
  logoutBoxStyles,
  labelStyles,
  dialogTitleStyles,
  growBoxSTyles,
  dialogContentStyles,
  logoStyles,
  logoutBtnStyles,
};
