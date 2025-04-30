import { useState } from 'react';
import {
  // LineChart,
  // Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SupplierBreakdown = ({ dataThisMonth = [], dataLastMonth = [] }) => {
  return (
    <>
      <div>
        <Box
          component="span"
          sx={{
            fontSize: '0.75rem', // text-xs
            fontWeight: 400, // font-semibold
            color: '#fff',
            backgroundColor: '#22C55E',
            px: 1,
            py: 0.5,
            borderRadius: '9999px',
          }}
        >
          {'This Month'}
        </Box>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={dataThisMonth} syncId="supplierBreakdown">
            <defs>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="key" hide />
            <Tooltip
              contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
              formatter={(value) => [`${value}`, 'Value']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22C55E"
              fillOpacity={1}
              fill="url(#colorThisMonth)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div>
        <Box
          component="span"
          sx={{
            fontSize: '0.75rem', // text-xs
            fontWeight: 400, // font-semibold
            color: '#fff',
            backgroundColor: '#EF4444',
            px: 1, // paddingX = 2 in Tailwind = 1 in MUI spacing (8px)
            py: 0.5, // paddingY = 1 in Tailwind = 0.5 in MUI spacing (4px)
            borderRadius: '9999px', // fully rounded (rounded-full)
          }}
        >
          {'Last Month'}
        </Box>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={dataLastMonth} syncId="supplierBreakdown">
            <defs>
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="key" hide />
            <Tooltip
              contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
              formatter={(value) => [`${value}`, 'Value']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#EF4444"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorLastMonth)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

SupplierBreakdown.propTypes = {
  dataLastMonth: PropTypes.array.isRequired,
  dataThisMonth: PropTypes.array.isRequired,
};
export default SupplierBreakdown;
