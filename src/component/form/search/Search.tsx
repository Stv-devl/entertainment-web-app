'use client';
import React from 'react';
import Input from '../input/Input';
import { SearchProps } from '@/types/types';
import Image from 'next/image';

/**
 * Renders a search bar with an icon and an input field.
 * The input field displays a dynamic placeholder and handles changes via the provided callback.
 * @param {SearchProps} props - Properties for the Search component.
 * @returns {JSX.Element} The Search component with an input field and a search icon.
 */

const Search: React.FC<SearchProps> = ({
  searchBar,
  handleChange,
  placeholder,
}: SearchProps): JSX.Element => {
  return (
    <div className="flex gap-[8px] items-center mb-[24px] sm:pt-[10px] lg-pt-[25px]">
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
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Search;
