'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { UseManageFilterProps, UseManageFilterReturn } from '@/types/types';

const useManageFilter = ({
  media,
  seriesData,
  moviesData,
  bookmarked,
}: UseManageFilterProps): UseManageFilterReturn => {
  const [searchBar, setSearchBar] = useState<string>('');

  const activeDatas = useMemo(() => {
    return media || seriesData || moviesData || bookmarked || [];
  }, [media, seriesData, moviesData, bookmarked]);

  const isSearching = useMemo(() => searchBar.trim() !== '', [searchBar]);

  const filteredData = useMemo(() => {
    if (!isSearching) {
      return activeDatas;
    }
    return activeDatas.filter((el) =>
      Object.values(el).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchBar.toLowerCase())
      )
    );
  }, [activeDatas, searchBar, isSearching]);

  const handleChange = useCallback((updates: { [key: string]: string }) => {
    setSearchBar(updates.search);
  }, []);

  return { searchBar, filteredData, handleChange, isSearching };
};

export default useManageFilter;
