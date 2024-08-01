'use client';

import React from 'react';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import CardsWrapper from '@/component/cards/CardsWrapper';
import Search from '@/component/form/search/Search';

const BookMarked = () => {
  const { bookmarked, loading, error } = useFitlerWithId();

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      bookmarked,
    });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  return (
    <section className="pt-1 h-screen">
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'bookmarked show'}
      />
      <CardsWrapper
        isSearching={isSearching}
        filteredData={filteredData}
        datas={bookmarked}
        title={'Bookmarked Movies'}
      />
    </section>
  );
};

export default withAuth(BookMarked);
