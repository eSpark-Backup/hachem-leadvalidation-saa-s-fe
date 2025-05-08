import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CircularProgressWithLabel = ({ value, color, isPerAllowed }) => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          width: 100,
          height: 100,
          backgroundColor: '#F2DDD8',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress
          variant="determinate"
          value={value}
          size={100}
          thickness={5}
          sx={{
            color: color || '#fff',
            position: 'relative',
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '12px solid #fff', // Background track color
              zIndex: -1,
            },
          }}
        />

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ color: 'primary', fontSize: 13 }}
          >
            {`${value}${isPerAllowed ? '%' : ''}`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isPerAllowed: PropTypes.bool,
};

export default CircularProgressWithLabel;
