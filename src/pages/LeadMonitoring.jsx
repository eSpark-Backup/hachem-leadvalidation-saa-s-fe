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
import NotFound from './NotFound';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import { USER_TYPE } from '../utils/auth';

const LeadMonitoring = () => {
  const [open, setOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  console.log(deleteItemId);

  const deleteItemHandler = (row) => {
    setDeleteItemId(row.cl_sp_id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {USER_TYPE === USER_TYPES.admin ? (
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
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}
    </>
  );
};

export default LeadMonitoring;
