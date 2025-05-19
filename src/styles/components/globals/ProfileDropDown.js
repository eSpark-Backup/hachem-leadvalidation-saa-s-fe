const containerBoxStyles = {
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: { xs: 1, sm: 2 },
  flexWrap: 'wrap',
};

const innerRowStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 2,
  flexWrap: 'wrap',
};

const textFieldStyles = {
  bgcolor: '#fff',
  '& .MuiOutlinedInput-root': {
    height: '48px',
    borderRadius: '5px',
    border: '1px solid gray',
    backgroundColor: '#fff',
    paddingLeft: '8px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& input::placeholder': {
    fontSize: '14px',
  },
};

const dropdownBoxStyles = (lgUp) => ({
  position: 'relative',
  height: '48px',
  borderRadius: '5px',
  border: lgUp ? '1px solid gray' : 'none',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  px: 1.5,
  justifyContent: 'space-between',
  cursor: 'pointer',
});

const clickableBoxStyles = {
  bgcolor: '#fff',
  '& .MuiOutlinedInput-root': {
    height: '48px',
    borderRadius: '5px',
    border: '1px solid gray',
    backgroundColor: '#fff',
    paddingLeft: '8px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& input::placeholder': {
    fontSize: '14px',
  },
};

const userInfoBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

const dropdownMenuStyles = {
  position: 'absolute',
  top: '100%',
  minWidth: '150px',
  left: 0,
  right: 0,
  border: '1px solid #ccc',
  borderRadius: '5px',
  mt: 1,
  backgroundColor: '#fff',
  zIndex: 10,
};

const menuItemStyles = {
  fontSize: { xs: '14px', sm: '15px', md: '16px' },
  lineHeight: { xs: '20px', sm: '22px', md: '24px' },
  color: '#373B5C',
  fontWeight: 500,
};

const profileImgStyles = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
};

const welcomdeTextStyles = { fontSize: '12px', color: '#373B5C' };

const profileNameStyles = {
  fontSize: { xs: '14px', sm: '15px', md: '16px' },
  color: '#373B5C',
  fontWeight: 500,
};

export {
  clickableBoxStyles,
  profileNameStyles,
  welcomdeTextStyles,
  userInfoBoxStyles,
  dropdownMenuStyles,
  menuItemStyles,
  dropdownBoxStyles,
  profileImgStyles,
  innerRowStyles,
  containerBoxStyles,
  textFieldStyles,
};
