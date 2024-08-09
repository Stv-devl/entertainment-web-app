import { FormEvent, useCallback, useState } from 'react';
import apiSignup from '../../Services/apiSignup';
import { v4 as uuidv4 } from 'uuid';
import { FormDataSignUp } from '@/types/types';
import useValidation from '../validation/useValidation';
import { useRouter } from 'next/navigation';

const useSignUp = () => {
  const [formData, setFormData] = useState<FormDataSignUp>({
    username: '',
    email: '',
    password: '',
    repeat: '',
    bookmarkedItems: [],
  });

  const { signupErrors, validateForm } = useValidation(formData);
  const router = useRouter();

  const handleChange = useCallback((updates: {}) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updates,
    }));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      console.error('Form data is invalid');
      return;
    }

    try {
      const newUser = await apiSignup({
        id: uuidv4(),
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
