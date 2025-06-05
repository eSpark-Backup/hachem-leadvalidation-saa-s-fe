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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils/globals';
import {
  ContainerStyle,
  HeaderCellStyle,
  HeaderTextStyle,
  RowTextStyle,
  SubTextStyle,
  RowStyle,
} from '../../constants/components/billing/RevenueTable';

// Main component
const RevenueTable = ({
  data = [],
  dot = [],
  header = ['Client', 'Revenue'],
}) => {
  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{ ...ContainerStyle, mt: 2 }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            {header.map((head, index) => (
              <TableCell sx={HeaderCellStyle} key={index}>
                <Typography sx={HeaderTextStyle}>{head}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} sx={RowStyle}>
              <TableCell align="center" sx={{ py: 0.5 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <FiberManualRecordIcon
                    sx={{
                      height: 10,
                      width: 10,
                      color: dot[index] || row.color,
                    }}
                  />
                  <Typography sx={RowTextStyle}>{row.key}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ py: 0.5 }}>
                <Typography sx={SubTextStyle}>
                  {formatNumber(row.revenue || row.value)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Prop validation
RevenueTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.number,
      revenue: PropTypes.number,
      color: PropTypes.string,
    })
  ),
  dot: PropTypes.arrayOf(PropTypes.string),
  header: PropTypes.arrayOf(PropTypes.string),
};

export default RevenueTable;
