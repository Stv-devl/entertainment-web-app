'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Media } from '@/types/types';

interface UseManageFilterProps {
  media?: Media[];
  seriesData?: Media[];
  moviesData?: Media[];
}

interface UseManageFilterReturn {
  searchBar: string;
  filteredData: Media[];
  handleChange: (updates: { [key: string]: string }) => void;
  isSearching: boolean;
}

const useManageFilter = ({
  media,
  seriesData,
  moviesData,
}: UseManageFilterProps): UseManageFilterReturn => {
  const [searchBar, setSearchBar] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const activeDatas = media || seriesData || moviesData || [];

  console.log(activeDatas);

  useEffect(() => {
    if (searchBar.trim() === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  }, [searchBar]);

  const filteredData = useMemo(() => {
    if (searchBar.trim() === '') {
      return activeDatas;
    }
    return (
      activeDatas &&
      activeDatas.filter((el) =>
        Object.values(el).some(
          (value) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(searchBar.toLowerCase())
        )
      )
    );
  }, [activeDatas, searchBar]);

  const handleChange = useCallback((updates: { [key: string]: string }) => {
    setSearchBar(updates.search);
  }, []);

  return { searchBar, filteredData, handleChange, isSearching };
};

export default useManageFilter;
