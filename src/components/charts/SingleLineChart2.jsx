import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

const SingleLineChart2 = ({
  data,
  color,
  fillColor = '#fff ',
  strokeWidth,
}) => {
  const gradientId = `colorA-${fillColor.replace('#', '')}`;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} syncId="SingleLineChart2">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fillColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="key" />
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

SingleLineChart2.propTypes = {
  data: PropTypes.array.isRequired,
  fillColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  strokeWidth: PropTypes.string,
};
export default SingleLineChart2;
