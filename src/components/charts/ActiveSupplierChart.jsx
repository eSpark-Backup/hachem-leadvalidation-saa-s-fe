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

const DEFAULT_COLORS = ['#7987FF', '#FFA5CB', '#E697FF'];

const ActiveSupplierChart = ({
  data = [],
  height = 250,
  xAxisKey = 'week',
  colors = DEFAULT_COLORS,
  strokeWidth = 2,
  showGrid = true,
  showTooltip = true,
  showLegend = true,
  showDots = true,
}) => {
  const lineKeys =
    data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== xAxisKey)
      : [];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        {showTooltip && <Tooltip />}
        {showLegend && <Legend verticalAlign="bottom" height={36} />}
        {lineKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index % colors.length]}
            strokeWidth={strokeWidth}
            dot={showDots}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

ActiveSupplierChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  height: PropTypes.number,
  xAxisKey: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  strokeWidth: PropTypes.number,
  showGrid: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showLegend: PropTypes.bool,
  showDots: PropTypes.bool,
};

export default ActiveSupplierChart;
