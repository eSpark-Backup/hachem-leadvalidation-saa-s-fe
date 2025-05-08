import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const DonutChartSingleWithText = ({
  data = [],
  text = '',
  color = '#8884d8',
  colors = [],
  width = 100,
  height = 100,
  innerRadius = 40,
  outerRadius = 50,
  backgroundCircle = true,
  backgroundCircleColor = '#FFF3F0',
  fontSize = '16px',
  dataKey = 'value',
  isPerAllowed = true,
}) => {
  const fallbackColors = [color, '#ffffff'];

  return (
    <Box position="relative" display="inline-flex">
      <PieChart width={width} height={height}>
        {backgroundCircle && (
          <svg>
            <circle
              r={outerRadius - 5}
              cx={width / 2}
              cy={height / 2}
              fill={backgroundCircleColor}
            />
          </svg>
        )}
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
          dataKey={dataKey}
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                colors?.[index % colors.length] ??
                fallbackColors[index % fallbackColors.length]
              }
            />
          ))}
        </Pie>
      </PieChart>

      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: 700, fontSize }}
        >
          {`${text}${isPerAllowed ? '%' : ''}`}
        </Typography>
      </Box>
    </Box>
  );
};

DonutChartSingleWithText.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.number,
  height: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  backgroundCircle: PropTypes.bool,
  backgroundCircleColor: PropTypes.string,
  fontSize: PropTypes.string,
  dataKey: PropTypes.string,
  isPerAllowed: PropTypes.bool,
};

export default DonutChartSingleWithText;
