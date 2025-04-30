import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#2563eb', '#f59e0b', '#ef4444'];

const MostGenerateLeadsCard = ({ data = [] }) => {
  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <PieChart>
        <Pie
          data={data}
          innerRadius={100}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      {/* </ResponsiveContainer> */}
    </>
  );
};
MostGenerateLeadsCard.propTypes = {
  data: PropTypes.array.isRequired,
};
export default MostGenerateLeadsCard;
