import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import { Box, IconButton, TableCell, Typography } from '@mui/material';

import { ICONS } from '../../../constants/components/globals/Table';

import {
  actionButtonBoxStyles,
  buttonBoxStyles,
  editButtonStyles,
  eyeButtonStyles,
  latestItemStyles,
  newLabelStyles,
  positiveResultTextStyles,
  tableBodyItemStyles,
  trashButtonStyles,
  validTextStyles,
} from '../../../styles/components/globals/table/FormatCell';

const formatCell = (colKey, row, detail, edit, trash, detailAction) => {
  if (colKey === 'date') {
    return dayjs(row[colKey]).format('M/DD/YY');
  }

  if (colKey === 'status') {
    return (
      <Box sx={buttonBoxStyles(row[colKey]?.toLowerCase())}>
        <Typography>{row[colKey]}</Typography>
      </Box>
    );
  }

  if (colKey === 'validation') {
    const { valid, positive_result } = row[colKey];
    return (
      <Box>
        <Typography sx={validTextStyles}>{`${valid} Valid`}</Typography>
        <Typography
          sx={positiveResultTextStyles}
        >{`${positive_result} Result`}</Typography>
      </Box>
    );
  }

  if (colKey === 'action') {
    return (
      <Box sx={actionButtonBoxStyles}>
        {detail && (
          <IconButton sx={eyeButtonStyles} onClick={() => detailAction(row)}>
            <img src={ICONS.eye} alt="Show" />
          </IconButton>
        )}

        {edit && (
          <IconButton sx={editButtonStyles}>
            <img src={ICONS.edit} alt="Edit" />
          </IconButton>
        )}

        {trash && (
          <IconButton sx={trashButtonStyles}>
            <img src={ICONS.trash} alt="Trash" />
          </IconButton>
        )}
      </Box>
    );
  }

  return row[colKey];
};

const FormatCell = ({
  colIndex,
  colKey,
  row,
  detail = false,
  edit = false,
  trash = false,
  detailAction,
}) => {

  return (
    <TableCell
      key={colKey}
      sx={{
        ...tableBodyItemStyles,
        position: colIndex === 0 ? 'relative' : 'static',
      }}
    >
      {colIndex === 0 && row.isLatest && (
        <Box sx={latestItemStyles}>
          <Typography sx={newLabelStyles}>{row.isLatestText}</Typography>
        </Box>
      )}

      {formatCell(colKey, row, detail, edit, trash, detailAction)}
    </TableCell>
  );
};

FormatCell.propTypes = {
  colIndex: PropTypes.number.isRequired,
  colKey: PropTypes.string.isRequired,
  row: PropTypes.object,
  detail: PropTypes.bool,
  edit: PropTypes.bool,
  trash: PropTypes.bool,
  detailAction: PropTypes.func,
};

export default FormatCell;
