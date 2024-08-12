import React from 'react';
import { CardsWrapperProps } from '@/types/types';
import Cards from './Cards';

/**
 * The CardsWrapper component serves as a container for displaying a list of media items.
 * It conditionally renders either a filtered list of media (if a search is in progress) or the full list of media.
 * The component also displays a title that changes based on whether the user is searching or viewing the complete list.
 * @param {CardsWrapperProps} props - The props for the CardsWrapper component.
 * @param {boolean} props.isSearching - Indicates whether the user is currently searching for media items.
 * @param {Media[]} props.filteredData - The filtered list of media items to display when a search is active.
 * @param {Media[]} props.media - The complete list of media items to display when no search is active.
 * @param {string} props.title - The title to be displayed above the media list.
 * @returns {JSX.Element} The CardsWrapper component displaying either filtered or full media lists.
 */

const CardsWrapper: React.FC<CardsWrapperProps> = ({
  isSearching,
  filteredData,
  media,
  title,
}: CardsWrapperProps): JSX.Element => {
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
