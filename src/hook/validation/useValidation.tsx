import { useState } from 'react';
import { FormDataSignUp, ValidationErrors } from '@/types/types';
import {
  validateEmail,
  validatePassword,
  validateRepeatPassword,
  validateUsername,
} from '@/utils/validation';

const useValidation = (formData: FormDataSignUp) => {
  const [signupErrors, setSignupErrors] = useState<ValidationErrors>({
    username: '',
    email: '',
    password: '',
    repeat: '',
  });

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
