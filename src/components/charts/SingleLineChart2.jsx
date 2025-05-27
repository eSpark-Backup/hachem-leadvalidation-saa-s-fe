import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';
import PropTypes from 'prop-types';

const SingleLineChart2 = ({
  data,
  color = '#22C55E',
  fillColor = '#ffffff',
  strokeWidth = 1,
  height = 400,
  dataKey = 'value',
  xAxisKey = 'key',
  showXAxis = true,
  showYAxis = true,
  tooltipFormatter = (value) => [`${value}`, 'Value'],
  syncId = 'SingleLineChart2',
}) => {
  const gradientId = `colorA-${fillColor.replace('#', '')}`;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} syncId={syncId}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fillColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
          </linearGradient>
        </defs>

        {showXAxis && <XAxis dataKey={xAxisKey} />}
        {showYAxis && <YAxis dataKey={dataKey} />}

        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
          formatter={tooltipFormatter}
        />

        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={strokeWidth}
          fillOpacity={1}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

SingleLineChart2.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string,
  fillColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  height: PropTypes.number,
  dataKey: PropTypes.string,
  xAxisKey: PropTypes.string,
  showXAxis: PropTypes.bool,
  showYAxis: PropTypes.bool,
  tooltipFormatter: PropTypes.func,
  syncId: PropTypes.string,
};

export default SingleLineChart2;
