import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ClientChart = ({ data = [] }) => {
  return (
    <Card sx={{ borderRadius: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Client
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barSize={10}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />{' '}
            {/* Grid Lines */}
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="valid"
              stackId="a"
              fill="#4CAF50"
              radius={[0, 0, 10, 10]}
            />
            <Bar
              dataKey="reject"
              stackId="a"
              fill="#F8BBD0"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <Box mt={2} display="flex" gap={2}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Box width={10} height={10} bgcolor="#4CAF50" borderRadius="50%" />
            <Typography variant="caption">Valid</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Box width={10} height={10} bgcolor="#F8BBD0" borderRadius="50%" />
            <Typography variant="caption">Reject</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
ClientChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ClientChart;
