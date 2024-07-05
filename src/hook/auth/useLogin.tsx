import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../stores/useAuthStore';
import apiLogin from '../../features/apiLogin';

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = useAuthStore((state) => state.login);
  const setUserId = useAuthStore((state) => state.setUserId);
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { token, userId } = await apiLogin(email, password);
      login(token);
      setUserId(userId);
      router.push('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useLogin;
