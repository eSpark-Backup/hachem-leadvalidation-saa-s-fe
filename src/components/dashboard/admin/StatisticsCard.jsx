import { Box, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ViewToggle from './viewToggle';
import StatsChart from '../../charts/StatsChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styles } from '../../../styles/components/dashboard/admin/StatisticsCard';

const StatisticsCard = ({
  title,
  showToggle,
  totalLeads,
  totalLeadsLabel,
  totalLeadsChange,
  totalLeadsChangeIcon,
  totalLeadsChangeTime,
  rejectedLeads,
  rejectedLeadsLabel,
  rejectedLeadsChange,
  rejectedLeadsChangeIcon,
  totalLeadsChangeColor = 'success.main',
  rejectedLeadsChangeColor = 'error.main',
  chartData,
  modalOpen,
  open,
  handleOpenChartModalDropDown,
  anchorRef,
}) => {
  const getIcon = (direction) =>
    direction === 'up' ? (
      <ArrowUpwardIcon fontSize="small" sx={{ color: totalLeadsChangeColor }} />
    ) : (
      <ArrowDownwardIcon
        fontSize="small"
        sx={{ color: rejectedLeadsChangeColor }}
      />
    );

  const handleIconClick = () => {
    if (open === false) {
      modalOpen();
    } else {
      handleOpenChartModalDropDown();
    }
  };

  return (
    <>
      {/* Header */}
      <Box sx={styles.headerBox}>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>

        {showToggle && (
          <Box sx={styles.toggleContainer}>
            {open === false && (
              <Box
                ref={anchorRef}
                onClick={handleIconClick}
                sx={styles.clickableIcon}
              >
                <MoreHorizIcon />
              </Box>
            )}
            <ViewToggle />
          </Box>
        )}
      </Box>

      {/* Stats */}
      <Box sx={styles.statsBox}>
        {/* Total Leads */}
        <Box sx={styles.statItemLeft}>
          <Typography variant="subtitle2" color="text.secondary">
            {totalLeadsLabel}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {totalLeads}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={styles.changeStackLeft}
          >
            {getIcon(totalLeadsChangeIcon)}
            <Typography variant="caption" color={totalLeadsChangeColor}>
              {`${totalLeadsChange} ${totalLeadsChangeTime}`}
            </Typography>
          </Stack>
        </Box>

        {/* Rejected Leads */}
        <Box sx={styles.statItemRight}>
          <Typography variant="subtitle2" color="text.secondary">
            {rejectedLeadsLabel}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {rejectedLeads}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={styles.changeStackRight}
          >
            {getIcon(rejectedLeadsChangeIcon)}
            <Typography variant="caption" color={rejectedLeadsChangeColor}>
              {rejectedLeadsChange}
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Chart */}
      <StatsChart data={chartData} />
    </>
  );
};

StatisticsCard.propTypes = {
  title: PropTypes.string,
  showToggle: PropTypes.bool,
  totalLeads: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalLeadsLabel: PropTypes.string,
  totalLeadsChange: PropTypes.string,
  totalLeadsChangeColor: PropTypes.string,
  totalLeadsChangeIcon: PropTypes.oneOf(['up', 'down']),
  totalLeadsChangeTime: PropTypes.string,
  rejectedLeads: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rejectedLeadsLabel: PropTypes.string,
  rejectedLeadsChange: PropTypes.string,
  rejectedLeadsChangeColor: PropTypes.string,
  rejectedLeadsChangeIcon: PropTypes.oneOf(['up', 'down']),
  chartData: PropTypes.array,
  modalOpen: PropTypes.func,
  open: PropTypes.bool,
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  handleOpenChartModalDropDown: PropTypes.func,
};

export default StatisticsCard;
