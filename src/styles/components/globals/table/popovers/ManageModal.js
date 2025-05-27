const boxContainerSyles = {
  backgroundColor: ' #FFFFFF',
  display: 'inline-block',
  textAlign: 'center',
  padding: '37px 39px 29px',
  width: '100%',

  '@media(max-width:400px)': {
    padding: '34px 22px 29px',
  },
};

const manageModalPaperPropsStyles = {
  border: '2px solid rgba(0, 0, 0, 0.37)',
  boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.23)',
  borderRadius: '14px',
};

const imageBoxStyles = {
  width: '145px',
  height: '145px',
  margin: '0px auto 6px',
  borderRadius: '50%',

  '@media(max-width:400px)': {
    width: '125px',
    height: '125px',
  },
};

const imageStyles = {
  borderRadius: '50%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const itemNameStyles = {
  color: '#212332',
  fontSize: '28px !important',
  lineHeight: '34px !important',
  fontWeight: 600,
};

const itemIdStyles = {
  color: '#212332',
  fontSize: '20px !important',
  lineHeight: '25px !important',
  fontWeight: 600,
};

const contactDetailsBoxStyles = {
  gap: '23px',

  '@media(max-width:400px)': {
    gap: '19px',
  },
};

const iconStyles = {
  marginRight: '27px',

  '@media(max-width: 400px)': {
    marginRight: '17px',
  },
};

const detailStyles = {
  color: '#09102B',
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 500,

  '@media(max-width:400px)': {
    fontSize: '15px',
  },
};

const actionButtonStackStyles = {
  marginTop: '30px',
  gap: '5px',
  justifyContent: 'center',
  flexDirection: 'row',
};

const actionButtonStyles = {
  padding: '10px 21px',
  boxShadow: '1px 2px 3px rgba(70, 118, 251, 0.41)',
  borderRadius: '7px',
  color: ' #FFFFFF',
  fontWeight: 600,
  fontSize: '13px',
  lineHeight: '16px',
  minWidth: 'auto',
};

const rejectButtonStyles = {
  ...actionButtonStyles,
  backgroundColor: '#FF4343',
  border: '1px solid #FF4343',

  '&:hover': {
    backgroundColor: 'rgba(255, 67, 67, 0.8)',
  },
};

const acceptButtonStyles = {
  ...actionButtonStyles,
  backgroundColor: '#54d14d',
  border: '1px solid #54D14D',

  '&:hover': {
    backgroundColor: 'rgba(84, 209, 77, 0.8)',
  },
};

const assignButtonStyles = {
  ...actionButtonStyles,
  backgroundColor: ' #2268d1',
  border: '1px solid #2268D1',

  '&:hover': {
    backgroundColor: 'rgba(34, 104, 209, 0.8)',
  },
};

export {
  boxContainerSyles,
  manageModalPaperPropsStyles,
  imageBoxStyles,
  imageStyles,
  itemNameStyles,
  itemIdStyles,
  contactDetailsBoxStyles,
  iconStyles,
  detailStyles,
  actionButtonStackStyles,
  rejectButtonStyles,
  acceptButtonStyles,
  assignButtonStyles,
};
