import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const DropdownButton = ({ onClick, label }) => (
  <Button sx={{ color: '#4A5154', background: '#F5F6F7' }} onClick={onClick}>
    <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>{label}</Typography>
    <KeyboardArrowDown />
  </Button>
);
DropdownButton.propTypes = {
  onClick: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  sx: PropTypes.any,
};

export default DropdownButton;
