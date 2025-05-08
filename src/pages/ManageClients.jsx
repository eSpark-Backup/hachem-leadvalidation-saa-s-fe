import { useState } from 'react';

import { Box } from '@mui/material';

import LowCreditModal from '../components/global/table/LowCreditModal';
import GenericTable from '../components/global/table/GenericTable';
import ManageModal from '../components/global/table/ManageModal';

import {
  CLIENT_MANAGEMENT,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/ClientManagement';
import NotFound from './NotFound';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import { USER_TYPE } from '../utils/auth';

const ManageClients = () => {
  const [details, setDetails] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [lowCreditAnchorEl, setLowCreditAnchorEl] = useState(null);

  const requestHandler = (row, event) => {
    setDetails(row);

    setAnchorEl(event?.currentTarget ?? null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLowCreditAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setLowCreditAnchorEl(event.currentTarget);
  };

  return (
    <>
      {USER_TYPE === USER_TYPES.admin ? (
        <Box px={2}>
          <GenericTable
            title={CLIENT_MANAGEMENT.title}
            columns={TABLE_HEADER}
            data={TABLE_BODY}
            noBg
            edit
            editAction={requestHandler}
            onEnterCursor={(event, type) => {
              if (type === 'pointerenter') handlePopoverOpen(event);
              // if (type === 'pointerleave') handleClose();
            }}
          />

          {anchorEl && (
            <ManageModal
              item={{ ...details, id: details?.client_id }}
              client
              anchorEl={anchorEl}
              handleClose={handleClose}
            />
          )}

          {lowCreditAnchorEl && (
            <LowCreditModal
              anchorEl={lowCreditAnchorEl}
              handleClose={handleClose}
            />
          )}
        </Box>
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}
    </>
  );
};

export default ManageClients;
