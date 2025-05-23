import { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Typography,
  Slider,
  Box,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import {
  cardStyles,
  containerBoxStyles,
  headerBoxStyles,
  labelBoxStyles,
  labelTypographyStyles,
  SliderBoxStyles,
  sliderStyles,
  sliderUnitTextStyles,
  sliderValueBoxBase,
  sliderValueTextStyles,
  valueLabelStyles,
} from '../../styles/components/system-settings/ValueSliderCard';

import { VALUE_SLIDER_TEXT } from '../../constants/components/system-setting/ValueSliderCard';

const ValueSliderCard = ({
  label,
  tooltip,
  min,
  max,
  unit,
  value,
  onChange,
  startTitle,
  defaultValue,
  endTitle,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const formattedUnit = useMemo(() => ` ${unit}`, [unit]);

  return (
    <Card sx={cardStyles}>
      <Box sx={containerBoxStyles}>
        <Box sx={headerBoxStyles}>
          <Box sx={labelBoxStyles}>
            <Typography sx={labelTypographyStyles}>{label}</Typography>
            <Tooltip title={tooltip} arrow>
              <InfoOutlinedIcon fontSize="small" color="action" />
            </Tooltip>
          </Box>
        </Box>

        <Box
          mt={2}
          display="flex"
          flexDirection={isMobile || isTablet ? 'column' : 'row'}
        >
          <Box flexGrow={1} sx={SliderBoxStyles(isTablet)}>
            <Slider
              value={typeof value === 'number' ? value : undefined}
              defaultValue={defaultValue}
              onChange={(e, newVal) => onChange?.(newVal)}
              min={min}
              max={max}
              aria-label={`${label} ${VALUE_SLIDER_TEXT.slider}`}
              sx={sliderStyles}
            />
            <Box display="flex" justifyContent="space-between">
              <Typography sx={valueLabelStyles}>{startTitle ?? min}</Typography>
              <Typography sx={valueLabelStyles}>{endTitle ?? max}</Typography>
            </Box>
          </Box>

          {unit && (
            <Box
              mt={isMobile ? 1 : 0}
              mx={isMobile ? 0 : 1}
              sx={sliderValueBoxBase}
            >
              <Typography sx={sliderValueTextStyles}>{value}</Typography>
              <Typography sx={sliderUnitTextStyles}>{formattedUnit}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
};

ValueSliderCard.propTypes = {
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  unit: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  startTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  endTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.number,
};

export default ValueSliderCard;
