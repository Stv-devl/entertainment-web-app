'use client';

import React, { useMemo } from 'react';
import useMediaData from './useMediaData';
import { Users, Media } from '@/types/types';
import useUserId from './useUserId';

const useFitlerWithId = () => {
  const { media, users, loading, error } = useMediaData();
  const userId = useUserId();

  const user = useMemo(() => {
    return Array.isArray(users)
      ? users.find((get: Users) => get.id === userId)
      : null;
  }, [users, userId]);

  const bookmarkedArray = user ? user.bookmarkedItems : [];

  const bookmarked = useMemo(() => {
    return Array.isArray(media)
      ? media.filter(
          (item: Media) =>
            bookmarkedArray && bookmarkedArray.includes(item.title)
        )
      : [];
  }, [media, bookmarkedArray]);

  return { media, user, bookmarked, loading, error };
};

export default useFitlerWithId;
