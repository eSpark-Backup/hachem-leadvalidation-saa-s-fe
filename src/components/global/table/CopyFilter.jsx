import { Box, Typography } from '@mui/material';

import Copy from '../../../assets/images/global/table-icons/copy.svg';

import { filterCommonBoxStyles } from '../../../styles/components/globals/table/Table';
import { iconStyles } from '../../../styles/components/globals/table/DownloadCopy';
import { inputStyles } from '../../../styles/components/globals/table/Common';

const CopyFilter = () => {
  return (
    <Box sx={filterCommonBoxStyles}>
      <Typography sx={{ ...inputStyles, height: 'auto' }}>Copy</Typography>

      <Box sx={iconStyles}>
        <img src={Copy} alt="Copy" />
      </Box>
    </Box>
  );
};

export default CopyFilter;
