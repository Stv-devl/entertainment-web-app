import { Media } from '@/types/types';
import Image from 'next/image';
import React from 'react';

interface DataProps {
  data: Media;
}

const CardLegend: React.FC<DataProps> = ({ data }) => {
  return (
    <div className="texte-wrapper">
      <div className="flex gap-[8px] mt-[8px]">
        <p className="text-xs sm:text-base">{data.year}</p>
        <p className="dot">.</p>
        <div className="flex items-center gap-[6px]">
          <Image
            src={
              data.category === 'Movie'
                ? `../assets/icon-category-movie.svg`
                : `../assets/icon-category-tv.svg`
            }
            alt={`category movie icon`}
            width={12}
            height={12}
            className="w-[12px] h-[12px]"
          />
          <p className="text-xs sm:text-base">{data.category}</p>
        </div>
        <p className="dot">.</p>
        <p className="text-xs sm:text-base">{data.rating}</p>
      </div>
      <p className="text-sm sm:text-lg	">{data.title}</p>
    </div>
  );
};

export default CardLegend;
