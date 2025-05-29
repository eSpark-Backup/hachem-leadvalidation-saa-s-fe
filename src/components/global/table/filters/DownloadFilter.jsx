import PropTypes from 'prop-types';

import { Box, Button, Typography } from '@mui/material';

import { downloadTableDataToCSV } from '../../../../utils/pages/leadsDetail/leadsDetail';

import {
  ALT_ATTRIBUTE,
  ICONS,
  TABLE_TEXTS,
} from '../../../../constants/components/globals/Table';

import { filterCommonBoxStyles } from '../../../../styles/components/globals/table/Table';
import { iconStyles } from '../../../../styles/components/globals/table/filters/DownloadCopy';
import { inputStyles } from '../../../../styles/components/globals/table/Common';

const DownloadFilter = ({
  tableHeader,
  tableBody,
  setSelectedRows,
  actions,
}) => {
  const { handleOpen, setProgress } = actions;

  const exportableKeys = tableHeader
    ?.filter((h) => h.key !== 'action')
    .map((h) => h.key);

  const headerLabels = tableHeader
    ?.filter((h) => h.key !== 'action')
    .map((h) => h.label);

  const prepareData = () => {
    return tableBody?.map((row) => exportableKeys.map((key) => row[key] ?? ''));
  };

  return (
    <Button
      sx={filterCommonBoxStyles}
      onClick={() =>
        downloadTableDataToCSV(
          [headerLabels, ...prepareData()],
          'leads.csv',
          handleOpen,
          setProgress
        )
      }
    >
      <Typography sx={{ ...inputStyles, height: 'auto' }}>
        {TABLE_TEXTS.download}
      </Typography>

      <Box sx={iconStyles}>
        <img src={ICONS.download} alt={ALT_ATTRIBUTE.download} />
      </Box>
    </Button>
  );
};

DownloadFilter.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableBody: PropTypes.arrayOf(PropTypes.object).isRequired,
  // setSelectedRows: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

export default DownloadFilter;
