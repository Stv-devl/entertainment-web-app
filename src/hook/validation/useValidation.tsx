import { useState, useEffect } from 'react';
import { FormDataSignUp } from '@/types/types';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '@/utils/validation';

type ValidationErrors = {
  username: string;
  email: string;
  password: string;
};

const useValidation = (formData: FormDataSignUp, isSubmitted: boolean) => {
  const [errors, setErrors] = useState<ValidationErrors>({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (!isSubmitted) return;

    const newErrors = {
      username: validateUsername(formData.username)
        ? ''
        : 'Invalid username. Must be 4-16 characters.',
      email: validateEmail(formData.email)
        ? ''
        : 'Must write a valid email adress.',
      password: validatePassword(formData.password)
        ? ''
        : 'Invalid password. Must be at least 4 characters long.',
    };

    setErrors(newErrors);
  }, [formData, isSubmitted]);

  const isValidate = !errors.username && !errors.email && !errors.password;

  return { errors, isValidate };
};

export default useValidation;
