import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import SearchBar from './SearchBar';
import CopyFilter from './CopyFilter';
import LeadMonitoringHeaderButtons from './LeadMonitoringHeaderButtons';
import MonthSelector from './MonthSelector';
import DownloadFilter from './DownloadFilter';
import DropdownFilter from './DropdownFilter';
import DatePickerFilter from './DatePickerFilter';

import { filterBoxStyles } from '../../../styles/components/globals/table/FilterRenderer';

const FilterRenderer = ({
  filters = [],
  dropdowns = [],
  filterType = {},
  filterState,
  onFilterChange,
  currentMonth,
  onMonthChange,
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
              <MonthSelector
                key={filter.key}
                currentMonth={currentMonth}
                onChange={onMonthChange}
              />
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

          case filterType.copy:
            return <CopyFilter key={filter.key} />;

          case filterType.download:
            return <DownloadFilter key={filter.key} />;

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
};

export default FilterRenderer;
