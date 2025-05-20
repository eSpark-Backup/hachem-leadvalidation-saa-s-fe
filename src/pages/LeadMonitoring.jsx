import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import CommonDialog from '../components/global/table/dialog/CommonDialog';
import GenericTable from '../components/global/table/GenericTable';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';

import {
  LEAD_MONITORING,
  LEAD_MONITORING_FILTER_TYPES,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/LeadMonitoring';

const LeadMonitoring = () => {
  const [open, setOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  console.log(deleteItemId);
  const navigate = useNavigate();

  const deleteItemHandler = (row) => {
    setDeleteItemId(row.cl_sp_id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.admin) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  if (USER_TYPE !== USER_TYPES.admin) return null;

  return (
    <Box>
      <GenericTable
        title={LEAD_MONITORING.title}
        filters={LEAD_MONITORING_FILTER_TYPES}
        filterType={LEAD_MONITORING.filterType}
        columns={TABLE_HEADER}
        data={TABLE_BODY}
        noBg
        trash
        deleteAction={deleteItemHandler}
        marginTop={{ xs: '30px', sm: '14px' }}
        leadMonitoring
      />

      <CommonDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default LeadMonitoring;
