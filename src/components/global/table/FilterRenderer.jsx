import { Box } from '@mui/material';

import SearchBar from './SearchBar';
import MonthSelector from './MonthSelector';
import DropdownFilter from './DropdownFilter';
import CopyFilter from './CopyFilter';
import DownloadFilter from './DownloadFilter';

import { filterBoxStyles } from '../../../styles/components/globals/Table';

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

export default FilterRenderer;
