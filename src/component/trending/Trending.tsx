import React from 'react';
import { Media } from '@/types/types';
import Cards from '../cards/Cards';
import TrendingCards from '../cards/TrendingCards';

interface TrendingProps {
  bookmarked: Media[];
}

interface TrendingDataProps {
  data: Media[];
}

const Trending: React.FC<TrendingProps> = ({ bookmarked }) => {
  console.log(bookmarked);

  return (
    <div className="trending-container">
      <TrendingCards data={bookmarked} />
    </div>
  );
};

export default Trending;
