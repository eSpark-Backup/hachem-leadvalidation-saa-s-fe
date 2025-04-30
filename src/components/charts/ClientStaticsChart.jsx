'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const ClientStaticsChart = ({ data = [] }) => {
  return (
    <>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF7E5C" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF7E5C" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#54D14D" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#54D14D" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#314CFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#314CFF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorD" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFB443" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFB443" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          {/* <CartesianGrid strokeDasharray="3 3" hide /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="a"
            stackId="1"
            stroke="#FF7E5C"
            fill="url(#colorA)"
          />
          <Area
            type="monotone"
            dataKey="b"
            stackId="1"
            stroke="#54D14D"
            fill="url(#colorB)"
          />
          <Area
            type="monotone"
            dataKey="c"
            stackId="1"
            stroke="#314CFF"
            fill="url(#colorC)"
          />
          <Area
            type="monotone"
            dataKey="d"
            stackId="1"
            stroke="#FFB443"
            fill="url(#colorD)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
ClientStaticsChart.propTypes = {
  data: PropTypes.array.isRequired,
};
export default ClientStaticsChart;
