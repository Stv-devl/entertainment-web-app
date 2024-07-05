import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import useIsAuthenticated from '../../hook/auth/useIsAuthenticated';

const withAuth = <P extends object>(Component: ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const { isAuthenticated } = useIsAuthenticated();

    useEffect(() => {
      if (isAuthenticated === false) {
        router.push('/login');
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
