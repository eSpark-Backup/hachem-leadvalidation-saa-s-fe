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
import { styles } from '../../styles/components/billing/TotalClientsRevenue';

const TotalClientsRevenue = ({ title, tableHead, tableData }) => (
  <Paper elevation={0} sx={styles.paper}>
    <Typography variant="h6" align="center" fontWeight="bold" sx={styles.title}>
      {title}
    </Typography>

    <TableContainer>
      <Table>
        <TableHead sx={styles.tableHead}>
          <TableRow>
            {tableHead.map((heading, idx) => (
              <TableCell key={idx} sx={styles.headCell}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row, idx) => (
            <TableRow key={idx}>
              {Object.values(row).map((value, i) => (
                <TableCell key={i} sx={styles.bodyCell}>
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

TotalClientsRevenue.propTypes = {
  title: PropTypes.string.isRequired,
  tableHead: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string,
      credits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      revenue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export default TotalClientsRevenue;
