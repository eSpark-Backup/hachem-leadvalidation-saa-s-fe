import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import {
  ButtonStyles,
  ButtonTitleStyles,
} from '../../styles/components/report-analytics/DropdownButton';
const DropdownButton = React.forwardRef(({ onClick, label }, ref) => (
  <Button
    ref={ref}
    onClick={onClick}
    sx={ButtonStyles}
    endIcon={<KeyboardArrowDown />}
  >
    <Typography sx={ButtonTitleStyles}>{label}</Typography>
  </Button>
));

DropdownButton.displayName = 'DropdownButton';

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
};

export default DropdownButton;
