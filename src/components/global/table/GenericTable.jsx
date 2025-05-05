import PropTypes from 'prop-types';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TableContainer,
  Typography,
} from '@mui/material';

import FilterRenderer from './FilterRenderer';
import TablePagination from './Pagination';
import FormatCell from './FormatCell';

import {
  headingBoxStyles,
  tableBodyRowStyles,
  tableContainerStyles,
  tableHeaderHeadingStyles,
  tableHeaderStyles,
  tableHeadingStyles,
  tableStyles,
} from '../../../styles/components/globals/table/Table';

import useTableFilter from '../../../hooks/useTableFilter';

const GenericTable = ({
  title,
  filters,
  select_filters,
  filterType,
  data,
  columns,
  detail,
  edit,
  detailAction,
  dashboard,
  fontWeight,
  noBg,
  trash,
}) => {
  const {
    paginatedData,
    filteredData,
    page,
    setPage,
    filterState,
    handleFilterChange,
    currentMonth,
    handleMonthChange,
  } = useTableFilter(data);

  return (
    <Box sx={!noBg ? tableContainerStyles : {}}>
      <Box sx={headingBoxStyles}>
        <Typography
          variant="h1"
          sx={{
            ...tableHeadingStyles,
            fontWeight: fontWeight ? fontWeight : 600,
          }}
        >
          {title}
        </Typography>

        <FilterRenderer
          filters={filters}
          dropdowns={select_filters}
          filterType={filterType}
          filterState={filterState}
          onFilterChange={handleFilterChange}
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
      </Box>

      <Box>
        <TableContainer sx={{ overflow: 'visible' }}>
          <Table sx={tableStyles}>
            <TableHead sx={tableHeaderStyles}>
              <TableRow>
                {columns.map((col) => (
                  <TableCell key={col.key} sx={tableHeaderHeadingStyles}>
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData.map((row, i) => (
                <TableRow key={i} sx={tableBodyRowStyles}>
                  {columns.map(({ key }, colIndex) => (
                    <FormatCell
                      key={key}
                      colIndex={colIndex}
                      colKey={key}
                      detail={detail}
                      detailAction={detailAction}
                      edit={edit}
                      row={row}
                      trash={trash}
                    />
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {!dashboard && (
          <TablePagination
            page={page}
            onChange={(e, val) => setPage(val)}
            count={Math.ceil(filteredData.length / 10)}
          />
        )}
      </Box>
    </Box>
  );
};

GenericTable.propTypes = {
  title: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.object),
  select_filters: PropTypes.arrayOf(PropTypes.object),
  filterType: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  detail: PropTypes.bool,
  edit: PropTypes.bool,
  detailAction: PropTypes.func,
  dashboard: PropTypes.bool,
  fontWeight: PropTypes.number,
  noBg: PropTypes.bool,
  trash: PropTypes.bool,
};

export default GenericTable;
