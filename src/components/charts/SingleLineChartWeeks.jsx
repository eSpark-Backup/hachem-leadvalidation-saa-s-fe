import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
} from 'recharts';
import PropTypes from 'prop-types';

const SingleLineChartWeeks = (props) => {
  // Access all values from props
  const { data, color, fillColor = '#fff ', strokeWidth } = props;

  const gradientId = `colorA-${fillColor.replace('#', '')}`;

  // Function to group data by week
  const groupedData = (data) => {
    return data.map((item, index) => ({
      ...item,
      key: `Week ${Math.floor(index / 7) + 1}`,
    }));
  };

  return (
    <ResponsiveContainer width="100%" height={410}>
      <AreaChart data={groupedData(data)}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fillColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="key"
          tickFormatter={(value, index) => {
            return index % 7 === 0 ? value : '';
          }}
        />
        <YAxis dataKey="value" />
        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
          formatter={(value) => [`${value}`, 'Value']}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={strokeWidth || 1}
          fillOpacity={1}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

SingleLineChartWeeks.propTypes = {
  data: PropTypes.array.isRequired,
  fillColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number,
};

export default SingleLineChartWeeks;
