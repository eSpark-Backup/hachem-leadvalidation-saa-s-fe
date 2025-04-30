import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const COLORS = ['#FFBB28', '#FF8042'];

const DonutChartWithImage = ({ data = [] }) => {
  return (
    <Box position="relative" display="inline-flex">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
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
        sx={{
          transform: 'translate(-50%, -50%)',
          width: 70,
          height: 70,
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" // <-- your image URL here
          alt="Center"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
};

DonutChartWithImage.propTypes = {
  data: PropTypes.array.isRequired,
};
export default DonutChartWithImage;
