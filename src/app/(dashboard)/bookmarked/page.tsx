'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import CardsWrapper from '@/component/cards/CardsWrapper';
import Search from '@/component/form/search/Search';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import useMediaStore from '@/stores/useMediaStore';

/**
 * The BookMarked page component displays the user's bookmarked media items with a search functionality.
 * If the data is still loading, it shows a loading indicator.
 * If there is an error, it shows an error message.
 * Otherwise, it displays the bookmarked items or a filtered list of items based on the search query.
 * This component is wrapped with an authentication check using `withAuth`.
 * @returns {JSX.Element} The BookMarked page component.
 */

const BookMarked = (): JSX.Element => {
  const { bookmarked, loading, error, fetchData } = useMediaStore();

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
