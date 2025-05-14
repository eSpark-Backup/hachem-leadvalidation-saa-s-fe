import { useState } from 'react';
import { Box, Paper, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { CustomSwitch } from './CustomSwitch';
import {
  DescriptionStyles,
  PaperStyles,
  TitleStyles,
} from '../../styles/components/system-settings/SettingToggleCard';

const SettingToggleCard = ({
  title,
  description,
  icon,
  initialValue = false,
  onToggle,
}) => {
  const [enabled, setEnabled] = useState(initialValue);

  const handleToggle = (event) => {
    const checked = event.target.checked;
    setEnabled(checked);
    if (onToggle) onToggle(checked);
  };

  return (
    <Paper elevation={0} sx={PaperStyles}>
      <Stack direction="row" spacing={2} alignItems="center">
        <img src={icon}></img>
        <Box>
          <Typography sx={TitleStyles}>{title}</Typography>
          <Typography sx={DescriptionStyles}>{description}</Typography>
        </Box>
      </Stack>
      <CustomSwitch checked={enabled} onChange={handleToggle} color="primary" />
    </Paper>
  );
};

SettingToggleCard.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any,
  icon: PropTypes.any,
  initialValue: PropTypes.any,
  onToggle: PropTypes.any,
};

export default SettingToggleCard;
