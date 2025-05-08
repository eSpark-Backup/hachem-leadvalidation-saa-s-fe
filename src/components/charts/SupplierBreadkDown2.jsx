import { ResponsiveContainer, XAxis, Tooltip, LineChart, Line } from 'recharts';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SupplierBreakdown2 = ({
  dataThisMonth = [],
  dataLastMonth = [],
  title = 'BREAK DOWN BY SUPPLIER',
  value = '69.25',
  textThisMonth = 'This Month',
  textLastMonth = 'Last Month',
  colorThisMonth = '#22C55E',
  colorLastMonth = '#EF4444',
  fontSize = '0.75rem',
  fontWeight = 600,
  tooltipFontSize = '12px',
  tooltipBorderRadius = '8px',
  strokeWidth = 2,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-500">{title}</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* This Month Line */}
        <div>
          <Box
            component="span"
            sx={{
              fontSize,
              fontWeight,
              color: '#fff',
              backgroundColor: colorThisMonth,
              px: 1,
              py: 0.5,
              borderRadius: '9999px',
            }}
          >
            {textThisMonth}
          </Box>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataThisMonth} syncId="supplierBreakdown">
              <XAxis dataKey="key" hide />
              <Tooltip
                contentStyle={{
                  fontSize: tooltipFontSize,
                  borderRadius: tooltipBorderRadius,
                }}
                formatter={(value) => [`${value}`, 'Value']}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={colorThisMonth}
                strokeWidth={strokeWidth}
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
              fontSize,
              fontWeight,
              color: '#fff',
              backgroundColor: colorLastMonth,
              px: 1,
              py: 0.5,
              borderRadius: '9999px',
            }}
          >
            {textLastMonth}
          </Box>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataLastMonth} syncId="supplierBreakdown">
              <XAxis dataKey="key" hide />
              <Tooltip
                contentStyle={{
                  fontSize: tooltipFontSize,
                  borderRadius: tooltipBorderRadius,
                }}
                formatter={(value) => [`${value}`, 'Value']}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={colorLastMonth}
                strokeWidth={strokeWidth}
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
  title: PropTypes.string,
  value: PropTypes.string,
  textThisMonth: PropTypes.string,
  textLastMonth: PropTypes.string,
  colorThisMonth: PropTypes.string,
  colorLastMonth: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  tooltipFontSize: PropTypes.string,
  tooltipBorderRadius: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default SupplierBreakdown2;
