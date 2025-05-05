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

const TablePagination = ({ page }) => {
  return (
    <Box sx={paginationBoxStyles}>
      <Pagination
        count={1}
        page={page}
        onChange={(e, val) => console.log(val)}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: CustomPrevIcon, next: CustomNextIcon }}
            {...item}
          />
        )}
      />
    </Box>
  );
};

TablePagination.propTypes = {
  page: PropTypes.number.isRequired,
};

export default TablePagination;
