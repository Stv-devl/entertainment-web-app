'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import { getCategories } from '@/utils/filterByCategory';
import Search from '@/component/form/search/Search';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import CardsWrapper from '@/component/cards/CardsWrapper';
import useMediaStore from '@/stores/useMediaStore';

/**
 * The Series page component displays a list of TV series with a search functionality.
 * The series are filtered by category ('TV Series') from the overall media data.
 * If the data is still loading, it shows a loading indicator.
 * If there is an error, it shows an error message.
 * Otherwise, it displays the filtered list of TV series based on the search query or the full list of TV series.
 * This component is wrapped with an authentication check using `withAuth`.
 * @returns {JSX.Element} The Series page component.
 */

const Series = (): JSX.Element => {
  const { media, loading, error, fetchData } = useMediaStore();

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
    <section className="h-screen pl-[2%] xl:ml-[156px] xl:h-[97.5vh]">
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
