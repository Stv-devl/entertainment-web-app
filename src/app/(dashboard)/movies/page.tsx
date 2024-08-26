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

/**
 * The Movies page component displays a list of movies with a search functionality.
 * The movies are filtered by category ('Movie') from the overall media data.
 * If the data is still loading, it shows a loading indicator.
 * If there is an error, it shows an error message.
 * Otherwise, it displays the filtered list of movies based on the search query or the full list of movies.
 * This component is wrapped with an authentication check using `withAuth`.
 * @returns {JSX.Element} The Movies page component.
 */
const Movies = (): JSX.Element => {
  const { media, loading, error, fetchData } = useMediaStore();

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
    <section className=" h-screen pl-[2%] xl:ml-[156px] xl:h-[97.5vh]">
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
