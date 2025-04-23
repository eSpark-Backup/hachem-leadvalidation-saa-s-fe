const errorModalOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

const errorModalContentStyles = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '10px',
  maxWidth: '600px',
  width: '90%',
  border: '2px solid red',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const errorModalHeadingStyles = { fontSize: '20px', color: 'red' };

const errorModalTextStyles = { fontSize: '14px', color: 'black' };

const errorModalDetailsStyles = { fontSize: '12px', color: 'gray' };

export {
  errorModalOverlayStyles,
  errorModalContentStyles,
  errorModalHeadingStyles,
  errorModalTextStyles,
  errorModalDetailsStyles,
};
