'use client';

import { Media } from '@/types/types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface UseManageFilterProps {
  media: Media[];
}

interface UseManageFilterReturn {
  searchBar: string;
  filteredData: Media[];
  handleChange: (updates: { [key: string]: string }) => void;
  isSearching: boolean;
}

const useManageFilter = ({
  media,
}: UseManageFilterProps): UseManageFilterReturn => {
  const [searchBar, setSearchBar] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    if (searchBar.trim() === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  }, [searchBar]);

  const filteredData = useMemo(() => {
    if (searchBar.trim() === '') {
      return media;
    }
    return media.filter((el) =>
      Object.values(el).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchBar.toLowerCase())
      )
    );
  }, [media, searchBar]);

  const handleChange = useCallback((updates: { [key: string]: string }) => {
    setSearchBar(updates.search);
  }, []);

  return { searchBar, filteredData, handleChange, isSearching };
};

export default useManageFilter;
