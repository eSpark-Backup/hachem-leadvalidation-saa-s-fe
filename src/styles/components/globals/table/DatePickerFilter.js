const buttonStyles = {
  border: '0.5px solid #136BE5',
  borderRadius: '3px',
  color: '#4A5154',
  zIndex: 1302,
  padding: '5px 9px',

  '& .MuiButton-endIcon': {
    marginRight: 0,
    marginLeft: '5px',
  },
};

const paperPropsStyles = {
  ml: '-16px',
  zIndex: 1302,
  backgroundColor: 'transparent',
  boxShadow: 'none',
};

const slotsPropsStyles = {
  '&::before': {
    content: '""',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(9, 16, 43, 0.37)',
    backdropFilter: 'blur(1.90861px)',
    zIndex: 1301,
  },

  marginTop: '14px',
};

const pickerLayoutStyles = {
  borderRadius: '14px',
  border: '1px solid #54d14d',

  '& .Mui-selected': {
    backgroundColor: '#54D14D !important',
    color: 'white !important',
  },

  '& .MuiPickersDay-root': {
    color: '#1C1B1F',

    '&:hover': {
      backgroundColor: 'rgba(84, 209, 77, 0.04)',
    },
  },

  '& .MuiDayCalendar-weekDayLabel': {
    color: '#1C1B1F',
  },

  '& .MuiPickersDay-root:not(.Mui-selected)': {
    borderColor: ' #54d14d',
  },
};

const calenderHeaderStyles = {
  color: '#49454F',
};

const calenderActionButtonStyles = {
  '& button': {
    color: '#54d14d',

    '&:hover': {
      backgroundColor: 'rgba(84, 209, 77, 0.04)',
    },
  },
};

const monthYearButtonStyles = {
  color: '#1C1B1F',
  fontWeight: 500,
};

export {
  buttonStyles,
  paperPropsStyles,
  slotsPropsStyles,
  pickerLayoutStyles,
  calenderHeaderStyles,
  calenderActionButtonStyles,
  monthYearButtonStyles,
};
