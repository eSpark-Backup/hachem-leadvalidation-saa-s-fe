import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.5,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E0E7FF',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const PaymentFormSwitch = ({ label, checked, onChange }) => {
  return (
    <Box display="flex" alignItems="flex-start" gap={1}>
      <IOSSwitch checked={checked} onChange={onChange} sx={{ mt: '3px' }} />
      <Box display={'flex'} flexDirection={'column'} gap={0.2} px={0.5}>
        <Typography
          sx={{ fontSize: '14px', fontWeight: 600, color: '#1E293B' }}
        >
          {label?.title}
        </Typography>
        <Typography
          sx={{ fontSize: '14px', fontWeight: 400, color: '#475569' }}
        >
          {label?.text}
        </Typography>
      </Box>
    </Box>
  );
};

PaymentFormSwitch.propTypes = {
  label: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentFormSwitch;
