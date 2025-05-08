import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useMemo } from 'react';

/**
 * MultiLineChart is a reusable React component for rendering a multi-line chart
 * using the Recharts library. It supports dynamic data, customizable colors,
 * and various chart configurations.
 *
 * @param {Object} props - The props for the MultiLineChart component.
 * @param {Array<Object>} props.data - The data to be displayed in the chart. Each object represents a data point.
 * @param {Array<string>} [props.colors=['#8884d8', '#82ca9d', '#ffc658']] - An array of colors for the lines in the chart.
 * @param {boolean} [props.showDots=true] - Whether to display dots on the lines.
 * @param {number} [props.height=250] - The height of the chart container.
 * @param {string} [props.xKey='week'] - The key in the data objects to be used for the X-axis.
 * @param {string} [props.legendPosition='bottom'] - The position of the legend (e.g., 'top', 'bottom', 'left', 'right').
 * @param {number} [props.strokeWidth=2] - The width of the lines in the chart.
 * @param {number} [props.activeDotRadius=6] - The radius of the active dot when hovering over a line.
 *
 * @returns {JSX.Element} A responsive multi-line chart component.
 */
const MultiLineChart = ({
  data = [],
  colors = ['#8884d8', '#82ca9d', '#ffc658'],
  showDots = true,
  height = 250,
  xKey = 'week',
  legendPosition = 'bottom',
  strokeWidth = 2,
  activeDotRadius = 6,
}) => {
  const lineKeys = useMemo(() => {
    return data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== xKey)
      : [];
  }, [data, xKey]);

  if (!data || data.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="body1" color="text.secondary">
          No data available to display the chart.
        </Typography>
      </Box>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign={legendPosition} height={36} />
        {lineKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index % colors.length]}
            strokeWidth={strokeWidth}
            dot={showDots}
            activeDot={{ r: activeDotRadius }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

MultiLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  colors: PropTypes.arrayOf(PropTypes.string),
  showDots: PropTypes.bool,
  height: PropTypes.number,
  xKey: PropTypes.string,
  legendPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  strokeWidth: PropTypes.number,
  activeDotRadius: PropTypes.number,
};

export default MultiLineChart;
