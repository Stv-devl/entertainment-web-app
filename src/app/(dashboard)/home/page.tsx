'use client';

import React from 'react';
import withAuth from '../../../component/withAuth/WithAuth';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';
import Trending from '@/component/trending/Trending';
import Recommended from '../../../component/recommended/Recommended';
import Loading from '@/component/loading/Loading';
import Error from '@/component/error/Error';
import SearchWrapper from '@/component/form/search/SearchWrapper';
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

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <SearchWrapper>
      <main>
        <Trending bookmarked={bookmarked} />
        <Recommended media={media} />
      </main>
    </SearchWrapper>
  );
};
export default withAuth(Home);
