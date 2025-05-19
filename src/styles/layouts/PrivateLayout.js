import { styled } from '@mui/material';
import {
  BODY_WIDTH,
  SIDE_NAV_WIDTH,
} from '../../constants/components/globals/SideBar';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  minHeight: '100vh',
  backgroundColor: '#F4F7FE',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const LayoutBodyRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: BODY_WIDTH,
  },
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
});

const privateLayoutBoxStyles = {
  '@media (max-width: 400px)': {
    px: '20px',
  },
  p: 2,
  overflowY: 'auto',
};

const privateLayoutOutletBoxStyles = {
  p: { xs: 0, sm: 2 },
  overflowY: 'auto',
};

export {
  privateLayoutBoxStyles,
  privateLayoutOutletBoxStyles,
  LayoutRoot,
  LayoutBodyRoot,
  LayoutContainer,
};
