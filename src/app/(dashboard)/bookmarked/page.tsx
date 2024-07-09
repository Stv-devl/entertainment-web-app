'use client';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import React from 'react';

const BookMarked = () => {
  const { bookmarked, loading, error } = useFitlerWithId();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  return (
    <div>
      <h1>Bookmarked</h1>
    </div>
  );
};

export default withAuth(BookMarked);
