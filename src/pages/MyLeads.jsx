import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CommonDialog from '../components/global/table/dialog/CommonDialog';
import GenericTable from '../components/global/table/GenericTable';
import NotFound from './NotFound';

import { USER_TYPE } from '../utils/auth';

import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  FILTER_TYPES,
  MY_LEADS,
  SELECT_FILTERS,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/MyLeads';

const MyLeads = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const goToPage = (row) => {
    navigate(`${ROUTES.dashboard}/${ROUTES.myLeadDetails}`, {
      state: { title: row.supplier_id },
    });
  };

  return (
    <>
      {USER_TYPE === USER_TYPES.client ? (
        <>
          <GenericTable
            title={MY_LEADS.title}
            filters={FILTER_TYPES}
            select_filters={SELECT_FILTERS}
            filterType={MY_LEADS.filterType}
            columns={TABLE_HEADER}
            data={TABLE_BODY}
            detail
            detailAction={goToPage}
            marginTop={{ xs: '30px', sm: '14px' }}
            editAction={() => setOpen(true)}
            myLeads
          />

          <CommonDialog open={open} handleClose={handleClose} lead />
        </>
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}
    </>
  );
};

export default MyLeads;
