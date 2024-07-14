'use client';

import React from 'react';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import { getCategories } from '@/utils/filterByCategory';
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
    <section className="pl-[156px] mt-[2%]">
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
    </section>
  );
};

export default withAuth(Series);
