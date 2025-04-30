import { Box, Pagination, PaginationItem } from '@mui/material';

import ArrowLeftIcon from '../../../assets/images/global/table-icons/left.svg';
import ArrowRightIcon from '../../../assets/images/global/table-icons/right.svg';

import { paginationBox } from '../../../styles/components/globals/Table';

const CustomPrevIcon = () => {
  return (
    <Box mr={0.4}>
      <img src={ArrowLeftIcon} />
    </Box>
  );
};

const CustomNextIcon = () => (
  <Box ml={0.4}>
    <img src={ArrowRightIcon} />
  </Box>
);

const TablePagination = ({ page }) => {
  return (
    <Box sx={paginationBox}>
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

export default TablePagination;
