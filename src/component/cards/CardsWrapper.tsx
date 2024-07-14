import React from 'react';
import { CardsWrapperProps } from '@/types/types';
import Cards from './Cards';

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
