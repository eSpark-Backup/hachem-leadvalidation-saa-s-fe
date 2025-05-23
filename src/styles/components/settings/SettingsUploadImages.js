const uploadBoxStyles = {
  border: '2px dashed #CBD5E1',
  gap: '10px',
  borderRadius: '32px',
  padding: 3,
  textAlign: 'center',
  color: '#666',
  cursor: 'pointer',
  transition: '0.3s',
  minWidth: '70%',
  '&:hover': {
    backgroundColor: '#f9f9f9',
    borderColor: '#CBD5E1',
  },
};

const clearIconStyles = {
  position: 'absolute',
  bottom: -10,
  right: -10,
  bgcolor: '#fff',
  border: '1px solid #ccc',
  zIndex: 1,
  '&:hover': {
    backgroundColor: '#fff',
  },
};

const styles = {
  title: {
    fontWeight: 700,
    color: '#1E293B',
    fontSize: '14px',
    mb: { xs: 2, sm: 1 },
  },
  avatar: {
    width: 64,
    height: 64,
    mx: 'auto',
  },
  dropzone: {
    border: '2px dashed #CBD5E1',
    gap: '10px',
    borderRadius: '32px',
    padding: 3,
    textAlign: 'center',
    color: '#666',
    cursor: 'pointer',
    transition: '0.3s',
    width: '100%',
    height: { xs: 'auto', sm: '170px' },
    '&:hover': {
      backgroundColor: '#f9f9f9',
      borderColor: '#CBD5E1',
    },
  },
  uploadTitleText: {
    color: '#136BE5',
    fontWeight: 700,
    mr: 1,
  },
  uploadDescriptionText: {
    color: '#475569',
    fontWeight: 500,
  },
  supportedFormatText: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#94A3B8',
  },
};

export { uploadBoxStyles, clearIconStyles, styles };
