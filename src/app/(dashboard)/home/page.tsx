'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useMediaData from '@/hook/dataSync/useDataMedia';

const Home = () => {
  const { media, users, loading, error } = useMediaData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log('media data', media);
  console.log('user data', users);

  return (
    <div>
      <p>Home</p>
    </div>
  );
};

export default withAuth(Home);
