'use client';

import { useState, useEffect } from 'react';
import apiVerify from '../../Services/apiVerify';

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const authenticated = await apiVerify();
      setIsAuthenticated(authenticated);
    };

    verifyAuth();
  }, []);

  return { isAuthenticated, setIsAuthenticated };
};

export default useIsAuthenticated;
