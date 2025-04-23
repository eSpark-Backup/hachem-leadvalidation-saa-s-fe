import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import PrivateLayout from '../layouts/PrivateLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Private Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        {/* These are nested under /dashboard */}
        <Route index element={<Dashboard />} />
      </Route>

      {/* Catch-all Route (404) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
