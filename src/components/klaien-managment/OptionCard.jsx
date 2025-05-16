import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  containerStyles,
  getBoxStyles,
} from '../../styles/components/klaien-managment/OptionCard';

const OptionCard = ({ data, styles, activeBox, handleClick }) => {
  return (
    <Grid container spacing={2} sx={containerStyles}>
      {data.map((opt) => {
        const isActive = opt.id === activeBox;
        return (
          <Grid item xs={12} sm={6} md={4} key={opt.id} sx={styles.gridItem}>
            <Box
              onClick={() => handleClick(opt.id)}
              sx={{ ...styles.optionBox, ...getBoxStyles(isActive) }}
            >
              <Box component="img" src={opt.icon} alt={opt.label} />
              <Typography variant="subtitle1" sx={{ ...styles.optionText }}>
                {opt.label}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
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
