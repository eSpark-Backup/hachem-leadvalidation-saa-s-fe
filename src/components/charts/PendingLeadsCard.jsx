import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const PendingLeadsCard = ({
  data,
  color = '#3b82f6',
  strokeWidth = 2,
  showXAxis = true,
  tooltipFormatter = (value) => [`${value}`, 'Value'],
  lineDot = false,
  xAxisKey = 'key',
  height = '100%',
  width = '100%',
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data}>
        {showXAxis && <XAxis dataKey={xAxisKey} stroke="#ccc" />}
        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
          formatter={tooltipFormatter}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={strokeWidth}
          dot={lineDot}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

PendingLeadsCard.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  showXAxis: PropTypes.bool,
  tooltipFormatter: PropTypes.func,
  lineDot: PropTypes.bool,
  xAxisKey: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default PendingLeadsCard;
