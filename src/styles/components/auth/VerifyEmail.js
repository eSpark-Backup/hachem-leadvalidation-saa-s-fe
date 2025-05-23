const styles = {
  formBox: {
    width: '100%',
    display: 'flex',
    maxWidth: '380px',
    flexDirection: 'column',
    gap: 4,
  },
  otpWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pb: 2,
  },
  outerStack: {
    maxWidth: { xs: '420px', sm: '482px', md: '480px', lg: '572px' },
    minHeight: { xs: '350px', lg: '467px' },
    maxHeight: { xs: '90%', lg: '467px' },
    py: { xs: 4.2, sm: 4.2, md: 4.2, lg: 1 },
    px: { xs: 2.5, md: 2 },
    justifyContent: { lg: 'center' },
    alignItems: 'center',
    variant: 'authStack',
    direction: 'column',
    useFlexGap: true,
    spacing: 2,
  },
};

export { styles };
