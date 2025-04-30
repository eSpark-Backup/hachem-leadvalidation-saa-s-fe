// ClientStatsChart.jsx
import { Box, Typography, Button, Stack } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from 'recharts';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ClientStatsChart = ({ data = [] }) => {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: 'white',
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: 400,
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h5" fontWeight="bold">
          Client
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small">
            Week
          </Button>
          <Button variant="contained" size="small">
            Day
          </Button>
        </Stack>
      </Box>

      {/* Stats */}
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Total Leads
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            48752
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
            <ArrowUpwardIcon fontSize="small" sx={{ color: 'success.main' }} />
            <Typography variant="caption" color="success.main">
              18.56% (1h 12m)
            </Typography>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Rejected Leads
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            4574
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
            <ArrowDownwardIcon fontSize="small" sx={{ color: 'error.main' }} />
            <Typography variant="caption" color="error.main">
              12% (-17)
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Chart */}
      <Box sx={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={90}
              tick={{ fontSize: 12, fill: '#64748B' }}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Bar
              dataKey="value"
              radius={[0, 5, 2, 0]}
              isAnimationActive={false}
              barSize={20}
              label={'sdfsdf'}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
ClientStatsChart.propTypes = {
  data: PropTypes.array.isRequired,
};
export default ClientStatsChart;
