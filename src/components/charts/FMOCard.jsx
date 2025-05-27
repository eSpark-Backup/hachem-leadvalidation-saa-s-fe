import { Box, Card, Typography, Stack, Chip } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PropTypes from 'prop-types';

const FMOCard = ({
  title = 'FMO April',
  data = [],
  total = 0,
  width = 250,
  chartSize = 160,
  innerRadius = 50,
  outerRadius = 70,
  chipData = [],
  isPerAllowed = true,
}) => {
  return (
    <Card sx={{ p: 2, width, borderRadius: 4 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PieChart width={chartSize} height={chartSize}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || '#ccc'} />
            ))}
          </Pie>
        </PieChart>
        <Typography
          variant="h6"
          sx={{ position: 'absolute', fontWeight: 'bold' }}
        >
          {total}
        </Typography>
      </Box>

      <Stack spacing={1} mt={2}>
        {chipData.map(
          ({ label, value, percent, direction, color, dotColor }, index) => (
            <Stack key={index} direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor: dotColor,
                    borderRadius: '50%',
                  }}
                />
                <Typography>{label}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography fontWeight="bold">{value}</Typography>
                <Chip
                  label={`${percent}${isPerAllowed ? '%' : ''}`}
                  color={color}
                  size="small"
                  icon={
                    direction === 'up' ? (
                      <ArrowUpwardIcon fontSize="small" />
                    ) : (
                      <ArrowDownwardIcon fontSize="small" />
                    )
                  }
                  sx={{ pl: 0.5 }}
                />
              </Stack>
            </Stack>
          )
        )}
      </Stack>
    </Card>
  );
};

FMOCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
      color: PropTypes.string,
    })
  ),
  total: PropTypes.number,
  width: PropTypes.number,
  chartSize: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  isPerAllowed: PropTypes.bool,
  chipData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      percent: PropTypes.number.isRequired,
      direction: PropTypes.oneOf(['up', 'down']).isRequired,
      color: PropTypes.oneOf(['success', 'error', 'warning', 'primary']),
      dotColor: PropTypes.string.isRequired,
    })
  ),
};

export default FMOCard;
