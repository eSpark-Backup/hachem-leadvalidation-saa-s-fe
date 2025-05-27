import { Box, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ViewToggle from './viewToggle';
import StatsChart from '../../charts/StatsChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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

  return (
    <>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        {showToggle && (
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexDirection: 'column',
              alignItems: 'end',
            }}
          >
            {open == false && (
              <Box
                ref={anchorRef}
                onClick={
                  open == false ? modalOpen : handleOpenChartModalDropDown
                }
                sx={{
                  cursor: 'pointer',
                  p: 0,
                }}
              >
                <MoreHorizIcon />
              </Box>
            )}

            <ViewToggle />
          </Box>
        )}
      </Box>

      {/* Stats */}
      <Box display="flex" justifyContent="space-between" mb={4}>
        {/* Total Leads */}
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {totalLeadsLabel}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {totalLeads}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
            {getIcon(totalLeadsChangeIcon)}
            <Typography variant="caption" color={totalLeadsChangeColor}>
              {`${totalLeadsChange} ${totalLeadsChangeTime}`}
            </Typography>
          </Stack>
        </Box>

        {/* Rejected Leads */}
        <Box textAlign="right">
          <Typography variant="subtitle2" color="text.secondary">
            {rejectedLeadsLabel}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {rejectedLeads}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            spacing={0.5}
            mt={0.5}
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
  modalOpen: PropTypes.any,
  open: PropTypes.any,
  anchorRef: PropTypes.any,

  handleOpenChartModalDropDown: PropTypes.any,
};

export default StatisticsCard;
