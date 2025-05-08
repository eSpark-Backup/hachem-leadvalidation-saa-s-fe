import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const PieCharts = ({
  data = [],
  width = 250,
  height = 250,
  innerRadius = 60,
  outerRadius = 80,
  colors = ['#0088FE', '#00C49F', '#FFBB28'],
  showTooltip = true,
  dataKey = 'value',
  nameKey = 'name',
  paddingAngle = 2,
}) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        dataKey={dataKey}
        nameKey={nameKey}
        cx="50%"
        cy="50%"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        paddingAngle={paddingAngle}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      {showTooltip && <Tooltip />}
    </PieChart>
  );
};

PieCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  showTooltip: PropTypes.bool,
  dataKey: PropTypes.string,
  nameKey: PropTypes.string,
  paddingAngle: PropTypes.number,
};

export default PieCharts;
