'use client';

import React from 'react';
import Error from '@/src/component/error/Error';
import Loading from '@/src/component/loading/Loading';
import useApiData from '@/backup/hook/useApiData';
import { ApiContextType } from '../../types/types';

const Home = () => {
  const context = useApiData();

  const { mediadata, userdata, loading, error }: ApiContextType = context;

  console.log(mediadata);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
