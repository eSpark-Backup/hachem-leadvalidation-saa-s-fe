import { toast } from 'sonner';

import { setCredentials } from '../redux/slices/auth/authSlice';

import { handleLogedin } from '../utils/auth';
import {
  registrationSchema,
  resetPasswordSchema,
} from '../utils/validations/schema';

/**
 * Calls RTK Query AUTH mutations and handles state + errors + toasts.
 */
const handleLoginMutation = async (
  { email, password },
  loginMutation,
  dispatch,
  setError,
  navigate
) => {
  try {
    const res = await loginMutation({ email, password }).unwrap();
    dispatch(
      setCredentials({ accessToken: res.tokens?.accessToken, user: res?.user })
    );
    toast.success(res?.message || 'Login successful');

    handleLogedin(navigate);

    return null;
  } catch (err) {
    let errors = err?.data;

    if (typeof errors?.errors === 'object') {
      setError(errors?.errors);
    } else {
      toast.error(errors?.message || 'Login failed', {
        id: 'global-error',
      });
    }

    return null;
  }
};

const handleRegisterMutation = async (
  body,
  registerMutation,
  navigate,
  setUser,
  setError,
  verifyEmail
) => {
  try {
    const validatedData = await registrationSchema.validate(body, {
      abortEarly: false,
    });

    const { ...payload } = validatedData;

    const res = await registerMutation(payload).unwrap();

    toast.success(
      res?.message || 'User registered successfully. Please verify your email.'
    );

    setUser({
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
      company: '',
      service_and_policy: false,
    });

    navigate(verifyEmail, { state: res?.user?.email });

    return null;
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = {};

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      setError(validationErrors);
    } else {
      toast.error(err?.data?.message || 'Registration failed', {
        id: 'global-error',
      });
    }

    return null;
  }
};

const handleResendCodeMutation = async (
  email,
  resendVerificationCodeMutation
) => {
  try {
    const res = await resendVerificationCodeMutation({ email }).unwrap();

    toast.success(res?.message || 'Verification email resent successfully');

    return null;
  } catch (err) {
    let errors = err?.data;

    toast.error(errors?.message || 'Failed to resend verification email', {
      id: 'global-error',
    });

    return null;
  }
};

const handleVerifyEmailMutation = async (
  { email, code },
  verifyEmailMutation,
  setShowVerifyEmail,
  setOtp
) => {
  try {
    const res = await verifyEmailMutation({ email, code }).unwrap();

    toast.success(res?.message || 'Email successfully verified');

    setOtp('');
    setShowVerifyEmail(true);

    return null;
  } catch (err) {
    let errors = err?.data;

    toast.error(errors?.message || 'Email verification failed', {
      id: 'global-error',
    });

    return null;
  }
};

const handleResetPasswordRequestMutation = async (
  email,
  resetPasswordRequestMutation,
  setShowVerifyEmail,
  setUser
) => {
  try {
    const res = await resetPasswordRequestMutation({
      email,
    }).unwrap();

    setUser({ email: '' });
    setShowVerifyEmail(true);

    return res?.message || 'Password reset instructions sent to your email.';
  } catch (err) {
    let errors = err?.data;

    toast.error(errors?.message || 'Failed to process password reset request', {
      id: 'global-error',
    });

    return null;
  }
};

const handleResetPasswordMutation = async (
  body,
  resetPasswordMutation,
  navigate,
  setUser,
  login,
  setError
) => {
  try {
    const validatedData = await resetPasswordSchema.validate(body, {
      abortEarly: false,
    });

    const { ...payload } = validatedData;

    const res = await resetPasswordMutation(payload).unwrap();

    toast.success(res?.message || 'Password reset successful.');

    setUser({
      password: '',
      confirm_password: '',
    });

    navigate(login);

    return null;
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = {};

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      setError(validationErrors);
    } else {
      toast.error(err?.data?.message || 'Failed to reset password', {
        id: 'global-error',
      });
    }

    return null;
  }
};

const handleLogoutMutation = async (logoutMutation) => {
  try {
    const res = await logoutMutation({ refreshToken: '' }).unwrap();

    toast.success(res?.message || 'Logged out successfully');

    return null;
  } catch (err) {
    let errors = err?.data;

    toast.error(errors?.message || 'Logout failed', {
      id: 'global-error',
    });

    return null;
  }
};
export {
  handleLoginMutation,
  handleLogoutMutation,
  handleResetPasswordMutation,
  handleResetPasswordRequestMutation,
  handleResendCodeMutation,
  handleVerifyEmailMutation,
  handleRegisterMutation,
};
