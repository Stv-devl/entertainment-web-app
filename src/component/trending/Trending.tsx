import React from 'react';
import TrendingCards from '../cards/TrendingCards';
import { MediaProps } from '@/types/types';

/**
 * Displays a list of trending media items.
 * Filters the provided media array to include only items marked as trending.
 * @param {Media[]} media - An array of media objects to be filtered and displayed as trending items.
 * @returns {JSX.Element} A section with filtered trending media items.
 */

const Trending: React.FC<MediaProps> = ({ media }) => {
  return (
    <div className="trending-container">
      <h1 className="text-xl sm:text-3xl mb-[16px] sm:mb-[25px]">Trending</h1>
      <TrendingCards
        media={media && media.filter((item) => item.isTrending === true)}
      />
    </div>
  );
};

export default Trending;
