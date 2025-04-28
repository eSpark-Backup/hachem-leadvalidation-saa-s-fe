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
// import PrivateRoute from './PrivateRoute';
import SignupForm from '../components/auth/SignupForm';
import PrivateLayout from '../layouts/PrivateLayout';
import { ROUTES } from '../constants/components/globals/Auth';
import { AUTH_FORMS } from '../constants/auth';
import PaymentLayout from '../layouts/PaymentLayout';
import Credit from '../components/payment/Credit';
import Payment from '../components/payment/Payment';
import PrivateRoute from './PrivateRoute';

const {
  // publich paths --->
  splash,
  login,
  signup,
  signupType,
  forgotPassword,
  forgotPasswordEmail,
  newpassword,
  resetPassword,
  verifyEmail,
  notFound,

  // private paths --->
  // payment routes
  onboardingCredits,
  onboardingPayment,

  // dashboard routes
  dashboard,
} = ROUTES || {};

const { forgot_password, verify_email } = AUTH_FORMS || {};

const routes = [
  {
    path: splash,
    element: <AuthLayout />,
    children: [
      { index: true },
      { path: login, element: <Login /> },
      { path: signup, element: <Signup /> },
      { path: signupType, element: <SignupForm /> },
      { path: forgotPassword, element: <ForgotPassword /> },
      {
        path: forgotPasswordEmail,
        element: <VerifyEmail title={forgot_password?.title} />,
      },
      { path: newpassword, element: <NewPassword /> },
      {
        path: verifyEmail,
        element: <VerifyEmail title={verify_email?.title} />,
      },
      { path: resetPassword, element: <ResetPassword /> },
    ],
  },
  {
    element: <PaymentLayout />,
    children: [
      { path: onboardingCredits, element: <Credit /> },
      { path: onboardingPayment, element: <Payment /> },
    ],
  },
  {
    path: dashboard,
    element: (
      <PrivateRoute>
        <PrivateLayout />
      </PrivateRoute>
    ),
    children: [{ index: true, element: <Dashboard /> }],
  },
  { path: notFound, element: <NotFound /> },
];

export default routes;
