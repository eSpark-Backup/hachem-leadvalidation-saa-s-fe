import { Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
const HeaderActions = ({ title, buttons }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '25.18px',
          color: '#1B2559',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          gap: '5px',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            sx={{
              background: '#fff',
              color: '#000',
              gap: '5px',
              fontWeight: 400,
              fontSize: '9.75px',
            }}
            onClick={btn.onClick}
          >
            {btn.title}
            <img src={btn.icon} alt={btn.title} />
          </Button>
        ))}
      </Box>
    </Box>
  );
};

HeaderActions.propTypes = {
  title: PropTypes.func.isRequired,
  buttons: PropTypes.bool.isRequired,
};
export default HeaderActions;
