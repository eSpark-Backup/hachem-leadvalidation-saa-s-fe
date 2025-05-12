'use client';

import PropTypes from 'prop-types';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const LeadsPerformanceChart = ({
  data,
  color = '#ff7c7c',
  height = 70,
  fillOpacity = 0.8,
  gradientOffsetStart = '5%',
  gradientOffsetEnd = '95%',
  dataKey = 'a',
}) => {
  const gradientId = `colorA-${color.replace('#', '')}`; // Ensures uniqueness

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset={gradientOffsetStart}
              stopColor={color}
              stopOpacity={fillOpacity}
            />
            <stop
              offset={gradientOffsetEnd}
              stopColor={color}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey={dataKey}
          stackId="1"
          stroke={color}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

LeadsPerformanceChart.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  fillOpacity: PropTypes.number,
  gradientOffsetStart: PropTypes.string,
  gradientOffsetEnd: PropTypes.string,
  dataKey: PropTypes.string,
};

export default LeadsPerformanceChart;
