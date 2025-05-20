import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const DEFAULT_COLORS = ['#3353F4', '#FF4343', '#54D14D'];

const tooltipContentStyle = {
  fontSize: '12px',
  borderRadius: '8px',
};

const centerBoxStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

const getValueTextStyles = (valueFontSize) => ({
  fontWeight: 700,
  fontSize: valueFontSize,
});

const getLabelTextStyles = (labelFontSize) => ({
  fontSize: labelFontSize,
  color: '#00000080',
});

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
          contentStyle={tooltipContentStyle}
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

      <Box sx={centerBoxStyles}>
        <Typography variant="h6" sx={getValueTextStyles(valueFontSize)}>
          {centerValue?.toLocaleString()}
        </Typography>
        <Typography variant="caption" sx={getLabelTextStyles(labelFontSize)}>
          {centerLabel}
        </Typography>
      </Box>
    </Box>
  );
};

DonutChartWithText.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  width: PropTypes.any,
  height: PropTypes.any,
  innerRadius: PropTypes.any,
  outerRadius: PropTypes.any,
  dataKey: PropTypes.any,
  colors: PropTypes.arrayOf(PropTypes.string),
  centerValue: PropTypes.oneOfType([PropTypes.any, PropTypes.any]),
  centerLabel: PropTypes.any,
  valueFontSize: PropTypes.any,
  labelFontSize: PropTypes.any,
  isPerAllowed: PropTypes.any,
};

export default DonutChartWithText;
