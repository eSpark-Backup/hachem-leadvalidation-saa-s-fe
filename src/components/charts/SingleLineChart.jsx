import PropTypes from 'prop-types';
import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area } from 'recharts';

const SingleLineChart = ({ data, color, fillColor }) => {
  const gradientId = `colorA-${fillColor.replace('#', '')}`;

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fillColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="key" hide />
        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
          formatter={(value) => [`${value}`, 'Value']}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          fillOpacity={1}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

SingleLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string,
  fillColor: PropTypes.string,
};

SingleLineChart.defaultProps = {
  color: '#22C55E', // Line color
  fillColor: '#ff0000', // Fill gradient color
};
export default SingleLineChart;
