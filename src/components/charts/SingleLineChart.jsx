import PropTypes from 'prop-types';
import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area } from 'recharts';

const SingleLineChart = ({
  data,
  color = '#22C55E',
  fillColor = '#ff0000',
  dataKey = 'value',
  xAxisKey = 'key',
  height = 220,
  showXAxis = false,
  tooltipFormatter = (value) => [`${value}`, 'Value'],
}) => {
  const gradientId = `colorA-${fillColor.replace('#', '')}`;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fillColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={xAxisKey} hide={!showXAxis} />
        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
          formatter={tooltipFormatter}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
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
  dataKey: PropTypes.string,
  xAxisKey: PropTypes.string,
  height: PropTypes.number,
  showXAxis: PropTypes.bool,
  tooltipFormatter: PropTypes.func,
};

export default SingleLineChart;
