import { Media } from '@/types/types';
import React from 'react';

interface TrendingProps {
  bookmarked: Media[];
}

const Trending: React.FC<TrendingProps> = ({ bookmarked }) => {
  console.log(bookmarked);

  return <div></div>;
};

export default Trending;
