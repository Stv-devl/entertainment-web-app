'use client';

import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import React from 'react';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import { getCategories } from '@/utils/filterByCategory';
import Cards from '@/component/cards/Cards';
import SearchWrapper from '@/component/form/search/SearchWrapper';

const Series = () => {
  const { media, loading, error } = useFitlerWithId();

  if (loading) return <Loading />;
  if (error) return <Error />;

  const seriesData = getCategories(media, 'TV Series');
  return (
    <SearchWrapper>
      <main>
        <h1>Series</h1>
        <Cards data={seriesData} />
      </main>
    </SearchWrapper>
  );
};

export default withAuth(Series);
