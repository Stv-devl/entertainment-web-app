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
    <div className="flex gap-[8px] items-center mb-[25px] sm:pt-[10px] lg-pt-[25px]">
      <Image
        src="/assets/icon-search.svg"
        alt="search bar icon"
        width={32}
        height={32}
        className="object-contain sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]"
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
