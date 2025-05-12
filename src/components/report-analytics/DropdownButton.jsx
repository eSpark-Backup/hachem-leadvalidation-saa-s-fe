import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const DropdownButton = React.forwardRef(({ onClick, label }, ref) => (
  <Button
    ref={ref}
    onClick={onClick}
    sx={{ color: '#4A5154', background: '#F5F6F7' }}
    endIcon={<KeyboardArrowDown />}
  >
    <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>{label}</Typography>
  </Button>
));

DropdownButton.displayName = 'DropdownButton';

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
};

export default DropdownButton;
