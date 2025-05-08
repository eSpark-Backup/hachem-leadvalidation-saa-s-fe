import { useNavigate } from 'react-router-dom';

// Import MUI Box component for layout spacing
import { Box } from '@mui/material';

// Import custom component for displaying top summary cards
import DashboardTopCards from '../components/dashboard/DashboardTopCards.jsx';

// Import predefined card layouts and data for different user types
import {
  ADMIN_CARDS,
  CLIENT_CARDS,
  SUPPLIER_CARDS,
  SUPPLIER_CARDS_DATA,
  ADMIN_CARDS_DATA,
  CLIENT_CARDS_DATA,
  CLIENT_LEADS,
  SUPPLIER_AVAILABLE_LEADS,
} from '../constants/components/dashboard/DashboardTopCards.js';

// Import component for showing client-specific stats
import DashboardStaticsCards from '../components/dashboard/DashboardStaticsCards.jsx';
import GenericTable from '../components/global/table/GenericTable.jsx';

// Import text content and styles for the dashboard page
import { TableCard } from '../styles/components/dashboard/DashboardPage.js';

// Import user type constants and the current user type utility
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth.js';
import { USER_TYPE } from '../utils/auth.js';
import AdminDashboard from '../components/dashboard/admin/AdminDashboard.jsx';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToPage = (row) => {
    navigate(
      `${ROUTES.dashboard}/${USER_TYPE === USER_TYPES.client ? ROUTES.myLeadDetails : ROUTES.avalaibleLeadsDetails}`,
      {
        state: {
          title:
            USER_TYPE === USER_TYPES.client ? row.supplier_id : row.client_id,
        },
      }
    );
  };

  return (
    <>
      {/* Top cards section based on user type (admin, client, supplier) */}
      <Box sx={{ py: 1 }}>
        <DashboardTopCards
          content={
            USER_TYPE === USER_TYPES.client
              ? CLIENT_CARDS
              : USER_TYPE === USER_TYPES.supplier
                ? SUPPLIER_CARDS
                : ADMIN_CARDS
          }
          data={
            USER_TYPE === USER_TYPES.client
              ? CLIENT_CARDS_DATA
              : USER_TYPE === USER_TYPES.supplier
                ? SUPPLIER_CARDS_DATA
                : ADMIN_CARDS_DATA
          }
        />
      </Box>
      {/* Table card with style applied */}
      {USER_TYPE != USER_TYPES.admin && (
        <Box sx={TableCard}>
          <GenericTable
            title={
              USER_TYPE === USER_TYPES.client
                ? CLIENT_LEADS.title
                : SUPPLIER_AVAILABLE_LEADS.title
            }
            filters={
              USER_TYPE === USER_TYPES.client
                ? CLIENT_LEADS.filterTypes
                : SUPPLIER_AVAILABLE_LEADS.filterTypes
            }
            select_filters={
              USER_TYPE === USER_TYPES.client
                ? CLIENT_LEADS.select_filters
                : SUPPLIER_AVAILABLE_LEADS.select_filters
            }
            filterType={
              USER_TYPE === USER_TYPES.client
                ? CLIENT_LEADS.filterType
                : SUPPLIER_AVAILABLE_LEADS.filterType
            }
            columns={
              USER_TYPE === USER_TYPES.client
                ? CLIENT_LEADS.header
                : SUPPLIER_AVAILABLE_LEADS.header
            }
            data={
              USER_TYPE === USER_TYPES.client
                ? CLIENT_LEADS.data
                : SUPPLIER_AVAILABLE_LEADS.data
            }
            detailAction={goToPage}
            dashboard={USER_TYPE === USER_TYPES.client}
            noBg
            detail
            fontWeight={800}
          />
        </Box>
      )}

      {USER_TYPE == USER_TYPES.admin && <AdminDashboard />}
      {/* Show stat cards only if user is a client */}
      {USER_TYPE === USER_TYPES.client && <DashboardStaticsCards />}
    </>
  );
};

export default Dashboard;
