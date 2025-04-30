import { ResponsiveContainer, XAxis, Tooltip, LineChart, Line } from 'recharts';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SupplierBreakdown2 = ({ dataThisMonth = [], dataLastMonth = [] }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-500">
            BREAK DOWN BY SUPPLIER
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">69.25</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* This Month Line */}
        <div>
          <Box
            component="span"
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#22C55E',
              backgroundColor: '#22C55E',
              px: 1,
              py: 0.5,
              borderRadius: '9999px',
            }}
          >
            {'This Month'}
          </Box>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataThisMonth} syncId="supplierBreakdown">
              <XAxis dataKey="key" hide />
              <Tooltip
                contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
                formatter={(value) => [`${value}`, 'Value']}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22C55E"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Last Month Line */}
        <div>
          <Box
            component="span"
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#EF4444',
              backgroundColor: '#EF4444',
              px: 1,
              py: 0.5,
              borderRadius: '9999px',
            }}
          >
            {'This Month'}
          </Box>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataLastMonth} syncId="supplierBreakdown">
              <XAxis dataKey="key" hide />
              <Tooltip
                contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
                formatter={(value) => [`${value}`, 'Value']}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#EF4444"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

SupplierBreakdown2.propTypes = {
  dataLastMonth: PropTypes.array.isRequired,
  dataThisMonth: PropTypes.array.isRequired,
};
export default SupplierBreakdown2;
