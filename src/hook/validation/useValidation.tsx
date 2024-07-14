import { useState, useEffect, useMemo } from 'react';
import { FormDataSignUp, ValidationErrors } from '@/types/types';

import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '@/utils/validation';

const useValidation = (formData: FormDataSignUp, isSubmitted: boolean) => {
  const [signupErrors, setSignupErrors] = useState<ValidationErrors>({
    username: '',
    email: '',
    password: '',
  });

  const newErrors = useMemo((): ValidationErrors => {
    return {
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
    };
  }, [formData]);

  useEffect(() => {
    if (isSubmitted) {
      setSignupErrors(newErrors);
    }
  }, [isSubmitted, newErrors]);

  const isValidate =
    isSubmitted && !Object.values(newErrors).some((error) => error);

  return { signupErrors, isValidate };
};

export default useValidation;
