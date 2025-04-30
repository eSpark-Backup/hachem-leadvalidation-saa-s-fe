import { Box, Typography } from '@mui/material';

import Download from '../../../assets/images/global/table-icons/download.svg';

import { filterCommonBoxStyles, iconStyles, inputStyles } from '../../../styles/components/globals/Table';

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
