import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import CommonDialog from '../components/global/table/dialog/CommonDialog';
import GenericTable from '../components/global/table/GenericTable';
import NotFound from './NotFound';

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
  const [payload, setPayload] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [pickerID] = useState('Leads Monitoring');
  const [header, setHeader] = useState(TABLE_HEADER);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [isViewingHistory, setIsViewingHistory] = useState(false);
  console.log(payload);
  console.log(deleteItemId);

  useEffect(() => {
    if (isViewingHistory) {
      const addActionObj = { key: 'action', label: '' };

      setHeader([...header, addActionObj]);
    } else {
      setHeader(TABLE_HEADER);
    }
  }, [isViewingHistory]);

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
        <Box>
          <GenericTable
            title={LEAD_MONITORING.title}
            filters={LEAD_MONITORING_FILTER_TYPES}
            filterType={LEAD_MONITORING.filterType}
            columns={header}
            data={TABLE_BODY}
            noBg
            trash
            deleteAction={deleteItemHandler}
            marginTop={{ xs: '30px', sm: '14px' }}
            leadMonitoring
            pickerObjects={{
              payload,
              setPayload,
              pickerID,
              anchorEl,
              setAnchorEl,
              setIsViewingHistory,
              isViewingHistory,
            }}
          />

          <CommonDialog open={open} handleClose={handleClose} />
        </Box>
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}
    </>
  );
};

export default LeadMonitoring;
