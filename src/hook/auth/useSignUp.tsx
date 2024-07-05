import { ChangeEvent, FormEvent, useState } from 'react';
import apiSignup from '../../features/apiSignup';
import { v4 as uuidv4 } from 'uuid';
import useUserStore from '@/stores/useUserStore';

const useSignUp = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const addUser = useUserStore((state) => state.addUser);
  const user = useUserStore((state) => state.users);

  console.log(user);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await apiSignup({
        id: uuidv4(),
        email,
        password,
        username,
      });

      addUser({
        id: uuidv4(),
        email,
        password,
        username,
      });
      console.log('signup working', newUser);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return {
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useSignUp;
