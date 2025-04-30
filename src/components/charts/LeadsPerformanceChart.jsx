'use client';

import PropTypes from 'prop-types';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const LeadsPerformanceChart = ({ data = [], color = '#ff7c7c' }) => {
  const gradientId = `colorA-${color.replace('#', '')}`; // Ensures uniqueness

  return (
    <ResponsiveContainer width="100%" height={70}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <Tooltip /> */}
        <Area
          type="monotone"
          dataKey="a"
          stackId="1"
          stroke={color}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
LeadsPerformanceChart.propTypes = {
  color: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
export default LeadsPerformanceChart;
