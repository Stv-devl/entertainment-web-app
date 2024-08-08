'use client';

import React, { useEffect, useMemo } from 'react';
import { Users, UseFilterWithIdReturn } from '@/types/types';
import useMediaStore from '@/stores/useMediaStore';
import useAuthStore from '@/stores/useAuthStore';

const useFilterWithId = (): UseFilterWithIdReturn => {
  const { users, media, loading, error, fetchData } = useMediaStore();
  const { userId } = useAuthStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const user = useMemo(() => {
    const foundUser = Array.isArray(users)
      ? users.find((get: Users) => get.id === userId) || null
      : null;
    return foundUser;
  }, [users, userId]);

  const bookmarkedArray = user?.bookmarkedItems ?? [];

  const bookmarked = useMemo(() => {
    if (!Array.isArray(media)) return [];
    return media.filter((item) => bookmarkedArray.includes(item.title));
  }, [media, bookmarkedArray]);

  return { media, user, bookmarked, loading, error };
};

export default useFilterWithId;
