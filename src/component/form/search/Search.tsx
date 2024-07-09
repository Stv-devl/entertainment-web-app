'use client';
import React from 'react';
import Input from '../input/Input';

export interface SearchProps {
  searchBar: string;
  handleChange: (value: { [key: string]: string }) => void;
}

const Search: React.FC<SearchProps> = ({ searchBar, handleChange }) => {
  return (
    <div className="search-wrapper">
      <div>icone</div>
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
    </div>
  );
};

export default Search;
