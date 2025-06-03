'use client';
import {
  createTheme as createTheme_default,
  responsiveFontSizes,
} from '@mui/material/styles';

let theme = createTheme_default({
  palette: {
    color1: {
      main: '#1B2559',
    },
    color2: {
      main: '#15134B',
    },
    color3: {
      main: '#A3AED0',
    },
    color4: {
      main: '#212332',
    },
    color5: {
      main: '#3A3A49',
    },
    color6: {
      main: '#77797D',
    },
    color7: {
      main: '#1E293B',
    },
    color8: {
      main: '#475569',
    },
    color9: {
      main: '#136BE5',
    },
    color10: {
      main: '#94A3B8',
    },
    color11: {
      main: '#E9EDF7',
    },
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#000',
    },
    success: { main: '#54D14D' },
    error: { main: '#FF4343' },
  },
  typography: {
    fontFamily: ['Gilroy', 'sans-serif'].join(','),
    h1: {
      fontSize: '41px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '31px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '25px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '23px',
      fontWeight: 600,
    },
    h5: {
      fontSize: '18px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '14px',
      fontWeight: 600,
    },
    body1: {},
    body2: {
      fontSize: '31px',
      fontWeight: 700,
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
        {
          props: { variant: 'formSubmissionButton' },
          style: {
            backgroundColor: '#54D14D',
            textTransform: 'capitalize',
            fontWeight: 700,
            textWrap: 'nowrap',
            borderRadius: '1234px',
            color: '#FFFFFF',
            '&:hover': {
              color: '#FFFFFF',
              backgroundColor: '#54D14D',
            },
            '&.Mui-disabled': {
              backgroundColor: '#54D14D7D',
              color: '#FFFFFF',
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
