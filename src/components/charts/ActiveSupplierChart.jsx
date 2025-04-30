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

// Define a list of default colors for lines
const COLORS = ['#7987FF', '#FFA5CB', '#E697FF'];

const ActiveSupplierChart = ({ data = [] }) => {
  // Extract all unique data keys except 'week'
  const lineKeys =
    data.length > 0 ? Object.keys(data[0]).filter((key) => key !== 'week') : [];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        {lineKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={COLORS[index % COLORS.length]}
            strokeWidth={2}
            dot:true
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

ActiveSupplierChart.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default ActiveSupplierChart;
