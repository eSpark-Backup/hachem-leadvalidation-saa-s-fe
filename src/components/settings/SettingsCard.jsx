import { Box, Grid, Typography, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from '../../styles/components/settings/SettingsCard';
import questionIcons from '/src/assets/settings/questions.svg';

const SettingsCard = ({ title, description, children, toolToop }) => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Box sx={styles.titleContainer}>
            <Typography sx={styles.titleText}>{title}</Typography>
            {toolToop && (
              <Tooltip title={toolToop} arrow placement="top">
                <img src={questionIcons} alt="info" style={styles.topTip} />
              </Tooltip>
            )}
          </Box>
          <Typography variant="body1" sx={styles.descriptionText}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <Box sx={styles.contentBox}>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

SettingsCard.propTypes = {
  title: PropTypes.string.isRequired,
  toolToop: PropTypes.string,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SettingsCard;
