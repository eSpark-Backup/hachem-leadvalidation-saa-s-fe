import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import ManageModal from '../components/global/table/popovers/ManageModal';
import GenericTable from '../components/global/table/GenericTable';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';

import {
  SUPPLIER_MANAGEMENT,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/SupplierManagement';

const ManageSuppliers = () => {
  const [details, setDetails] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.admin) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  const requestHandler = (row, event) => {
    setDetails(row);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (USER_TYPE !== USER_TYPES.admin) return null;

  return (
    <Box>
      <GenericTable
        title={SUPPLIER_MANAGEMENT.title}
        columns={TABLE_HEADER}
        data={TABLE_BODY}
        noBg
        edit
        editAction={requestHandler}
        marginTop={{ xs: '30px', sm: '14px' }}
      />

      {anchorEl && (
        <ManageModal
          item={{ ...details, id: details?.supplier_id }}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
};

export default ManageSuppliers;
