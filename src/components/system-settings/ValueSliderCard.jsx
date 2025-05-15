import { useMemo } from 'react';
import {
  Card,
  Typography,
  Slider,
  Box,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  cardStyles,
  containerBoxStyles,
  headerBoxStyles,
  labelBoxStyles,
  labelTypographyStyles,
  sliderStyles,
  sliderUnitTextStyles,
  sliderValueBoxBase,
  sliderValueTextStyles,
  valueLabelStyles,
} from '../../styles/components/system-settings/ValueSliderCard';

const ValueSliderCard = ({
  label,
  tooltip,
  min,
  max,
  unit,
  value = 33,
  onChange,
  startTitle,
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
          flexDirection={isMobile ? 'column' : isTablet ? 'column' : 'row'}
        >
          <Box
            flexGrow={1}
            sx={{
              pr: isTablet ? '2%' : '3%',
            }}
          >
            <Slider
              value={value}
              defaultValue={value}
              onChange={(e, newVal) => onChange(newVal)}
              min={min}
              max={max}
              aria-label={`${label} slider`}
              sx={sliderStyles}
            />
            <Box display="flex" justifyContent="space-between">
              <Typography sx={valueLabelStyles}>
                {startTitle ? startTitle : min}
              </Typography>
              <Typography sx={valueLabelStyles}>
                {endTitle ? endTitle : max}
              </Typography>
            </Box>
          </Box>
          {unit && (
            <Box
              mt={isMobile ? 1 : 0}
              ml={isMobile ? 0 : 1}
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
  label: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
  tooltip: PropTypes.any,
  min: PropTypes.any,
  max: PropTypes.any,
  unit: PropTypes.any,
  startTitle: PropTypes.any,
  endTitle: PropTypes.any,
};

export default ValueSliderCard;
