import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import SearchBar from './SearchBar';
import CopyFilter from './filters/CopyFilter';
import MonthSelector from './MonthSelector';
import DownloadFilter from './filters/DownloadFilter';
import DropdownFilter from './filters/DropdownFilter';
import DatePickerFilter from './DatePickerFilter';
import LeadMonitoringHeaderButtons from './LeadMonitoringHeaderButtons';

import { externalActionButtonsStyles, filterBoxStyles } from '../../../styles/components/globals/table/FilterRenderer';

const FilterRenderer = ({
  filters = [],
  dropdowns = [],
  filterType = {},
  filterState,
  onFilterChange,
  currentMonth,
  onMonthChange,
  tableHeader,
  tableBody,
  setSelectedRows,
  selectedRows,
}) => {
  return (
    <Box sx={filterBoxStyles}>
      {filters.map((filter) => {
        switch (filter.type) {
          case filterType.search:
            return (
              <SearchBar
                key={filter.key}
                value={filterState?.[filter.key] || ''}
                onChange={(val) => onFilterChange(filter.key, val)}
              />
            );

          case filterType.dropdown:
            return dropdowns.map((dropdown) => (
              <DropdownFilter
                key={dropdown.key}
                label={dropdown.label}
                value={filterState?.[dropdown.key] || ''}
                options={dropdown.options}
                onChange={(val) => onFilterChange(dropdown.key, val)}
              />
            ));

          case filterType.month:
            return (
              <Box
                key={filter.key}
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                <MonthSelector
                  currentMonth={currentMonth}
                  onChange={onMonthChange}
                />
              </Box>
            );

          case filterType.date:
            return (
              <DatePickerFilter
                key={filter.key}
                currentMonth={currentMonth}
                onChange={onMonthChange}
              />
            );

          case filterType.history:
            return <LeadMonitoringHeaderButtons key={filter.key} />;

          case filterType.copy || filterType.download:
            return (
              <Box sx={externalActionButtonsStyles}>
                <CopyFilter
                  key={filter.key}
                  tableHeader={tableHeader}
                  tableBody={tableBody}
                  setSelectedRows={setSelectedRows}
                  selectedRows={selectedRows}
                />

                <DownloadFilter
                  key={filter.key}
                  tableHeader={tableHeader}
                  tableBody={tableBody}
                  setSelectedRows={setSelectedRows}
                />
              </Box>
            );

          default:
            return null;
        }
      })}
    </Box>
  );
};

FilterRenderer.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  dropdowns: PropTypes.arrayOf(PropTypes.object),
  filterType: PropTypes.objectOf(PropTypes.string),
  filterState: PropTypes.object,
  onFilterChange: PropTypes.func,
  currentMonth: PropTypes.object,
  onMonthChange: PropTypes.func,
  tableHeader: PropTypes.arrayOf(PropTypes.object),
  tableBody: PropTypes.arrayOf(PropTypes.object),
  setSelectedRows: PropTypes.func,
  selectedRows: PropTypes.array,
};

export default FilterRenderer;
