import { useState } from 'react';

import { Box } from '@mui/material';

import GenericTable from '../components/global/table/GenericTable';
import DeleteDialog from '../components/global/table/DeleteDialog';

import {
  LEAD_MONITORING,
  LEAD_MONITORING_FILTER_TYPES,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/LeadMonitoring';

const LeadMonitoring = () => {
  const [open, setOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const deleteItemHandler = (row) => {
    setDeleteItemId(row.cl_sp_id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box px={2}>
      <GenericTable
        title={LEAD_MONITORING.title}
        filters={LEAD_MONITORING_FILTER_TYPES}
        filterType={LEAD_MONITORING.filterType}
        columns={TABLE_HEADER}
        data={TABLE_BODY}
        noBg
        trash
        deleteAction={deleteItemHandler}
      />

      <DeleteDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default LeadMonitoring;
