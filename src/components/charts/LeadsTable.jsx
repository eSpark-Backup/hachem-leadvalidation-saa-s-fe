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
import { formatNumber } from '../../utils/globals';
import {
  ContainerStyle,
  HeaderCellStyle,
  HeaderTextStyle,
  RowTextStyle,
  SubTextStyle,
  ColorDotStyle,
} from '../../styles/components/charts/LeadTable';

const LeadsTable = ({ headers, isPerAllowed = true, data = [] }) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={ContainerStyle}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell sx={HeaderCellStyle} key={index}>
                <Typography sx={HeaderTextStyle}>{header}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell align="center" sx={{ py: 0.5 }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box sx={ColorDotStyle(row.color)} />
                  <Typography sx={RowTextStyle}>{row.leadType}</Typography>
                </Box>
              </TableCell>

              <TableCell align="center" sx={{ py: 0.5 }}>
                <Typography sx={SubTextStyle}>
                  {formatNumber(row.totalLeads)}
                </Typography>
              </TableCell>

              <TableCell align="center" sx={{ py: 0.5 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '11px',
                    color: row.color,
                  }}
                >
                  {`${row.validRate}${isPerAllowed ? '%' : ''}`}
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      leadType: PropTypes.string,
      totalLeads: PropTypes.number,
      validRate: PropTypes.number,
      color: PropTypes.string,
    })
  ).isRequired,
  isPerAllowed: PropTypes.bool,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LeadsTable;
