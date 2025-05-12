import PropTypes from 'prop-types';

import dayjs from 'dayjs';

import { Box, IconButton, TableCell, Typography } from '@mui/material';

import DotBadge from '../DotBadge';

import { ALT_ATTRIBUTE, ICONS } from '../../../constants/components/globals/Table';

import {
  actionButtonBoxStyles,
  buttonBoxStyles,
  creditBoxStyles,
  creditTextStyles,
  editButtonStyles,
  eyeButtonStyles,
  latestItemStyles,
  lowCreditBoxStyles,
  lowCreditTextStyles,
  newLabelStyles,
  positiveResultTextStyles,
  scoringBoxStyles,
  scoringHeadStyles,
  scoringPointsStyles,
  tableBodyItemStyles,
  trashButtonStyles,
  validTextStyles,
} from '../../../styles/components/globals/table/FormatCell';

const EditIconButton = ({ myLeads, editAction, row }) => (
  <IconButton
    sx={{
      ...editButtonStyles,
      display: myLeads ? 'none' : 'block',
    }}
    onClick={(event) => editAction(row, event)}
    className="edit-icon"
  >
    <img src={ICONS.edit} alt={ALT_ATTRIBUTE.edit} />
  </IconButton>
);

const formatCellItem = (
  colKey,
  row,
  detail,
  edit,
  trash,
  detailAction,
  editAction,
  deleteAction,
  onEnterCursor,
  myLeads
) => {
  if (colKey === 'date' && typeof row[colKey] !== 'string') {
    return dayjs(row[colKey]).format('M/DD/YY');
  }

  if (colKey === 'status') {
    return (
      <Box sx={buttonBoxStyles(row[colKey]?.toLowerCase())}>
        <Typography>{row[colKey]}</Typography>
      </Box>
    );
  }

  if (colKey === 'credit') {
    return (
      <Box
        sx={row?.isLowCredit ? lowCreditBoxStyles : creditBoxStyles}
        onMouseEnter={(event) =>
          row?.isLowCredit && onEnterCursor?.(event, 'pointerenter')
        }
        onMouseLeave={() =>
          row?.isLowCredit && onEnterCursor?.(null, 'pointerleave')
        }
      >
        <Typography
          sx={row?.isLowCredit ? lowCreditTextStyles : creditTextStyles}
        >
          {row[colKey]}
        </Typography>
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

  if (typeof row[colKey] === 'string' && row[colKey].includes(' - ')) {
    const [main, points] = row[colKey].split(' - ');

    return (
      <Box sx={scoringBoxStyles}>
        <Typography sx={scoringHeadStyles}>
          {colKey === 'date' ? dayjs(main).format('M/DD/YY') : main}
        </Typography>

        <Typography sx={scoringPointsStyles}>
          {points === '0' ? '-' : points}
        </Typography>
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

        {(edit || myLeads) &&
          (row?.isLowCredit ? (
            <DotBadge
              color="#FF0000"
              horizontal="right"
              icon={
                <EditIconButton
                  myLeads={myLeads}
                  editAction={editAction}
                  row={row}
                />
              }
            />
          ) : (
            <EditIconButton
              myLeads={myLeads}
              editAction={editAction}
              row={row}
            />
          ))}

        {trash && (
          <IconButton sx={trashButtonStyles} onClick={() => deleteAction(row)}>
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
  editAction,
  deleteAction,
  onEnterCursor,
  hasPoints,
  myLeads,
}) => {
  return (
    <TableCell key={colKey} sx={tableBodyItemStyles(hasPoints)}>
      {colIndex === 0 && row.isLatest && (
        <Box sx={latestItemStyles}>
          <Typography sx={newLabelStyles}>{row.isLatestText}</Typography>
        </Box>
      )}

      {formatCellItem(
        colKey,
        row,
        detail,
        edit,
        trash,
        detailAction,
        editAction,
        deleteAction,
        onEnterCursor,
        myLeads
      )}
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
  editAction: PropTypes.func,
  deleteAction: PropTypes.func,
  onEnterCursor: PropTypes.func,
  hasPoints: PropTypes.bool,
  myLeads: PropTypes.bool,
};

export default FormatCell;
