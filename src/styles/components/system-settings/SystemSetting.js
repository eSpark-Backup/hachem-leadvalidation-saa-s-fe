const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  borderRadius: 4,
  p: 4,
  px: 8,
};

const styles = {
  modalTitle: {
    fontWeight: 500,
    fontSize: { xs: '24px', sm: '30px', md: '36px' },
    textAlign: 'center',
    mb: 3,
  },
  modalSubtitle: {
    fontWeight: 500,
    fontSize: { xs: '16px', sm: '18px', md: '21px' },
    mb: 1,
  },
  modalTextField: {
    mb: 3,
    border: '1.43px solid #00000047',
    borderRadius: '10px',
  },
  modalMultilineTextField: {
    border: '1.43px solid #00000047',
    borderRadius: '10px',
  },
  modalButtonStack: {
    direction: 'row',
    justifyContent: 'flex-end',
    spacing: 2,
    mt: 3,
  },
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
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.5rem',
    },
    color: '#09102B',
  },
  sectionSubtitle: {
    fontSize: {
      xs: '0.9rem',
      sm: '1rem',
      md: '1.1rem',
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
    boxShadow: '1px 2px 3px 0px #4676FB69',
    '&:hover': {
      boxShadow: '1px 2px 3px 0px #4676FB69',
      backgroundColor: '#F7F7F7',
      color: '#09102B',
    },
  },
  resetButton: {
    background: '#fff',
    border: '1px solid #77797D',
    color: ' #77797D',
    '&:hover': {
      background: '#fff',
      border: '1px solid #77797D',
      color: ' #77797D',
    },
  },
};

export { styles, modalStyle };
