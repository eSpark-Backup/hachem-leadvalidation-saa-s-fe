import { Box, Typography } from '@mui/material';

import Download from '../../../assets/images/global/table-icons/download.svg';

import { filterCommonBoxStyles } from '../../../styles/components/globals/table/Table';
import { iconStyles } from '../../../styles/components/globals/table/DownloadCopy';
import { inputStyles } from '../../../styles/components/globals/table/Common';

const DownloadFilter = () => {
  return (
    <Box sx={filterCommonBoxStyles}>
      <Typography sx={{ ...inputStyles, height: 'auto' }}>Download</Typography>

      <Box sx={iconStyles}>
        <img src={Download} alt="download" />
      </Box>
    </Box>
  );
};

export default DownloadFilter;
