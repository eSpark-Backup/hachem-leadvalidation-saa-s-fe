'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B2559',
    },
    secondary: {
      main: '#136BE5',
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
      secondary: '#54D14D',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Gilroy', 'inter', 'poppins', 'sans-serif'].join(','),
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
      color: '#54D14D',
      '&:hover': {
        color: '#404040',
      },
      '&:active': {
        color: '#54D14D',
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
            backgroundColor: '#54D14D',
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
              backgroundColor: '#54D14D',
              color: '#404040',
            },
          },
        },
        {
          props: { variant: 'default' },
          style: {
            backgroundColor: '#54D14D',
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
          color: '#54D14D',
          '&:hover': {
            backgroundColor: '#404040',
            color: '#54D14D',
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
