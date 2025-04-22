// routes/index.js (ya jo file mein tum routes define kar rahe ho)
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ForgotPassword from '../components/auth/ForgotPassword';
import NewPassword from '../components/auth/NewPassword';
import VerifyEmail from '../components/auth/VerifyEmail';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ResetPassword from '../components/auth/ResetPassword';
import PrivateRoute from './PrivateRoute';
import SignupForm from '../components/auth/SignupForm';

const routes = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: '/signup/:type', element: <SignupForm /> },
      { path: 'forget-password', element: <ForgotPassword /> },
      {
        path: '/forget-password/:email',
        element: <VerifyEmail title="Forgot password" />,
      },
      { path: 'new-password', element: <NewPassword /> },
      {
        path: 'verify-email',
        element: <VerifyEmail title="Verify your Email" />,
      },
      { path: 'reset-password', element: <ResetPassword /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
