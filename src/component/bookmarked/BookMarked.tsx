import React from 'react';
import TrendingCards from '../cards/TrendingCards';
import { TrendingProps } from '@/types/types';

// faire autre prop type?
//ouvrir bookmarked card?

const BookMarked: React.FC<TrendingProps> = ({ bookmarked }) => {
  return (
    <div className="trending-container">
      <h1 className="text-[32px] mb-[25px]">Trending</h1>
      <TrendingCards data={bookmarked} />
    </div>
  );
};

export default BookMarked;
