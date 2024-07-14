import { FormEvent, useCallback, useState } from 'react';
import apiSignup from '../../features/apiSignup';
import { v4 as uuidv4 } from 'uuid';
import useUserStore from '@/stores/useUserStore';
import { FormDataSignUp } from '@/types/types';
import useValidation from '../validation/useValidation';
import { useRouter } from 'next/navigation';

const useSignUp = () => {
  const [formData, setFormData] = useState<FormDataSignUp>({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { errors, isValidate } = useValidation(formData, isSubmitted);
  const addUser = useUserStore((state) => state.addUser);
  const router = useRouter();

  const handleChange = useCallback((updates: {}) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updates,
    }));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isValidate) {
      console.error('Form data is invalid');
      return;
    }
    try {
      const newUser = await apiSignup({
        id: uuidv4(),
        ...formData,
      });
      addUser({
        ...newUser,
        bookmarkedItems: newUser.bookmarkedItems || [],
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
    errors,
  };
};

export default useSignUp;
