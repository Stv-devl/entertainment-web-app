'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import { getCategories } from '@/utils/filterByCategory';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import Search from '@/component/form/search/Search';
import CardsWrapper from '@/component/cards/CardsWrapper';

const Movies = () => {
  const { media, loading, error } = useFitlerWithId();

  const moviesData = getCategories(media, 'Movie');

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      moviesData,
    });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="pl-[156px] mt-[2%]">
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'movies'}
      />
      <CardsWrapper
        isSearching={isSearching}
        filteredData={filteredData}
        datas={moviesData}
        title={'Movies'}
      />
    </section>
  );
};

export default withAuth(Movies);
