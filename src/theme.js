'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/inter';

let theme = createTheme({
  typography: {
    fontFamily: ['Gilroy', 'inter', 'poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '40px',
      fontWeight: 700,
      fontFamily: 'Inter',
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
    body1: {},
    body2: {
      fontSize: '31px',
      fontWeight: 700,
      fontFamily: 'Inter',
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
          props: { variant: 'loginButton' },
          style: {
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            fontFamily: 'Inter',
            textTransform: 'capitalize',
            fontWeight: 600,
            color: '#475467',
            '&:hover': {
              color: '#475467',
              backgroundColor: '#FFFFFF',
            },
          },
        },
        {
          props: { variant: 'signupButton' },
          style: {
            backgroundColor: '#09102B',
            textTransform: 'capitalize',
            fontFamily: 'Inter',
            fontWeight: 600,
            textWrap: 'nowrap',
            borderRadius: '8px',
            color: '#FFFFFF',
            '&:hover': {
              color: '#FFFFFF',
              backgroundColor: '#09102B',
            },
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'inputLabel' },
          style: {
            fontSize: '12px',
            color: '#212121',
            fontWeight: 500,
            fontFamily: 'Inter',
          },
        },
      ],
    },
    MuiStack: {
      variants: [
        {
          props: { variant: 'authStack' },
          style: {
            width: '100%',
            height: 'auto',
            flexWrap: 'wrap',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E0',
            boxShadow: '24px 82px 40px -14px rgba(100, 100, 100, 0.0784)',
          },
        },
      ],
    },
    MuiFormControlLabel: {
      variants: [
        {
          props: { variant: 'authFormControl' },
          style: {
            width: 'auto',
            color: '#616161',
            textDecoration: 'underline',
            '& .MuiCheckbox-root': {
              color: '#E4E4E4',
              '&:hover': {
                backgroundColor: 'transparent',
              },
              '&.Mui-checked': {
                color: 'primary !important',
              },
            },
            '& .MuiFormControlLabel-label': {
              fontSize: '11px',
              fontWeight: 400,
              fontFamily: 'Inter',
              textAlign: 'left',
            },
            '@media (max-width: 400px)': {
              order: { xs: 2, sm: 1 },
              width: '100%',
            },
          },
        },
      ],
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
});
theme = responsiveFontSizes(theme);

export default theme;
