import React from 'react';
import { Media } from '@/types/types';
import TrendingCards from '../cards/TrendingCards';

interface TrendingProps {
  bookmarked: Media[];
}

const Trending: React.FC<TrendingProps> = ({ bookmarked }) => {
  console.log(bookmarked);

  return (
    <div className="trending-container">
      <h1>Trending</h1>
      <TrendingCards data={bookmarked} />
    </div>
  );
};

export default Trending;
