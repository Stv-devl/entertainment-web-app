'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';

const Home = () => {
  const { media, user, bookmarked, loading, error } = useFitlerWithId();

  console.log('media', media);
  console.log('user', user);
  console.log('bookmarked', bookmarked);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <p>Home</p>
    </div>
  );
};

export default withAuth(Home);
