import {
  // LineChart,
  Line,
  Bar,
  XAxis,
  // Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import PropTypes from 'prop-types';
const LeadsChart = ({ data = [], color = '#FFA500' }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart data={data}>
        <XAxis dataKey="week" axisLine={false} tickLine={false} />
        {/* <Tooltip content={
              <CustomTooltip />
            } /> */}
        {/* Light background bars */}
        <Bar
          dataKey="background"
          barSize={40}
          fill="#c0c0c0"
          radius={[10, 10, 0, 0]}
        />
        {/* Actual performance line */}
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

LeadsChart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};
export default LeadsChart;
