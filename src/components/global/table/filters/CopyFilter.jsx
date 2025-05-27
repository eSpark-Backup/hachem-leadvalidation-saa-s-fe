import PropTypes from 'prop-types';

import { Box, Button, Typography } from '@mui/material';

import { copyTableDataToClipboard } from '../../../../utils/pages/leadsDetail/leadsDetail';

import {
  ALT_ATTRIBUTE,
  ICONS,
  TABLE_TEXTS,
} from '../../../../constants/components/globals/Table';

import { filterCommonBoxStyles } from '../../../../styles/components/globals/table/Table';
import { iconStyles } from '../../../../styles/components/globals/table/filters/DownloadCopy';
import { inputStyles } from '../../../../styles/components/globals/table/Common';

const CopyFilter = ({
  tableHeader,
  tableBody,
  setSelectedRows,
  selectedRows,
  actions,
}) => {
  const { handleOpen } = actions;

  const isSelctedRows = () => {
    return selectedRows?.length
      ? tableBody.filter((row) => selectedRows.includes(row.id))
      : tableBody;
  };

  const exportableKeys = tableHeader
    ?.filter((h) => h.key !== 'action')
    .map((h) => h.key);

  const headerLabels = tableHeader
    ?.filter((h) => h.key !== 'action')
    .map((h) => h.label);

  const prepareData = () => {
    return isSelctedRows()?.map((row) =>
      exportableKeys.map((key) => row[key] ?? '')
    );
  };

  return (
    <Button
      sx={filterCommonBoxStyles}
      onClick={() =>
        copyTableDataToClipboard(
          [headerLabels, ...prepareData()],
          setSelectedRows,
          handleOpen
        )
      }
    >
      <Typography sx={{ ...inputStyles, height: 'auto' }}>
        {TABLE_TEXTS.copy}
      </Typography>

      <Box sx={iconStyles}>
        <img src={ICONS.copy} alt={ALT_ATTRIBUTE.copy} />
      </Box>
    </Button>
  );
};

CopyFilter.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableBody: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedRows: PropTypes.func.isRequired,
  selectedRows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default CopyFilter;
