'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';

const Movies = (): JSX.Element => {
  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
};

export default withAuth(Movies);
