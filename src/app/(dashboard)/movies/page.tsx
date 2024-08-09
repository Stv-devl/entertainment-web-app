'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import { getCategories } from '@/utils/filterByCategory';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import Search from '@/component/form/search/Search';
import CardsWrapper from '@/component/cards/CardsWrapper';
import useMediaStore from '@/stores/useMediaStore';

const Movies = () => {
  const { media, user, loading, error, fetchData } = useMediaStore();

  const moviesData = getCategories(media, 'Movie');

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      moviesData,
    });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className=" h-screen">
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'movies'}
      />
      <CardsWrapper
        isSearching={isSearching}
        filteredData={filteredData}
        media={moviesData}
        title={'Movies'}
      />
    </section>
  );
};

export default withAuth(Movies);
