import { useMemo, useState } from 'react';

import dayjs from 'dayjs';

const useTableFilter = (data, itemsPerPage = 10) => {
  const [filterState, setFilterState] = useState({});
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [page, setPage] = useState(1);

  const handleFilterChange = (key, value) => {
    setFilterState((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleMonthChange = (direction) => {
    setCurrentMonth((prev) =>
      direction === 'prev' ? prev.subtract(1, 'month') : prev.add(1, 'month')
    );
    setPage(1);
  };

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
          return item[key]
            ?.toString()
            .toLowerCase()
            .includes(val.toString().toLowerCase());
        }
      );

      const matchesMonth = dayjs(item.date).month() === currentMonth.month();

      return matchesSearch && matchesDropdowns;
    });
  }, [data, filterState, currentMonth]);

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
