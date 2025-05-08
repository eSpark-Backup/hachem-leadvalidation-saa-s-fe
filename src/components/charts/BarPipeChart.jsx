import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

const BarPipeChart = ({
  data = [],
  height = 250,
  barSize = 10,
  xAxisKey = 'month',
  validColor = '#4CAF50',
  rejectColor = '#F8BBD0',
  barKeys = [
    { key: 'valid', color: validColor, label: 'Valid' },
    { key: 'reject', color: rejectColor, label: 'Reject' },
  ],
  stackId = 'a',
  showGrid = true,
  showTooltip = true,
  showLegend = true,
}) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} barSize={barSize}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          {showTooltip && <Tooltip />}
          {barKeys.map(({ key, color }, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId={stackId}
              fill={color}
              radius={index === 0 ? [0, 0, 10, 10] : [10, 10, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      {showLegend && (
        <Box mt={2} display="flex" gap={2}>
          {barKeys.map(({ color, label }) => (
            <Box key={label} display="flex" alignItems="center" gap={0.5}>
              <Box width={10} height={10} bgcolor={color} borderRadius="50%" />
              <Typography variant="caption">{label}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

BarPipeChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  barSize: PropTypes.number,
  xAxisKey: PropTypes.string,
  barKeys: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  stackId: PropTypes.string,
  rejectColor: PropTypes.string,
  validColor: PropTypes.string,
  showGrid: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showLegend: PropTypes.bool,
};

export default BarPipeChart;
