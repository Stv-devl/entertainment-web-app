import { FormEvent, useState } from 'react';
import apiSignup from '../../features/apiSignup';
import { v4 as uuidv4 } from 'uuid';
import useUserStore from '@/stores/useUserStore';
import { FormDataSignUp } from '@/types/types';

const useSignUp = () => {
  const [formData, setFormData] = useState<FormDataSignUp>({
    username: '',
    email: '',
    password: '',
  });

  const addUser = useUserStore((state) => state.addUser);

  /**
   * Handles changes to the form inputs.
   * @param updates - An object containing the updated form values.
   */
  const handleChange = (updates: {}) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updates,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, username } = formData;
    try {
      const newUser = await apiSignup({
        id: uuidv4(),
        email,
        password,
        username,
      });

      addUser({
        id: newUser.id,
        email: newUser.email,
        password: newUser.password,
        username: newUser.username,
        bookmarkedItems: newUser.bookmarkedItems || [],
      });
      console.log('signup working', newUser);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return {
    handleSubmit,
    handleChange,
    formData,
  };
};

export default useSignUp;
