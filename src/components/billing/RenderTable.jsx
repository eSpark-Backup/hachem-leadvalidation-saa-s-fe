import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { styles } from '../../styles/components/billing/RenderTable';

const renderTable = (title, rows) => (
  <Box sx={styles.container}>
    <Typography variant="subtitle1" sx={styles.title}>
      {title}
    </Typography>
    <Box component={Paper} sx={styles.paperBox}>
      <TableContainer aria-label={`${title} table`}>
        <Table size="small">
          <TableHead>
            <TableRow sx={styles.headerRow}>
              <TableCell sx={styles.headerCell}>Category</TableCell>
              <TableCell align="right" sx={styles.headerCell}>
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={row.highlight ? styles.highlightRow : {}}
              >
                <TableCell sx={styles.getBodyCell(row.highlight)}>
                  {row.label}
                </TableCell>
                <TableCell align="right" sx={styles.getBodyCell(row.highlight)}>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
);

export default renderTable;
