import { useMemo, useState } from 'react';

import dayjs from 'dayjs';

/**
 * Custom React hook for filtering and paginating table data with optional month navigation.
 *
 * @param {Array<Object>} data - The array of data objects to be filtered and paginated.
 * @param {number} [itemsPerPage=10] - Number of items to display per page.
 * @returns {{
 *   paginatedData: Array<Object>,
 *   filteredData: Array<Object>,
 *   page: number,
 *   setPage: (page: number) => void,
 *   filterState: Object,
 *   handleFilterChange: (key: string, value: any) => void,
 *   currentMonth: import('dayjs').Dayjs,
 *   handleMonthChange: (direction: 'prev' | 'next') => void
 * }} An object containing paginated and filtered data, pagination state, filter state, and handlers for filters and month navigation.
 */
const useTableFilter = (data, itemsPerPage = 10) => {
  const [filterState, setFilterState] = useState({});
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [page, setPage] = useState(1);

  /**
   * Updates the filter state for a specific key and resets the page to 1.
   *
   * @function
   * @param {string} key - The key of the filter to update.
   * @param {*} value - The new value for the specified filter key.
   */
  const handleFilterChange = (key, value) => {
    setFilterState((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  /**
   * Changes the current month based on the given direction and resets the page to 1.
   *
   * @param {'prev'|'next'} direction - The direction to change the month. Use 'prev' to go to the previous month, 'next' to go to the next month.
   */
  const handleMonthChange = (direction) => {
    setCurrentMonth((prev) =>
      direction === 'prev' ? prev.subtract(1, 'month') : prev.add(1, 'month')
    );
    setPage(1);
  };

  /**
   * Memoized filtered data based on search, dropdown filters, and current month.
   *
   * Filters the `data` array according to the following criteria:
   * - Text search across all item values (case-insensitive).
   * - Dropdown filters for specific fields (case-insensitive).
   * - (Unused in return) Month filter comparing item's `date` field to `currentMonth`.
   *
   * @type {Array<Object>}
   * @param {Array<Object>} data - The original data array to filter.
   * @param {Object} filterState - The current filter state, including search and dropdown values.
   * @param {Object} currentMonth - The current month object (from dayjs).
   * @returns {Array<Object>} Filtered array of data matching the filter criteria.
   */
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const search = filterState.search || '';

      const matchesSearch =
        !search ||
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        );

      const matchesDropdowns = Object.entries(filterState).every(
        ([key, val]) => {
          if (!val || key === 'search') return true;

          if (key === 'leads_validation') {
            const leadVal = parseFloat(item.leads_validation?.replace('%', ''));

            if (val === '100%') {
              return leadVal === 100;
            }

            const match = val.match(/^(\d+)%-(\d+)%?$/);

            if (match) {
              const [_, minStr, maxStr] = match;
              const min = Number(minStr);
              const max = Number(maxStr);

              return leadVal >= min && leadVal <= max;
            }

            return true;
          }

          return item[key]
            ?.toString()
            .toLowerCase()
            .includes(val.toString().toLowerCase());
        }
      );

      const matchesMonth = dayjs(item.date).month() === currentMonth.month();
      console.log(matchesMonth);

      return matchesSearch && matchesDropdowns;
    });
  }, [data, filterState, currentMonth]);

  /**
   * Memoized array containing the current page of filtered data.
   *
   * @type {Array}
   * @readonly
   * @see filteredData
   * @see page
   * @see itemsPerPage
   *
   * @description
   * Calculates and returns a slice of `filteredData` corresponding to the current page,
   * based on the `page` number and `itemsPerPage` value.
   */
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, page, itemsPerPage]);

  return {
    paginatedData,
    filteredData,
    page,
    setPage,
    filterState,
    handleFilterChange,
    currentMonth,
    handleMonthChange,
  };
};

export default useTableFilter;
