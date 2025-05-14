const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  borderRadius: 4,
  //   boxShadow: 24,
  p: 4,
  px: 8,
};
const styles = {
  outerBox: {
    py: 2,
  },
  gridContainer: {
    background: '#C0FBC66B',
    padding: 0,
    margin: 0,
    border: '2px solid #3E844517',
    borderRadius: '5px',
  },
  gridItem: {
    padding: 1.5,
  },
  optionBox: {
    cursor: 'pointer',
    p: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '4px',
    transition: '0.3s',
  },
  optionText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2' },
    fontWeight: 600,
  },
  sectionTitle: {
    fontWeight: 600,
    fontSize: {
      xs: '1.2rem', // ~19px
      sm: '1.4rem', // ~22px
      md: '1.5rem', // ~24px
    },
    color: '#09102B',
  },
  sectionSubtitle: {
    fontSize: {
      xs: '0.9rem', // ~14px
      sm: '1rem', // ~16px
      md: '1.1rem', // ~17.6px
    },
    color: '#77797D',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'end',
    gap: 3,
  },
  addButton: {
    backgroundColor: '#F7F7F7',
    color: '#09102B',
    boxShadow: '1px 2px 3px 0px #4676FB69', // Custom red shadow
    '&:hover': {
      boxShadow: '1px 2px 3px 0px #4676FB69', // On hover
      backgroundColor: '#F7F7F7',
      color: '#09102B',
    },
  },
};
export { styles, modalStyle };
