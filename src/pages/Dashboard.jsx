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
} from '../constants/components/dashboard/DashboardTopCards.js';

// Import component for showing client-specific stats
import DashboardStaticsCards from '../components/dashboard/DashboardStaticsCards.jsx';

// Import text content and styles for the dashboard page
import { DASHBOARD_PAGE } from '../constants/components/dashboard/DashboardPage.js';
import { TableCard } from '../styles/components/dashboard/DashboardPage.js';

// Import user type constants and the current user type utility
import { USER_TYPES } from '../constants/components/globals/Auth.js';
import { USER_TYPE } from '../utils/auth.js';

const Dashboard = () => {
  const { tableText } = DASHBOARD_PAGE;

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
      <Box sx={TableCard}>{tableText}</Box>

      {/* Show stat cards only if user is a client */}
      {USER_TYPE === USER_TYPES.client && <DashboardStaticsCards />}
    </>
  );
};

export default Dashboard;
