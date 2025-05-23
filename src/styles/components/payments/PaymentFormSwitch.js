const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1,
  },
  labelBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.2,
    px: 0.5,
    mx: 1,
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1E293B',
  },
  text: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#475569',
  },
  switch: {
    mt: '3px',
  },
};

const iosSwitchStyles = (theme) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.5,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E0E7FF',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
});

export { styles, iosSwitchStyles };
