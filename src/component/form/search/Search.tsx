'use client';
import React from 'react';
import Input from '../input/Input';

export interface SearchProps {
  searchBar: string;
  handleChange: (value: { [key: string]: string }) => void;
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({
  searchBar,
  handleChange,
  placeholder,
}) => {
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
          placeholder={`Search for ${placeholder}`}
        />
      </div>
    </div>
  );
};

export default Search;
