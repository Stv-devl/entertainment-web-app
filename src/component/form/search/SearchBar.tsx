'use client';
import React from 'react';
import Input from '../input/Input';

export interface SearchProps {
  searchBar: string;
  handleChange: (value: { [key: string]: string }) => void;
}

const SearchBar: React.FC<SearchProps> = ({ searchBar, handleChange }) => {
  return (
    <div className="search-bar-container">
      <Input
        name="search"
        labelText="Search :"
        type="text"
        value={searchBar}
        handleChange={handleChange}
        placeholder="Type your search"
      />
    </div>
  );
};

export default SearchBar;
