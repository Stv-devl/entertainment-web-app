import { Media } from '@/types/types';
import Image from 'next/image';
import React from 'react';

interface MediaProps {
  media: Media;
}

/**
 * The CardLegend component displays metadata information about a media item, including its release year, category, rating, and title.
 * The component is typically used as part of a media card to provide quick access to key details about the media item.
 * The category is represented with an icon, which changes based on whether the media item is a movie or a TV series.
 * @component
 * @param {MediaProps} props - The props for the CardLegend component.
 * @param {Media} props.media - The media object containing information such as year, category, rating, and title.
 * @returns {JSX.Element} The CardLegend component displaying media metadata.
 */

const CardLegend: React.FC<MediaProps> = ({
  media,
}: MediaProps): JSX.Element => {
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
