import {
  Line,
  Bar,
  XAxis,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import PropTypes from 'prop-types';

const BarLineChart = ({ data = [], color = '#FFA500', height }) => {
  return (
    <ResponsiveContainer width="100%" height={height || 200}>
      <ComposedChart data={data}>
        <XAxis dataKey="week" axisLine={false} tickLine={false} />
        <Bar
          dataKey="background"
          barSize={40}
          fill="#c0c0c0"
          radius={[10, 10, 0, 0]}
        />
        <Line
          type="monotone"
          dataKey="leads"
          stroke={color}
          strokeWidth={2}
          dot={{ r: 5, fill: color, strokeWidth: 2, stroke: '#fff' }}
          activeDot={{ r: 8 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

BarLineChart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.any,
};

export default BarLineChart;
