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

// ========== Constants ==========
const CONTAINER_STYLE = {
  maxWidth: 600,
  borderRadius: 2,
};

const HEADER_CELL_STYLE = {
  py: 1,
  textAlign: 'center',
};

const HEADER_TEXT_STYLE = {
  fontWeight: 600,
  fontSize: '11px',
  color: '#555',
  textTransform: 'uppercase',
};

const ROW_TEXT_STYLE = {
  fontWeight: 600,
  fontSize: '11px',
  color: '#111',
};

const SUB_TEXT_STYLE = {
  fontWeight: 500,
  fontSize: '11px',
  color: '#111',
};

const COLOR_DOT_STYLE = (color) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: 0.5,
});

// ========== Component ==========
const LeadsTable = ({ headers, isPerAllowed = true, data = [] }) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={CONTAINER_STYLE}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell sx={HEADER_CELL_STYLE} key={index}>
                <Typography sx={HEADER_TEXT_STYLE}>{header}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell align="center" sx={{ py: 0.5 }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box sx={COLOR_DOT_STYLE(row.color)} />
                  <Typography sx={ROW_TEXT_STYLE}>{row.leadType}</Typography>
                </Box>
              </TableCell>

              <TableCell align="center" sx={{ py: 0.5 }}>
                <Typography sx={SUB_TEXT_STYLE}>
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
