import { Box, Typography } from '@mui/material';

import {
  ALT_ATTRIBUTE,
  ICONS,
  TABLE_TEXTS,
} from '../../../constants/components/globals/Table';

import { filterCommonBoxStyles } from '../../../styles/components/globals/table/Table';
import { inputStyles } from '../../../styles/components/globals/table/Common';
import { iconStyles } from '../../../styles/components/globals/table/DownloadCopy';

const DownloadFilter = () => {
  return (
    <Box sx={filterCommonBoxStyles}>
      <Typography sx={{ ...inputStyles, height: 'auto' }}>
        {TABLE_TEXTS.download}
      </Typography>

      <Box sx={iconStyles}>
        <img src={ICONS.download} alt={ALT_ATTRIBUTE.download} />
      </Box>
    </Box>
  );
};

export default DownloadFilter;
