import { Box } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  LabelList,
} from 'recharts';
import PropTypes from 'prop-types';
import { useState } from 'react';

const StatsChart = ({
  data = [],
  height = 250,
  margin = { top: 20, right: 20, bottom: 5, left: 20 },
  xAxisProps = { type: 'number' },
  yAxisProps = { type: 'category', dataKey: 'key', hide: true },
  gridProps = { strokeDasharray: '3 3', vertical: false },
  tooltipProps = {},
  barProps = {
    dataKey: 'value',
    radius: [0, 5, 2, 0],
    isAnimationActive: false,
    barSize: 20,
  },
  labelListProps = {
    dataKey: 'key',
    position: 'top',
    right: true,
    fill: '#64748B',
    style: { fontSize: 12 },
  },
  activeColor,
  color,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box sx={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data} margin={margin}>
          <XAxis {...xAxisProps} />
          <YAxis {...yAxisProps} />
          <CartesianGrid {...gridProps} />
          <Tooltip {...tooltipProps} />
          <Bar {...barProps}>
            <LabelList {...labelListProps} />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  activeIndex === index
                    ? activeColor || '#16A34A'
                    : color || '#CBD5E1'
                }
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                fillOpacity={activeIndex === index ? 0.8 : 1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

StatsChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.object,
  xAxisProps: PropTypes.object,
  yAxisProps: PropTypes.object,
  gridProps: PropTypes.object,
  tooltipProps: PropTypes.object,
  barProps: PropTypes.object,
  labelListProps: PropTypes.object,
  color: PropTypes.string,
  activeColor: PropTypes.string,
};

export default StatsChart;
