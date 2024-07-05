import { useRouter } from 'next/navigation';
import useAuthStore from '../../stores/useAuthStore';

export const useLogout = () => {
  const { logout } = useAuthStore((state) => ({
    logout: state.logout,
  }));

  const router = useRouter();

  const handleLogout = async (
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>
  ) => {
    logout();
    const res = await fetch('/api/logout', {
      method: 'POST',
    });
    if (res.ok) {
      setIsAuthenticated(false);
      console.log('Logged out successfully');
    } else {
      console.error('Failed to log out');
    }
    router.push('/login');
  };

  return handleLogout;
};
