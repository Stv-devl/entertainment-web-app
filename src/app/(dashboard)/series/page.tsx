'use client';

import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import React from 'react';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import { getCategories } from '@/utils/filterByCategory';
import Cards from '@/component/cards/Cards';

import Search from '@/component/form/search/Search';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import CardsWrapper from '@/component/cards/CardsWrapper';

const Series = () => {
  const { media, loading, error } = useFitlerWithId();

  const seriesData = getCategories(media, 'TV Series');

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      seriesData,
    });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'Tv series'}
      />
      <CardsWrapper
        isSearching={isSearching}
        filteredData={filteredData}
        datas={seriesData}
        title={'Tv series'}
      />
    </>
  );
};

export default withAuth(Series);
