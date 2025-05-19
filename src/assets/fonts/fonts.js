// src/theme/fonts.js
import { GlobalStyles } from '@mui/material';

const fontFaces = `
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Thin'), url('/fonts/Gilroy-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Thin Italic'), url('/fonts/Gilroy-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy UltraLight'), url('/fonts/Gilroy-UltraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy UltraLight Italic'), url('/fonts/Gilroy-UltraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Light'), url('/fonts/Gilroy-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Light Italic'), url('/fonts/Gilroy-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Regular'), url('/fonts/Gilroy-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Regular Italic'), url('/fonts/Gilroy-RegularItalic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Medium'), url('/fonts/Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Medium Italic'), url('/fonts/Gilroy-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Semibold'), url('/fonts/Gilroy-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Semibold Italic'), url('/fonts/Gilroy-SemiboldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Bold'), url('/fonts/Gilroy-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Bold Italic'), url('/fonts/Gilroy-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Extrabold'), url('/fonts/Gilroy-Extrabold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Extrabold Italic'), url('/fonts/Gilroy-ExtraboldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Heavy'), url('/fonts/Gilroy-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Heavy Italic'), url('/fonts/Gilroy-HeavyItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Black'), url('/fonts/Gilroy-Black.ttf') format('truetype');
    font-weight: 950;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Black Italic'), url('/fonts/Gilroy-BlackItalic.ttf') format('truetype');
    font-weight: 950;
    font-style: italic;
    font-display: swap;
  }
`;

const CustomFontStyles = () => <GlobalStyles styles={{ __html: fontFaces }} />;

export { CustomFontStyles };
