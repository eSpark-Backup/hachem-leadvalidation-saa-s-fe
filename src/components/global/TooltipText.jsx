import { Zoom } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const TooltipText = ({
  text,
  typographyStyle,
  maxLength = 13,
  variant = 'secondary',
}) => {
  const isTooltipVisible = text?.length > maxLength;
  return (
    <Tooltip
      title={isTooltipVisible ? text : ''}
      slots={{
        transition: Zoom,
      }}
    >
      <Typography sx={typographyStyle} variant={variant}>
        {`${text ? text?.toString()?.slice(0, maxLength) : ''}${isTooltipVisible ? '...' : ''}`}
      </Typography>
    </Tooltip>
  );
};

TooltipText.propTypes = {
  text: PropTypes.any,
  typographyStyle: PropTypes.object,
  maxLength: PropTypes.number,
  variant: PropTypes.string,
};

export default TooltipText;
