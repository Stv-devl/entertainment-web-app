'use client';
import React from 'react';
import Input from '../input/Input';
import { SearchProps } from '@/types/types';
import Image from 'next/image';

const Search: React.FC<SearchProps> = ({
  searchBar,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="flex gap-[14px] mb-[25px] pt-[25px]">
      <Image
        src="/assets/icon-search.svg"
        alt="search bar icon"
        width={32}
        height={32}
        className="object-contain"
      />
      <div className="w-[100%]">
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
