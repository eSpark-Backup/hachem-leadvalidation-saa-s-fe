import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const paperStyle = {
  borderRadius: '20px',
  backgroundColor: '#fff',
  p: 2,
  mx: 'auto',
};
const titleStyle = { mb: 2, fontSize: '25px' };
const headCellStyle = { fontWeight: 'bold' };
const bodyCellStyle = { fontWeight: 'normal' };

const TotalClientsRevenue = ({ title, tableHead, tableData }) => {
  return (
    <Paper elevation={0} sx={paperStyle}>
      <Typography variant="h6" align="center" fontWeight="bold" sx={titleStyle}>
        {title}
      </Typography>

      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#cfdafe' }}>
            <TableRow>
              {tableHead.map((heading, index) => (
                <TableCell key={index} sx={headCellStyle}>
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, i) => (
                  <TableCell key={i} sx={bodyCellStyle}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

TotalClientsRevenue.propTypes = {
  title: PropTypes.string,
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string,
      credits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      revenue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  paperStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  headCellStyle: PropTypes.object,
  bodyCellStyle: PropTypes.object,
};

export default TotalClientsRevenue;
