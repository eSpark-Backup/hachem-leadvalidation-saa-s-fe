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

// Styles outside component
const styles = {
  marginTop: { xs: '30px', sm: '14px' },
};

// Static texts and constants outside component
const STATIC_TEXTS = {
  noAccessRedirect: ROUTES.dashboard,
  userTypeRequired: USER_TYPES.admin,
  title: SUPPLIER_MANAGEMENT.title,
};

const ManageSuppliers = () => {
  const [details, setDetails] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE !== STATIC_TEXTS.userTypeRequired) {
      navigate(STATIC_TEXTS.noAccessRedirect);
    }
  }, [navigate]);

  const requestHandler = (row, event) => {
    setDetails(row);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (USER_TYPE !== STATIC_TEXTS.userTypeRequired) return null;

  return (
    <Box>
      <GenericTable
        title={STATIC_TEXTS.title}
        columns={TABLE_HEADER}
        data={TABLE_BODY}
        noBg
        edit
        editAction={requestHandler}
        marginTop={styles.marginTop}
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
