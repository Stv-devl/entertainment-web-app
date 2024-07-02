'use client';

import React from 'react';
import Login from './login/page';
import useApiData from '../hook/useApiData';
import { ApiContextType } from '../types/types';

const Index = () => {
  /*
  const context = useApiData();
  const { mediadata, userdata, loading, error }: ApiContextType = context;
  console.log('mediadata', mediadata, 'userdata', userdata);*/

  return (
    <main>
      <Login />
    </main>
  );
};

export default Index;
