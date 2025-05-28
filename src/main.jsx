// Import core React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the root application component
import App from './App.jsx';

// Import Material UI baseline and theming support
import { CssBaseline, ThemeProvider } from '@mui/material';

// Global styles
import './index.css';

// Custom MUI theme
import theme from './theme.js';

// React Query client setup
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Redux store and persistor for state management with persistence
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// Loader component displayed while rehydrating persisted state
import Loader from './components/Loader.jsx';

// Global error boundary to catch and display runtime errors
import ErrorBoundary from './components/global/ErrorBoundary.jsx';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
/**
 * Initializes a new instance of the React Query Client.
 * This client handles caching, background updates, and request deduplication.
 */
const queryClient = new QueryClient();

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provides React Query context to the application */}
    <QueryClientProvider client={queryClient}>
      {/* Redux state provider */}
      <Provider store={store}>
        {/* Handles rehydration of persisted Redux state */}
        <PersistGate loading={<Loader />} persistor={persistor}>
          {/* Material UI theme provider for consistent styling */}
          <ThemeProvider theme={theme}>
            {/* Normalize and reset CSS styles */}
            <CssBaseline />
            {/* Catch and handle runtime errors gracefully */}
            <ErrorBoundary>
              {/* Main application component */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <App />
              </LocalizationProvider>
            </ErrorBoundary>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
