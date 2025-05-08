import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const CustomBarChart = ({
  data = [],
  barColor = '#8884d8',
  height = 250,
  dataKey = 'value',
  xAxisKey = 'key',
  showXAxis = false,
  showYAxis = false,
  showTooltip = true,
  showLabels = true,
  labelFontSize = 12,
  labelColor = '#000',
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <XAxis dataKey={xAxisKey} hide={!showXAxis} />
        <YAxis hide={!showYAxis} />
        {showTooltip && <Tooltip />}
        <Bar
          dataKey={dataKey}
          fill={barColor}
          label={
            showLabels
              ? ({ x, y, width, index }) => {
                  const label = data[index]?.[xAxisKey] || '';
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 6}
                      textAnchor="middle"
                      fill={labelColor}
                      fontSize={labelFontSize}
                    >
                      {label}
                    </text>
                  );
                }
              : false
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

CustomBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  barColor: PropTypes.string,
  height: PropTypes.number,
  dataKey: PropTypes.string,
  xAxisKey: PropTypes.string,
  showXAxis: PropTypes.bool,
  showYAxis: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showLabels: PropTypes.bool,
  labelFontSize: PropTypes.number,
  labelColor: PropTypes.string,
};

export default CustomBarChart;
