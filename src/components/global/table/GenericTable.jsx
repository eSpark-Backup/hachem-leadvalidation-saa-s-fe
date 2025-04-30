import { useState } from 'react';

import dayjs from 'dayjs';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  IconButton,
  TableContainer,
  Typography,
} from '@mui/material';

import FilterRenderer from './FilterRenderer';
import TablePagination from './Pagination';

import Eye from '../../../assets/images/global/table-icons/show.svg';
import Edit from '../../../assets/images/global/table-icons/edit.svg';

import {
  actionButtonBoxStyles,
  buttonBoxStyles,
  editButtonStyles,
  eyeButtonStyles,
  headingBoxStyles,
  latestItemStyles,
  newLabelStyles,
  tableBodyItemStyles,
  tableBodyRowStyles,
  tableBodyStyles,
  tableContainerStyles,
  tableHeaderHeadingStyles,
  tableHeaderStyles,
  tableHeadingStyles,
  tableStyles,
} from '../../../styles/components/globals/Table';
import useTableFilter from '../../../hooks/useTableFilter';

const GenericTable = ({
  title,
  filters,
  select_filters,
  filterType,
  data,
  columns,
  detail,
  modal,
  detailAction,
  dashboard,
  fontWeight,
  inDashboard
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
    <Box sx={!inDashboard ? tableContainerStyles : {}}>
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
              <TableRow sx={{ marginBottom: '12px' }}>
                {columns.map((col) => (
                  <TableCell key={col.key} sx={tableHeaderHeadingStyles}>
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody sx={tableBodyStyles}>
              {paginatedData.map((row, i) => (
                <TableRow key={i} sx={tableBodyRowStyles}>
                  {columns.map((col, colIndex) => (
                    <TableCell
                      key={col.key}
                      sx={{
                        ...tableBodyItemStyles,
                        position: colIndex === 0 ? 'relative' : 'static',
                      }}
                    >
                      {colIndex === 0 && row.isLatest && (
                        <Box sx={latestItemStyles}>
                          <Typography sx={newLabelStyles}>New Leads</Typography>
                        </Box>
                      )}

                      {col.key === 'date' ? (
                        dayjs(row[col.key]).format('M/DD/YY')
                      ) : col.key === 'status' ? (
                        <Box sx={buttonBoxStyles(row['status'].toLowerCase())}>
                          <Typography>{row['status']}</Typography>
                        </Box>
                      ) : col.key === 'action' ? (
                        <Box sx={actionButtonBoxStyles}>
                          {detail && (
                            <IconButton
                              sx={eyeButtonStyles}
                              onClick={() => detailAction(row)}
                            >
                              <img src={Eye} alt="Show" />
                            </IconButton>
                          )}

                          {modal && (
                            <IconButton sx={editButtonStyles}>
                              <img src={Edit} alt="Edit" />
                            </IconButton>
                          )}
                        </Box>
                      ) : (
                        row[col.key]
                      )}
                    </TableCell>
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

export default GenericTable;
