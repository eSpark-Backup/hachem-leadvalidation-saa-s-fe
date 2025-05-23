const styles = {
  formContainer: (maxWidth, border, padding) => ({
    width: '100%',
    height: 'auto',
    mx: 'auto',
    maxWidth: maxWidth || '580px',
    border: border || '1px solid #E2E8F0',
    backgroundColor: '#ffffff',
    borderRadius: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    p: padding || 3,
  }),
  switchesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  radioGroupWrapper: {
    mt: 2,
  },
  radioItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.2,
  },
  radioCircle: {
    width: '18px',
    height: '18px',
    border: '5px solid #1B2559',
    borderRadius: '100%',
    cursor: 'pointer',
  },
  radioText: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1E293B',
  },
};

export { styles };
