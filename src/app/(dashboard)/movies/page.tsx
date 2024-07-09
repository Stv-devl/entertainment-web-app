'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';

const Movies = () => {
  const { media, loading, error } = useFitlerWithId();

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
};

export default withAuth(Movies);
