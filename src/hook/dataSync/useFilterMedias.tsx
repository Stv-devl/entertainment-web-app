'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { UseManageFilterProps, UseManageFilterReturn } from '@/types/types';

/**
 * Custom hook for managing and filtering media items based on user input.
 * @param {UseManageFilterProps} props - The properties for managing filterable media.
 * @returns {UseManageFilterReturn} An object containing:
 * - `searchBar`: The current search input value.
 * - `filteredData`: The list of media items filtered based on the search input.
 * - `handleChange`: Function to handle changes to the search input.
 * - `isSearching`: Boolean indicating if a search is currently active.
 */
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

  /**
   * Handles changes to the search input.
   * @param {object} updates - An object containing the updated search value.
   */
  const handleChange = useCallback((updates: { [key: string]: string }) => {
    setSearchBar(updates.search);
  }, []);

  return { searchBar, filteredData, handleChange, isSearching };
};

export default useManageFilter;
