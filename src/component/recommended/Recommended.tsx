import { MediaProps } from '@/types/types';
import React from 'react';
import Cards from '../cards/Cards';

const Recommended: React.FC<MediaProps> = ({ media }) => {
  return (
    <div className="Recommended-container">
      <h1 className="text-[32px] mt-[42px] mb-[32px]">Recommended for you</h1>
      <Cards data={media} />
    </div>
  );
};

export default Recommended;
