'use client';

import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import React from 'react';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';

const Series = () => {
  const { media, loading, error } = useFitlerWithId();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <h1>Series</h1>
    </div>
  );
};

export default withAuth(Series);
