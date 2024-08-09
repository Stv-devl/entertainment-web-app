'use client';

import React, { useEffect } from 'react';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import { getCategories } from '@/utils/filterByCategory';
import Search from '@/component/form/search/Search';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import CardsWrapper from '@/component/cards/CardsWrapper';
import useMediaStore from '@/stores/useMediaStore';

const Series = () => {
  const { media, user, loading, error, fetchData } = useMediaStore();

  const seriesData = getCategories(media, 'TV Series');

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      seriesData,
    });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="h-screen">
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'Tv series'}
      />
      <CardsWrapper
        isSearching={isSearching}
        filteredData={filteredData}
        media={seriesData}
        title={'Tv series'}
      />
    </section>
  );
};

export default withAuth(Series);
