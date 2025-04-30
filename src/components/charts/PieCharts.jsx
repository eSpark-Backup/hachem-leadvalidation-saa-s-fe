import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const PieCharts = ({ data = [] }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        paddingAngle={2}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip /> {/* Tooltip added here */}
    </PieChart>
  );
};
PieCharts.propTypes = {
  data: PropTypes.array.isRequired,
};
export default PieCharts;
