'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import CardsWrapper from '@/component/cards/CardsWrapper';
import Search from '@/component/form/search/Search';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import useMediaStore from '@/stores/useMediaStore';

const BookMarked = () => {
  const { bookmarked, user, loading, error, fetchData } = useMediaStore();

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      bookmarked,
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
        placeholder={'bookmarked show'}
      />
      <CardsWrapper
        isSearching={isSearching}
        filteredData={filteredData}
        media={bookmarked}
        title={'Bookmarked Movies'}
      />
    </section>
  );
};

export default withAuth(BookMarked);
