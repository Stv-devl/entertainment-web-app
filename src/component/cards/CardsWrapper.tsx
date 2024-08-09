import React from 'react';
import { CardsWrapperProps } from '@/types/types';
import Cards from './Cards';

const CardsWrapper: React.FC<CardsWrapperProps> = ({
  isSearching,
  filteredData,
  media,
  title,
}) => {
  return (
    <div className="page-container pr-4">
      {isSearching ? (
        <>
          <h1 className="text-xl sm:text-3xl mb-[16px] sm:mb-[25px]">
            Recherche {title}
          </h1>
          <Cards media={filteredData} />
        </>
      ) : (
        <>
          <h1 className="text-xl sm:text-3xl mb-[16px] sm:mb-[25px]">
            {title}
          </h1>
          <Cards media={media} />
        </>
      )}
    </div>
  );
};

export default CardsWrapper;
