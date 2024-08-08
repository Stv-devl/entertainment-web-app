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
import { UseFilterWithIdReturn } from '@/types/types';

const Home = () => {
  const { media, user, loading, error }: UseFilterWithIdReturn =
    useFitlerWithId();

  console.log(user);

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      media,
    });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="h-screen">
      <Search
        searchBar={searchBar}
        handleChange={handleChange}
        placeholder={'movies or Tv series'}
      />
      <>
        {isSearching ? (
          <Cards media={filteredData} user={user} />
        ) : (
          <div className="page-container">
            <Trending media={media} user={user} />
            <Recommended media={media} user={user} />
          </div>
        )}
      </>
    </section>
  );
};
export default withAuth(Home);
