import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const COLORS = ['#3353F4', '#FF4343', '#54D14D'];

const DonutChartWithText = ({ data = [] }) => {
  return (
    <Box position="relative" display="inline-flex">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          paddingAngle={2}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
          sx={{
            fontWeight: 700,
            fontSize: '20px',
          }}
        >
          21,950
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontSize: '10px',
            color: '#00000080',
          }}
        >
          {'Leads this month'}
        </Typography>
      </Box>
    </Box>
  );
};
DonutChartWithText.propTypes = {
  data: PropTypes.array.isRequired,
};
export default DonutChartWithText;
