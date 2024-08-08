'use client';

import React from 'react';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import withAuth from '../../../component/withAuth/WithAuth';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import CardsWrapper from '@/component/cards/CardsWrapper';
import Search from '@/component/form/search/Search';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';

const BookMarked = () => {
  const { user, bookmarked, loading, error } = useFitlerWithId();

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      bookmarked,
    });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="h-screen">
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'bookmarked show'}
      />
      <CardsWrapper
        isSearching={isSearching}
        filteredData={filteredData}
        media={bookmarked}
        user={user}
        title={'Bookmarked Movies'}
      />
    </section>
  );
};

export default withAuth(BookMarked);
