const boxContainerSyles = {
  backgroundColor: '#FFFFFF',
  border: '2px solid rgba(0, 0, 0, 0.37)',
  boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.23)',
  borderRadius: '24px',
  padding: '12px 65px',
  display: 'inline-block',
  textAlign: 'center',
};

const headingStyles = {
  fontSize: '23px !important',
  lineHeight: '37px !important',
  color: '#FF4343',
  fontWeight: 700,
};

const bodyStyles = {
  fontSize: '14px !important',
  lineHeight: '17px !important',
  color: '#3A3A49',
  fontWeight: 500,
};

const actionButtonStyles = {
  marginTop: '7px',
  backgroundColor: '#136BE5',
  boxShadow: '1px 2px 3px rgba(70, 118, 251, 0.41)',
  borderRadius: '5px',
  minWidth: '71px',
  padding: '6px 0px',
  color: '#FFFFFF',
  fontSize: '13px',
  lineHeight: '15px',

  '&:hover': {
    backgroundColor: 'rgba(19, 107, 229, 0.8)',
  },
};

export { boxContainerSyles, headingStyles, bodyStyles, actionButtonStyles };
