import React from 'react';
import TrendingCards from '../cards/TrendingCards';
import { MediaProps } from '@/types/types';

const Trending: React.FC<MediaProps> = ({ media }) => {
  return (
    <div className="trending-container">
      <h1 className="text-xl sm:text-3xl mb-[16px] sm:mb-[25px]">Trending</h1>
      <TrendingCards
        trendings={media && media.filter((item) => item.isTrending === true)}
      />
    </div>
  );
};

export default Trending;
