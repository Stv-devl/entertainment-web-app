import { FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../stores/useAuthStore';
import apiLogin from '../../features/apiLogin';
import { FormDataLogin } from '@/types/types';

/**
 * Custom hook for handling login functionality.
 * Manages form state, handles input changes, and submits login data.
 * @returns  An object containing handleSubmit, handleChange, and formData.
 */

const useLogin = () => {
  const [formData, setFormData] = useState<FormDataLogin>({
    email: '',
    password: '',
  });
  const [loginErrors, setLoginErrors] = useState<boolean>(false);

  const login = useAuthStore((state) => state.login);
  const setUserId = useAuthStore((state) => state.setUserId);
  const router = useRouter();

  /**
   * Handles changes to the form inputs.
   * @param updates - An object containing the updated form values.
   */
  const handleChange = useCallback((updates: {}) => {
    setLoginErrors(false);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updates,
    }));
  }, []);

  /**
   * Handles form submission for logging in the user.
   * @param e - The form submission event.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { token, userId } = await apiLogin(
        formData.email,
        formData.password
      );
      login(token);
      setUserId(userId);
      router.push('/home');
    } catch (error) {
      console.error('Login failed:', error);
      setLoginErrors(true);
    }
  };

  return {
    handleSubmit,
    handleChange,
    formData,
    loginErrors,
  };
};

export default useLogin;
