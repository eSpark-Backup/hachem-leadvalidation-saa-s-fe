const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    maxWidth: '380px',
    flexDirection: 'column',
    gap: 3,
  },
  stack: {
    maxWidth: { xs: '420px', sm: '482px', md: '480px', lg: '572px' },
    minHeight: { xs: '360px', lg: '420px' },
    maxHeight: { xs: '90%', lg: '420px' },
    py: { xs: 4.2, lg: 1 },
    px: { xs: 2.5, md: 2 },
    justifyContent: 'center',
    alignItems: 'center',
    variant: 'authStack',
    direction: 'column',
    useFlexGap: true,
    spacing: 2,
  },
  feildsBox: { display: 'flex', flexDirection: 'column' },
  iconButton: { mr: -1.5 },
};

export { styles };
