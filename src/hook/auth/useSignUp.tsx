import { FormEvent, useCallback, useState } from 'react';
import apiSignup from '../../services/apiSignup';
import { FormDataSignUp, UseSignUpReturn } from '@/types/types';
import useValidation from '../validation/useValidation';
import { useRouter } from 'next/navigation';

/**
 * Custom hook for handling user sign-up functionality.
 * Manages form state, validates form data, and submits the sign-up request.
 *
 * @returns {UseSignUpReturn} An object containing:
 * - `handleSubmit`: Function to handle form submission for signing up a new user.
 * - `handleChange`: Function to handle changes to the form inputs.
 * - `formData`: The current state of the sign-up form data.
 * - `signupErrors`: An object containing any validation errors from the sign-up form.
 */

const useSignUp = (): UseSignUpReturn => {
  const [formData, setFormData] = useState<FormDataSignUp>({
    username: '',
    email: '',
    password: '',
    repeat: '',
    _id: '',
    bookmarkedItems: [],
  });

  const { signupErrors, validateForm } = useValidation(formData);
  const router = useRouter();

  /**
   * Handles changes to the form inputs.
   * @param {Partial<FormDataSignUp>} updates - An object containing the updated form values.
   */
  const handleChange = useCallback((updates: Partial<FormDataSignUp>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updates,
    }));
  }, []);

  /**
   * Handles form submission for signing up a new user.
   * Validates the form data and, if valid, sends a sign-up request to the server.
   * @param {FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      console.error('Form data is invalid');
      return;
    }

    try {
      const newUser = await apiSignup({
        ...formData,
      });
      router.push('/login');
      console.log('signup working', newUser);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return {
    handleSubmit,
    handleChange,
    formData,
    signupErrors,
  };
};

export default useSignUp;
