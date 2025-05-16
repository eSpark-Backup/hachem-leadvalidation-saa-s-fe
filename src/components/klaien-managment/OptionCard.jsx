import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const OptionCard = ({ data, styles, activeBox, handleClick }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          px: { xs: 1, sm: 2, md: 3 },
          background: '#C0FBC66B',
          padding: 0,
          margin: 0,
          border: '2px solid #3E844517',
          borderRadius: '5px',
        }}
      >
        {data.map((opt) => (
          <Grid item xs={12} sm={6} md={4} key={opt.id} sx={styles.gridItem}>
            <Box
              onClick={() => handleClick(opt.id)}
              sx={{
                ...styles.optionBox,
                background: opt.id === activeBox ? '#FFFFFF' : '#00000000',
                border: `2px solid ${opt.id === activeBox ? '#FFFFFF' : '#00000000'}`,
                '&:hover': {
                  border: `2px solid ${opt.id === activeBox ? '#FFFFFF' : '#00000000'}`,
                  transform: 'scale(1.02)',
                },
              }}
            >
              <Box component="img" src={opt.icon} alt={opt.label} />
              <Typography
                variant="subtitle1"
                sx={{
                  ...styles.optionText,
                }}
              >
                {opt.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

OptionCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  styles: PropTypes.shape({
    gridItem: PropTypes.object,
    optionBox: PropTypes.object,
    optionText: PropTypes.object,
  }),
  activeBox: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func.isRequired,
};

export default OptionCard;
