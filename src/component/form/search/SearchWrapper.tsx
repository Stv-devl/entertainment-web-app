import React, { ReactNode } from 'react';
import useManageFilter from '@/hook/dataSync/useFilterMedias';
import Search from '../../../component/form/search/SearchBar';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';

interface SearchWrapperProps {
  children: ReactNode;
}

const SearchWrapper: React.FC<SearchWrapperProps> = ({ children }) => {
  const { media, loading, error } = useFitlerWithId();

  const { searchBar, filteredData, handleChange, isSearching } =
    useManageFilter({
      media,
    });

  return (
    <div>
      <div className="bar-Wrapper">
        <div>icone</div>
        <Search searchBar={searchBar} handleChange={handleChange} />
      </div>
      {isSearching ? <div>ça cherche</div> : children}
    </div>
  );
};
export default SearchWrapper;
