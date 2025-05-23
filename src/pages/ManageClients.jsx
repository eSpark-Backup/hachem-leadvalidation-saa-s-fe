import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import LowCreditModal from '../components/global/table/popovers/LowCreditModal';
import ManageModal from '../components/global/table/popovers/ManageModal';
import GenericTable from '../components/global/table/GenericTable';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';

import {
  CLIENT_MANAGEMENT,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/ClientManagement';

const ManageClients = () => {
  const [details, setDetails] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const [lowCreditAnchorEl, setLowCreditAnchorEl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.admin) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

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

  if (USER_TYPE !== USER_TYPES.admin) return null;

  return (
    <Box>
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
        marginTop={{ xs: '30px', sm: '14px' }}
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
  );
};

export default ManageClients;
