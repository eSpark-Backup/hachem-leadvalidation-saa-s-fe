import * as yup from 'yup';
import { VALIDATION_MESSAGES } from '../../constants/schema';

// Email verification schema
/**
 * A Yup schema for validating email addresses with strict formatting.
 *
 * - Requires the email field to be present.
 * - Validates that the email matches the pattern: one or more non-whitespace, non-@ characters,
 *   followed by "@", followed by one or more non-whitespace, non-@ characters,
 *   followed by ".", followed by at least two non-whitespace, non-@ characters.
 *
 * @type {yup.StringSchema<string>}
 * @throws {yup.ValidationError} If the email is missing or does not match the required pattern.
 */
const strictEmail = yup
  .string()
  .required(VALIDATION_MESSAGES.emailRequired)
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, VALIDATION_MESSAGES.emailInvalid);

// Password validation schema
/**
 * Yup validation schema for passwords.
 *
 * Enforces the following rules:
 * - Minimum length of 10 characters.
 * - At least one lowercase letter.
 * - At least one uppercase letter.
 * - At least one numeric digit.
 * - At least one special character (non-alphanumeric).
 * - Field is required.
 *
 * Uses custom validation messages from VALIDATION_MESSAGES.
 *
 * @type {yup.StringSchema}
 */
const passwordSchema = yup
  .string()
  .min(10, VALIDATION_MESSAGES.passwordMin)
  .matches(/[a-z]/, VALIDATION_MESSAGES.passwordLower)
  .matches(/[A-Z]/, VALIDATION_MESSAGES.passwordUpper)
  .matches(/[0-9]/, VALIDATION_MESSAGES.passwordNumber)
  .matches(/[^a-zA-Z0-9]/, VALIDATION_MESSAGES.passwordSpecial)
  .required(VALIDATION_MESSAGES.passwordRequired);

// Registration validation schema
/**
 * Yup validation schema for user registration form.
 *
 * Fields:
 * - fullname: Required string, min 3 and max 255 characters.
 * - email: Validated by strictEmail schema.
 * - password: Validated by passwordSchema.
 * - confirm_password: Required string, must match password.
 * - company: Optional string, max 255 characters, nullable.
 * - role: Required string, must be one of the allowed roles.
 */
const registrationSchema = yup.object({
  fullname: yup
    .string()
    .min(3, VALIDATION_MESSAGES.fullnameMin)
    .max(255, VALIDATION_MESSAGES.fullnameMax)
    .required(VALIDATION_MESSAGES.fullnameRequired),
  email: strictEmail,
  password: passwordSchema,
  confirm_password: yup
    .string()
    .required(VALIDATION_MESSAGES.confirmPasswordRequired)
    .oneOf(
      [yup.ref(VALIDATION_MESSAGES.password), null],
      VALIDATION_MESSAGES.passwordsNotMatch
    ),
  company: yup.string().max(255, VALIDATION_MESSAGES.companyMax).nullable(),
  role: yup
    .string()
    .oneOf(
      [VALIDATION_MESSAGES.client, VALIDATION_MESSAGES.supplier],
      VALIDATION_MESSAGES.roleOneOf
    )
    .required(VALIDATION_MESSAGES.roleRequired),
});

/**
 * Yup validation schema for resetting a user's password.
 *
 * Fields:
 * - password: Validated using the imported `passwordSchema`.
 * - confirm_password: Must be a string, required, and match the `password` field.
 * - token: Must be a string and is required.
 *
 * Validation messages are provided by the `VALIDATION_MESSAGES` object.
 */
const resetPasswordSchema = yup.object({
  password: passwordSchema,
  confirm_password: yup
    .string()
    .required(VALIDATION_MESSAGES.confirmPasswordRequired)
    .oneOf(
      [yup.ref(VALIDATION_MESSAGES.password), null],
      VALIDATION_MESSAGES.passwordsNotMatch
    ),
  token: yup.string().required(VALIDATION_MESSAGES.tokenRequired),
});

export { registrationSchema, resetPasswordSchema };
