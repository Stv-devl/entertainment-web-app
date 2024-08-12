import { MediaProps } from '@/types/types';
import React from 'react';
import Cards from '../cards/Cards';

/**
 * Displays a list of recommended media items for the user.
 * @param {Media[]} media - An array of media objects to be displayed as recommended items.
 * @returns {JSX.Element} A section with recommended media items.
 */

const Recommended: React.FC<MediaProps> = ({ media }) => {
  return (
    <div className="Recommended-container pr-4">
      <h1 className="text-xl sm:text-3xl  my-[24px] sm:mt-[42px] sm:mb-[32px]">
        Recommended for you
      </h1>
      <Cards media={media} />
    </div>
  );
};

export default Recommended;
