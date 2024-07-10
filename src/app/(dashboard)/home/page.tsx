'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import Trending from '@/component/trending/Trending';
import Recommended from '../../../component/recommended/Recommended';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import Search from '../../../component/form/search/Search';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import Cards from '@/component/cards/Cards';
import { Media } from '@/types/types';

interface UseFilterWithIdReturn {
  media: Media[];
  bookmarked: Media[];
  loading: boolean;
  error: any;
}
const Home = () => {
  const { media, bookmarked, loading, error }: UseFilterWithIdReturn =
    useFitlerWithId();

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      media,
    });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'movies or Tv series'}
      />
      <>
        {isSearching ? (
          <Cards data={filteredData} />
        ) : (
          <div className="page-container">
            <Trending bookmarked={bookmarked} />
            <Recommended media={media} />
          </div>
        )}
      </>
    </>
  );
};
export default withAuth(Home);
