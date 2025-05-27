import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area } from 'recharts';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SupplierBreakdown = ({
  dataThisMonth = [],
  dataLastMonth = [],
  textThisMonth = 'This Month',
  textLastMonth = 'Last Month',
  colorThisMonth = '#22C55E',
  colorLastMonth = '#EF4444',
  fontSize = '0.75rem',
  fontWeight = 400,
  tooltipFontSize = '12px',
  tooltipBorderRadius = '8px',
  strokeWidth = 2,
}) => {
  return (
    <>
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
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={dataThisMonth} syncId="supplierBreakdown">
            <defs>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={colorThisMonth}
                  stopOpacity={0.8}
                />
                <stop offset="95%" stopColor={colorThisMonth} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="key" hide />
            <Tooltip
              contentStyle={{
                fontSize: tooltipFontSize,
                borderRadius: tooltipBorderRadius,
              }}
              formatter={(value) => [`${value}`, 'Value']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={colorThisMonth}
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
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={dataLastMonth} syncId="supplierBreakdown">
            <defs>
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={colorLastMonth}
                  stopOpacity={0.8}
                />
                <stop offset="95%" stopColor={colorLastMonth} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="key" hide />
            <Tooltip
              contentStyle={{
                fontSize: tooltipFontSize,
                borderRadius: tooltipBorderRadius,
              }}
              formatter={(value) => [`${value}`, 'Value']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={colorLastMonth}
              strokeWidth={strokeWidth}
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

export default SupplierBreakdown;
