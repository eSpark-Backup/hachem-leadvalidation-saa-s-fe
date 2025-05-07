import { useState } from 'react';

import { Box } from '@mui/material';

import GenericTable from '../components/global/table/GenericTable';
import ManageModal from '../components/global/table/ManageModal';

import {
  SUPPLIER_MANAGEMENT,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/SupplierManagement';

const ManageSuppliers = () => {
  const [details, setDetails] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const requestHandler = (row, event) => {
    setDetails(row);

    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box px={2}>
      <GenericTable
        title={SUPPLIER_MANAGEMENT.title}
        columns={TABLE_HEADER}
        data={TABLE_BODY}
        noBg
        edit
        editAction={requestHandler}
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
