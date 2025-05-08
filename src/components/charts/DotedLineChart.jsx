import PropTypes from 'prop-types';
import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area } from 'recharts';

const DotedLineChart = ({
  data = [],
  color = '#8884d8',
  fillColor = '#8884d8',
  height = 220,
  dataKey = 'value',
  xAxisKey = 'key',
  showXAxis = false,
  tooltipFormatter = (value) => [`${value}`, 'Value'],
}) => {
  const gradientId = `colorA-${fillColor.replace('#', '')}`;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
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
          dataKey={dataKey}
          stroke={color}
          fillOpacity={1}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

DotedLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  dataKey: PropTypes.string,
  xAxisKey: PropTypes.string,
  showXAxis: PropTypes.bool,
  tooltipFormatter: PropTypes.func,
};

export default DotedLineChart;
