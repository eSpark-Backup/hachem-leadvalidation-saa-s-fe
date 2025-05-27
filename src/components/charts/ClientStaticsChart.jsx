'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const DEFAULT_COLORS = [
  '#FF7E5C',
  '#54D14D',
  '#314CFF',
  '#FFB443',
  '#845EC2',
  '#00C9A7',
];

const ClientStaticsChart = ({
  data = [],
  xAxisKey = 'key',
  excludeKeys = [xAxisKey],
  colors = DEFAULT_COLORS,
  height = '100%',
  showTooltip = true,
  showXAxis = false,
  showYAxis = false,
  stackId = '1',
}) => {
  if (!data.length) return null;

  const areaKeys = Object.keys(data[0]).filter(
    (key) => !excludeKeys.includes(key)
  );

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          {areaKeys.map((key, index) => (
            <linearGradient
              key={key}
              id={`color${key}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={colors[index % colors.length]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={colors[index % colors.length]}
                stopOpacity={0}
              />
            </linearGradient>
          ))}
        </defs>

        {showXAxis && <XAxis dataKey={xAxisKey} />}
        {showYAxis && <YAxis />}
        {showTooltip && <Tooltip />}

        {areaKeys.map((key, index) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stackId={stackId}
            stroke={colors[index % colors.length]}
            fill={`url(#color${key})`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

ClientStaticsChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  xAxisKey: PropTypes.string,
  excludeKeys: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showTooltip: PropTypes.bool,
  showXAxis: PropTypes.bool,
  showYAxis: PropTypes.bool,
  stackId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ClientStaticsChart;
