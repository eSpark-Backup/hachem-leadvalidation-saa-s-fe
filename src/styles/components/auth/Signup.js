const styles = {
  container: {
    maxWidth: { xs: '420px', sm: '482px', md: '480px', lg: '572px' },
    minHeight: { xs: '350px', lg: '428px' },
    maxHeight: { xs: '90%', lg: '428px' },
    py: { xs: 4.2, sm: 4.2, md: 4.2, lg: 1 },
    px: { xs: 2.5, md: 2 },
    justifyContent: { lg: 'center' },
    alignItems: 'center',
    variant: 'authStack',
    direction: 'column',
    useFlexGap: true,
    spacing: 2,
  },
  form: {
    width: '100%',
    display: 'flex',
    maxWidth: '380px',
    flexDirection: 'column',
    gap: 4,
  },
  icon: {
    width: { xs: '28px', md: 'auto' },
    height: 'auto',
  },
};

export { styles };
