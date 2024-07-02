'use client';

import { useContext } from 'react';
import { ApiContext } from '../context/ManageApi';
import { ApiContextType } from '../../src/types/types';

/**
 * useApiData hook
 * Custom hook to use API data from context.
 * @returns {ApiContextType} - The API data context.
 * @throws {Error} - If an error occur
 */
const useApiData = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('error to get data from the context ');
  }

  return context;
};

export default useApiData;
