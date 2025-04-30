import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';

const formatNumber = (value) => {
  return value.toLocaleString();
};

const LeadsTable = ({ headers, data = [] }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ maxWidth: 600, borderRadius: 2 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell sx={{ py: 1 }} align="center" key={index}>
                <Typography
                  fontWeight={600}
                  fontSize="11px"
                  color="#555"
                  sx={{ textTransform: 'uppercase' }}
                >
                  {header}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ py: 0.5 }} align="center">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: row.color,
                      mr: 0.5,
                    }}
                  />
                  <Typography fontWeight={600} fontSize="11px" color="#111">
                    {row.leadType}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ py: 0.5 }}>
                <Typography fontWeight={500} fontSize="11px" color="#111">
                  {formatNumber(row.totalLeads)}
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ py: 0.5 }}>
                <Typography
                  fontWeight={600}
                  fontSize="11px"
                  sx={{ color: row.color }}
                >
                  {`${row.validRate}%`}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

LeadsTable.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
};

export default LeadsTable;
