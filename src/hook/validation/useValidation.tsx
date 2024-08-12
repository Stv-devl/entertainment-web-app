import { useState } from 'react';
import { FormDataSignUp, ValidationErrors } from '@/types/types';
import {
  validateEmail,
  validatePassword,
  validateRepeatPassword,
  validateUsername,
} from '@/utils/validation';

/**
 * Custom hook for validating sign-up form data.
 * It validates the username, email, password, and password confirmation fields.
 * @param {FormDataSignUp} formData - The current state of the sign-up form data.
 * @returns {object} An object containing:
 * - `signupErrors`: An object with error messages for each field in the sign-up form.
 * - `validateForm`: Function to validate the form and update the error messages.
 */
const useValidation = (formData: FormDataSignUp) => {
  const [signupErrors, setSignupErrors] = useState<ValidationErrors>({
    username: '',
    email: '',
    password: '',
    repeat: '',
  });

  /**
   * Validates the sign-up form data.
   * Updates the error messages for each form field and returns a boolean indicating whether the form is valid.
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      username:
        formData.username.trim() === ''
          ? 'Username is required.'
          : validateUsername(formData.username)
          ? ''
          : 'Invalid username. Must be 4-16 characters.',
      email:
        formData.email.trim() === ''
          ? 'Email is required.'
          : validateEmail(formData.email)
          ? ''
          : 'Must write a valid email address.',
      password:
        formData.password.trim() === ''
          ? 'Password is required.'
          : validatePassword(formData.password)
          ? ''
          : 'Invalid password. Must be at least 4 characters long.',
      repeat:
        formData.password.trim() === ''
          ? 'Password is required.'
          : validateRepeatPassword(formData.password, formData.repeat)
          ? ''
          : 'Passwords should match.',
    };

    setSignupErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== '');
  };

  return { signupErrors, validateForm };
};

export default useValidation;
