import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LeadDetailsModal from '../components/leadDetails/LeadDetailsModal';
import GenericTable from '../components/global/table/GenericTable';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  MY_LEAD_DETAILS,
  TABLE_HEADER,
  TABLE_BODY,
  FILTER_TYPES,
} from '../constants/pages/MyLeadsDetail';
import {
  AVAILABLE_LEAD_DETAILS,
  AVAILABLE_LEAD_FILTER_TYPES,
  AVAILABLE_LEAD_TABLE_BODY,
  AVAILABLE_LEAD_TABLE_HEADER,
} from '../constants/pages/AvailableLeadsDetail';

const styles = {
  marginTop: { xs: '30px', sm: '14px' },
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ManageSuppliers = () => {
  const [type, setType] = useState();

  const [open, setOpen] = useState(false);

  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  const query = useQuery();

  const mergeTitle = query.get('id');

  useEffect(() => {
    if (USER_TYPE == USER_TYPES.admin) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  const handleOpen = (type) => {
    setType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (USER_TYPE == USER_TYPES.admin) return null;

  return (
    <>
      <GenericTable
        title={
          USER_TYPE === USER_TYPES.client ? `Klairn’s ID ${mergeTitle}` : ''
        }
        filters={
          USER_TYPE === USER_TYPES.client
            ? FILTER_TYPES
            : AVAILABLE_LEAD_FILTER_TYPES
        }
        filterType={
          USER_TYPE === USER_TYPES.client
            ? MY_LEAD_DETAILS.filterType
            : AVAILABLE_LEAD_DETAILS.filterType
        }
        columns={
          USER_TYPE === USER_TYPES.client
            ? TABLE_HEADER
            : AVAILABLE_LEAD_TABLE_HEADER
        }
        data={
          USER_TYPE === USER_TYPES.client
            ? TABLE_BODY
            : AVAILABLE_LEAD_TABLE_BODY
        }
        excelFilter
        marginTop={styles}
        actions={{
          handleOpen,
          setProgress,
        }}
      />

      <LeadDetailsModal
        open={open}
        handleClose={handleClose}
        type={type}
        progress={progress}
      />
    </>
  );
};

export default ManageSuppliers;
