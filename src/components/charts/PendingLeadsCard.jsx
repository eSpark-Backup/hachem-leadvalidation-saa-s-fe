import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const PendingLeadsCard = ({ data = [] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#ccc" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

PendingLeadsCard.propTypes = {
  data: PropTypes.array.isRequired,
};
export default PendingLeadsCard;
