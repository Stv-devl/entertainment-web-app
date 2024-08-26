'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import Trending from '@/component/trending/Trending';
import Recommended from '../../../component/recommended/Recommended';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import Search from '../../../component/form/search/Search';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import Cards from '@/component/cards/Cards';
import useMediaStore from '@/stores/useMediaStore';

/**
 * The Home page component displays trending and recommended media items with a search functionality.
 * If the data is still loading, it shows a loading indicator.
 * If there is an error, it shows an error message.
 * Otherwise, it displays either a filtered list of items based on the search query, or the trending and recommended items.
 * This component is wrapped with an authentication check using `withAuth`.
 * @returns {JSX.Element} The Home page component.
 */

const Home = (): JSX.Element => {
  const { media, loading, error, fetchData } = useMediaStore();
  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      media,
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
        placeholder={'movies or Tv series'}
      />
      <>
        {isSearching ? (
          <Cards media={filteredData} />
        ) : (
          <div className="page-container">
            <Trending media={media} />
            <Recommended media={media} />
          </div>
        )}
      </>
    </section>
  );
};
export default withAuth(Home);
