import PropTypes from 'prop-types';

import { Box, Pagination, PaginationItem } from '@mui/material';

import { ICONS } from '../../../constants/components/globals/Table';

import { paginationBoxStyles } from '../../../styles/components/globals/table/Pagination';

const CustomPrevIcon = () => {
  return (
    <Box mr={0.4}>
      <img src={ICONS.largeLeftArrow} />
    </Box>
  );
};

const CustomNextIcon = () => (
  <Box ml={0.4}>
    <img src={ICONS.largeRightArrow} />
  </Box>
);

const TablePagination = ({ page, onChange, count }) => {
  return (
    <Box sx={paginationBoxStyles}>
      <Pagination
        count={count}
        page={page}
        onChange={(e, val) => onChange(e, val)}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: CustomPrevIcon, next: CustomNextIcon }}
            disableRipple
            {...item}
          />
        )}
      />
    </Box>
  );
};

TablePagination.propTypes = {
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default TablePagination;
