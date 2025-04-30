import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const WeeklyCreditScore = ({ data = [], barColor }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" vertical={false} /> */}
        <XAxis dataKey="key" hide />
        <YAxis hide />
        <Tooltip />
        {/* <Legend verticalAlign="bottom" height={36} /> */}
        <Bar
          dataKey="value"
          fill={barColor || '#8884d8'}
          label={({ x, y, width, index }) => {
            const label = data[index]?.key || '';
            return (
              <text
                x={x + width / 2}
                y={y - 6}
                textAnchor="middle"
                fill="#000"
                fontSize={12}
              >
                {label}
              </text>
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

WeeklyCreditScore.propTypes = {
  data: PropTypes.array.isRequired,
  barColor: PropTypes.string.isRequired,
};

export default WeeklyCreditScore;
