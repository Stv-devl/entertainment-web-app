'use client';

import React from 'react';
import useMediaData from './useMediaData';
import { Users, Media } from '@/types/types';
import useUserId from './useUserId';

const useFitlerWithId = () => {
  const { media, users, loading, error } = useMediaData();
  const userId = useUserId();

  const user =
    users && Array.isArray(users)
      ? users.find((get: Users) => get.id === userId)
      : null;

  const bookmarkedArray = user ? user.bookmarkedItems : [];

  const bookmarked: Media[] =
    media && Array.isArray(media)
      ? media.filter((item: Media) => bookmarkedArray.includes(item.title))
      : [];

  return { media, user, bookmarked, loading, error };
};

export default useFitlerWithId;
