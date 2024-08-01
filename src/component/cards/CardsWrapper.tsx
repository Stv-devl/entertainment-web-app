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
    <div className="page-container pr-4">
      {isSearching ? (
        <>
          <h1 className="text-[32px] mb-[25px]">Recherche {title}</h1>
          <Cards data={filteredData} />
        </>
      ) : (
        <>
          <h1 className="text-[32px] mb-[25px]">{title}</h1>
          <Cards data={datas} />
        </>
      )}
    </div>
  );
};

export default CardsWrapper;
