import { RecommendedProps } from '@/types/types';
import React from 'react';
import Cards from '../cards/Cards';

const Recommended: React.FC<RecommendedProps> = ({ media }) => {
  return (
    <div className="Recommended-container">
      <h1>Recommended</h1>
      <Cards data={media} />
    </div>
  );
};

export default Recommended;
