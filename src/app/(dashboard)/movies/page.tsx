'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import Cards from '@/component/cards/Cards';
import { getCategories } from '@/utils/filterByCategory';
import SearchWrapper from '@/component/form/search/SearchWrapper';

const Movies = () => {
  const { media, loading, error } = useFitlerWithId();

  if (loading) return <Loading />;
  if (error) return <Error />;

  const moviesData = getCategories(media, 'Movie');

  return (
    <SearchWrapper>
      <main>
        <h1>Movies</h1>
        <Cards data={moviesData} />
      </main>
    </SearchWrapper>
  );
};

export default withAuth(Movies);
