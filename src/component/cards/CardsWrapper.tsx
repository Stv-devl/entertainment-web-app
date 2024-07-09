import React from 'react';
import Cards from './Cards';
import { Media } from '@/types/types';

interface CardsWrapperProps {
  isSearching: boolean;
  filteredData: Media[];
  datas: Media[];
  title: string;
}
const CardsWrapper: React.FC<CardsWrapperProps> = ({
  isSearching,
  filteredData,
  datas,
  title,
}) => {
  return (
    <div className="page-container">
      {isSearching ? (
        <>
          <h1>Recherche {title}</h1>
          <Cards data={filteredData} />
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <Cards data={datas} />
        </>
      )}
    </div>
  );
};

export default CardsWrapper;
