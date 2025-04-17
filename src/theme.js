'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FEBD17',
    },
    secondary: {
      main: '#404040',
    },
    info: {
      main: '##888888 ',
    },
    background: {
      default: '#ffffff',
    },
    default: {
      main: '#ffffff',
    },
    text: {
      primary: '#404040',
      secondary: '#FEBD17',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '28px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '20px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
    },
    h5: {
      fontSize: '22px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '20px',
    },
    button: {
      textTransform: 'normal',
    },
    link: {
      textDecoration: 'none',
      color: '#FEBD17',
      '&:hover': {
        color: '#404040',
      },
      '&:active': {
        color: '#FEBD17',
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: '#FEBD17',
            color: '#404040',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#404040 ',
              color: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: '#404040 ',
            color: '#ffffff',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#FEBD17',
              color: '#404040',
            },
          },
        },
        {
          props: { variant: 'default' },
          style: {
            backgroundColor: '#FEBD17',
            color: '#404040',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#404040 ',
              color: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #E4E4E4',
            boxShadow: '0px 0px 4px 0px #00000040',
            backgroundColor: '#fff',
            height: '40px',
            color: '#888888',
            '&:hover': {
              border: '1px solid #E4E4E4',
              boxShadow: '0px 0px 4px 0px #00000040',
              backgroundColor: '#fff',
              color: '#888888',
            },
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        variant: 'link',
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#FEBD17',
          '&:hover': {
            backgroundColor: '#404040',
            color: '#FEBD17',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {},
        select: {
          color: 'black',
          alignItems: 'center',
          paddingTop: '25px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1260px !important',
          margin: '0 auto',
        },
      },
    },
  },
});

export default theme;
