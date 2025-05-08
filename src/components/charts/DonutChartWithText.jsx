import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const DEFAULT_COLORS = ['#3353F4', '#FF4343', '#54D14D'];

const DonutChartWithText = ({
  data = [],
  width = 200,
  height = 200,
  innerRadius = 70,
  outerRadius = 80,
  dataKey = 'value',
  colors = DEFAULT_COLORS,
  centerValue = 21950,
  centerLabel = '',
  valueFontSize = '20px',
  labelFontSize = '10px',
  isPerAllowed,
}) => {
  return (
    <Box position="relative" display="inline-flex">
      <PieChart width={width} height={height}>
        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
          formatter={(value) => [`${value}${isPerAllowed ? '%' : ''}`, 'Value']}
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          fill="#8884d8"
          dataKey={dataKey}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>

      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: 'translate(-50%, -50%)', textAlign: 'center' }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: valueFontSize }}
        >
          {centerValue?.toLocaleString()}
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: labelFontSize, color: '#00000080' }}
        >
          {centerLabel}
        </Typography>
      </Box>
    </Box>
  );
};

DonutChartWithText.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  dataKey: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  centerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  centerLabel: PropTypes.string,
  valueFontSize: PropTypes.string,
  labelFontSize: PropTypes.string,
  isPerAllowed: PropTypes.string,
};

export default DonutChartWithText;
