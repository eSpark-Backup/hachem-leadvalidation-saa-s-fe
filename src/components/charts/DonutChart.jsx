import {
  Box,
  Card,
  CardContent,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  HEADERS,
  LEADS_TABLE,
} from '../../constants/components/charts/LeadsTable';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import LeadsTable from './LeadsTable';

const COLORS = ['#54D14D', '#136BE5', '#88B8F9', '#B3F2AF', '#09451C'];

const RADIAN = Math.PI / 180;

// Custom label inside each section
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  // index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DonutChart = ({ data = [] }) => {
  const [month, setMonth] = useState('This Month');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
DonutChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DonutChart;
