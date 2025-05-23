import { useState } from 'react';
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
import MonthSelector from './MonthSelector';
import TablePagination from './Pagination';
import FormatCell from './FormatCell';

import {
  genericTableHeadingBoxStyles,
  headingBoxStyles,
  noDataRowStyles,
  noDataTextStyles,
  tableBodyRowStyles,
  tableContainerStyles,
  tableHeaderHeadingStyles,
  tableHeaderStyles,
  tableHeadingStyles,
  tableStyles,
} from '../../../styles/components/globals/table/Table';

import useTableFilter from '../../../hooks/useTableFilter';
import { GENERIC_TABLE } from '../../../constants/components/globals/table/GenericTable';

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
  editAction,
  deleteAction,
  dashboard,
  fontWeight,
  noBg,
  trash,
  onEnterCursor,
  hasPoints = false,
  excelFilter = false,
  marginTop,
  leadMonitoring = false,
  leadStatus = false,
  myLeads = false,
  pickerObjects,
  actions,
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

  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRow = (rowId) => {
    setSelectedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  return (
    <Box sx={!noBg ? tableContainerStyles(marginTop) : { mt: marginTop }}>
      <Box sx={headingBoxStyles(leadMonitoring, leadStatus)}>
        <Box sx={genericTableHeadingBoxStyles}>
          <Typography
            variant="h1"
            sx={{
              ...tableHeadingStyles,
              fontWeight: fontWeight ?? 600,
              mx: 0,
            }}
          >
            {title}
          </Typography>

          {filterType?.month && (
            <Box
              key={filterType.month}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <MonthSelector
                currentMonth={currentMonth}
                onChange={handleMonthChange}
              />
            </Box>
          )}
        </Box>

        <FilterRenderer
          filters={filters}
          dropdowns={select_filters}
          filterType={filterType}
          filterState={filterState}
          onFilterChange={handleFilterChange}
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          tableHeader={columns}
          tableBody={paginatedData}
          setSelectedRows={setSelectedRows}
          selectedRows={selectedRows}
          leadMonitoring={leadMonitoring}
          pickerObjects={pickerObjects}
          actions={actions}
        />
      </Box>

      <Box>
        <TableContainer sx={{ overflow: 'auto' }}>
          <Table sx={tableStyles}>
            <TableHead sx={tableHeaderStyles}>
              <TableRow>
                {columns.map(({ key, label }) => (
                  <TableCell key={key} sx={tableHeaderHeadingStyles}>
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData?.length ? (
                paginatedData.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={tableBodyRowStyles(
                      excelFilter,
                      selectedRows.includes(row.id),
                      myLeads &&
                        (row.status === 'Pending' || row.status === 'Reject')
                    )}
                    onClick={() => excelFilter && toggleRow(row.id)}
                  >
                    {columns.map(({ key }, colIndex) => (
                      <FormatCell
                        key={key}
                        colIndex={colIndex}
                        colKey={key}
                        detail={detail}
                        detailAction={detailAction}
                        editAction={editAction}
                        deleteAction={deleteAction}
                        edit={edit}
                        row={row}
                        trash={trash}
                        onEnterCursor={onEnterCursor}
                        hasPoints={hasPoints}
                        myLeads={
                          myLeads &&
                          (row.status === 'Pending' || row.status === 'Reject')
                        }
                      />
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow sx={noDataRowStyles}>
                  <TableCell colSpan={columns.length}>
                    <Typography sx={noDataTextStyles}>
                      {GENERIC_TABLE.noDataFound}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
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
  onEnterCursor: PropTypes.func,
  hasPoints: PropTypes.bool,
  inDashboard: PropTypes.bool,
  editAction: PropTypes.func,
  deleteAction: PropTypes.func,
  excelFilter: PropTypes.bool,
  marginTop: PropTypes.object,
  leadMonitoring: PropTypes.bool,
  leadStatus: PropTypes.bool,
  myLeads: PropTypes.bool,
  pickerObjects: PropTypes.object,
  actions: PropTypes.object,
};

export default GenericTable;
