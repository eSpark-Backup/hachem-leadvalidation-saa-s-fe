import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import {
  iosSwitchStyles,
  styles,
} from '../../styles/components/payments/PaymentFormSwitch';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => iosSwitchStyles(theme));

const PaymentFormSwitch = ({ label, checked, onChange }) => (
  <Box sx={styles.container}>
    <IOSSwitch checked={checked} onChange={onChange} sx={styles.switch} />
    <Box sx={styles.labelBox}>
      <Typography sx={styles.title}>{label?.title}</Typography>
      <Typography sx={styles.text}>{label?.text}</Typography>
    </Box>
  </Box>
);

PaymentFormSwitch.propTypes = {
  label: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentFormSwitch;
