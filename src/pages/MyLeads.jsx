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
import {
  useGetLeadsQuery,
  useCreateLeadMutation,
  useUpdateLeadMutation,
  useDeleteLeadMutation,
} from '../redux/slices/client/myLeads';

const MyLeads = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
    setSelectedLead(null);
  };

  const goToPage = (row) => {
    navigate(`${ROUTES.dashboard}/${ROUTES.myLeadDetails}`, {
      state: { title: row.supplier_id },
    });
  };

  // Determine API type
  const leadType = USER_TYPE === USER_TYPES.client ? 'client' : 'supplier';

  // Queries
  const {
    data: leads = [],
    isLoading,
    error,
  } = useGetLeadsQuery({ type: leadType });

  // Mutations
  const [createLead] = useCreateLeadMutation();
  const [updateLead] = useUpdateLeadMutation();
  const [deleteLead] = useDeleteLeadMutation();

  // Handlers
  const handleCreateLead = async (leadData) => {
    try {
      await createLead({ type: leadType, body: leadData }).unwrap();
      handleClose();
    } catch (err) {
      console.error('Create failed:', err);
    }
  };

  const handleUpdateLead = async (leadData) => {
    try {
      await updateLead({
        id: selectedLead?.id,
        type: leadType,
        body: leadData,
      }).unwrap();
      handleClose();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const handleDeleteLead = async (id) => {
    try {
      await deleteLead({ id, type: leadType }).unwrap();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleEditAction = (row) => {
    setSelectedLead(row);
    setEditMode(true);
    setOpen(true);
  };

  const handleDialogSubmit = (data) => {
    if (editMode) {
      handleUpdateLead(data);
    } else {
      handleCreateLead(data);
    }
  };

  // Unauthorized users
  if (USER_TYPE !== USER_TYPES.client) {
    return <NotFound btnLink={ROUTES.dashboard} />;
  }

  return (
    <>
      <GenericTable
        title={MY_LEADS.title}
        filters={FILTER_TYPES}
        select_filters={SELECT_FILTERS}
        filterType={MY_LEADS.filterType}
        columns={TABLE_HEADER}
        data={leads || TABLE_BODY}
        detail
        detailAction={goToPage}
        marginTop={{ xs: '30px', sm: '14px' }}
        editAction={handleEditAction}
        deleteAction={(row) => handleDeleteLead(row.id)}
        myLeads
        isLoading={isLoading}
        error={error}
      />

      <CommonDialog
        open={open}
        handleClose={handleClose}
        lead
        onSubmit={handleDialogSubmit}
        defaultValues={selectedLead}
      />
    </>
  );
};

export default MyLeads;
