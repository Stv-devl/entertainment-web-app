'use client';
import withAuth from '../../../component/withAuth/WithAuth';
import React from 'react';

const BookMarked = () => {
  return (
    <div>
      <h1>Bookmarked</h1>
    </div>
  );
};

export default withAuth(BookMarked);
