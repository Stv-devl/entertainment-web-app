'use client';
import React from 'react';
import Input from '../input/Input';
import { SearchProps } from '@/types/types';

const Search: React.FC<SearchProps> = ({
  searchBar,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="search-wrapper">
      <img src="/assets/icon-search.svg" alt="search bar icon" />
      <div className="search-bar-container">
        <Input
          name="search"
          type="text"
          value={searchBar}
          handleChange={handleChange}
          placeholder={`Search for ${placeholder}`}
        />
      </div>
    </div>
  );
};

export default Search;
