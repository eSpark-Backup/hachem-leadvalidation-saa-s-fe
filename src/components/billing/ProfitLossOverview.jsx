import { Box, Typography } from '@mui/material';
import renderTable from './renderTable';

const ProfitLossOverview = ({ data, title }) => {
  return (
    <>
      <Box sx={{ p: 4, bgcolor: '#E9EDF7', borderRadius: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 5,
            fontSize: '30px',
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          {renderTable('Last Month', data.lastMonth)}
          {renderTable('This year to date', data.yearToDate)}
        </Box>
      </Box>
    </>
  );
};

export default ProfitLossOverview;
