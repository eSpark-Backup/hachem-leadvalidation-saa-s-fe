import { Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import {
  containerStyle,
  buttonsContainerStyle,
  titleStyle,
  buttonStyle,
} from '../../styles/components/report-analytics/HeaderActions';

const HeaderActions = ({ title, buttons }) => {
  return (
    <Box sx={containerStyle}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Box sx={buttonsContainerStyle}>
        {buttons?.map((btn, idx) => (
          <Button key={idx} sx={buttonStyle} onClick={btn.onClick}>
            {btn.title}
            <img src={btn.icon} alt={btn.title} />
          </Button>
        ))}
      </Box>
    </Box>
  );
};

HeaderActions.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};

export default HeaderActions;
