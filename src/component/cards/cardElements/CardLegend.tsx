import { Media } from '@/types/types';
import Image from 'next/image';
import React from 'react';

interface MediaProps {
  media: Media;
}

const CardLegend: React.FC<MediaProps> = ({ media }) => {
  return (
    <div className="texte-wrapper">
      <div className="flex items-center gap-[4px] sm:gap-[8px] mt-[8px]">
        <p className="text-xs sm:text-base">{media.year}</p>
        <p className="dot">.</p>
        <div className="flex items-center gap-[6px]">
          <Image
            src={
              media.category === 'Movie'
                ? `../assets/icon-category-movie.svg`
                : `../assets/icon-category-tv.svg`
            }
            alt={`category movie icon`}
            width={12}
            height={12}
            className="w-[12px] h-[12px]"
          />
          <p className="text-xs sm:text-base">{media.category}</p>
        </div>
        <p className="dot">.</p>
        <p className="text-xs sm:text-base">{media.rating}</p>
      </div>
      <p className="text-sm sm:text-lg	">{media.title}</p>
    </div>
  );
};

export default CardLegend;
