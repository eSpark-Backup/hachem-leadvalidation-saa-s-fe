import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';

const MostGenerateLeadsCard = ({
  data,
  colors = ['#2563eb', '#f59e0b', '#ef4444'],
  innerRadius = 100,
  outerRadius = 100,
  paddingAngle = 5,
  width = '100%',
  height = '100%',
}) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        paddingAngle={paddingAngle}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

MostGenerateLeadsCard.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  paddingAngle: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

MostGenerateLeadsCard.defaultProps = {
  colors: ['#2563eb', '#f59e0b', '#ef4444'],
  innerRadius: 100,
  outerRadius: 100,
  paddingAngle: 5,
  width: '100%',
  height: '100%',
};

export default MostGenerateLeadsCard;
