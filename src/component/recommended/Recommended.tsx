import { Media } from '@/types/types';
import React from 'react';
import Cards from '../cards/Cards';

interface RecommendedProps {
  media: Media[];
}

const Recommended: React.FC<RecommendedProps> = ({ media }) => {
  /*console.log(media);*/

  return (
    <div className="trending-container">
      <Cards data={media} />
    </div>
  );
};

export default Recommended;
