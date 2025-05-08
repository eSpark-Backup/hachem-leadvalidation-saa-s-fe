import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const DEFAULT_COLORS = ['#FFBB28', '#FF8042', '#00C49F', '#0088FE'];

const DonutChartWithImage = ({
  data = [],
  width = 200,
  height = 200,
  innerRadius = 60,
  outerRadius = 80,
  dataKey = 'value',
  colors = DEFAULT_COLORS,
  centerImageUrl,
  imageSize = 70,
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
          fill="#8884d8"
          dataKey={dataKey}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>

      {centerImageUrl && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: 'translate(-50%, -50%)',
            width: imageSize,
            height: imageSize,
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={centerImageUrl}
            alt="Center"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      )}
    </Box>
  );
};

DonutChartWithImage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  dataKey: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  centerImageUrl: PropTypes.string,
  imageSize: PropTypes.number,
  isPerAllowed: PropTypes.number,
};

export default DonutChartWithImage;
