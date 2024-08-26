import { MediaProps } from '@/types/types';
import React, { useState } from 'react';
import LegendWrapper from './cardElements/CardLegend';
import Play from './cardElements/CardPlay';
import CardBookmarked from './cardElements/CardBookmarked';
import useIsBookmarked from '@/hook/dataSync/useBookmarked';
import Image from 'next/image';

/**
 * The Cards component renders a grid of media cards, each displaying a media item with its thumbnail, title, category, and bookmark status.
 * When a card is hovered, a play button overlay appears, allowing the user to interact with the media.
 * The component also manages the bookmark status of each media item, allowing users to add or remove items from their bookmarks.
 * @param {MediaProps} props - The props for the Cards component.
 * @param {Media[]} props.media - An array of media objects containing information such as title, category, thumbnail, etc.
 * @returns {JSX.Element} The Cards component rendering a grid of media items.
 */

const Cards: React.FC<MediaProps> = ({ media }: MediaProps): JSX.Element => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { bookmarkedItems, handleToggleBookmark } = useIsBookmarked();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-[5%] sm:gap-x-[4%] gap-y-[16px] sm:gap-y-[32px] max-w-[1490px] ">
      {media &&
        media.map((data, index) => {
          return (
            <div
              className="relative w-[calc(23.5% - 2%)]"
              key={`trending${index}`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {data.thumbnail?.regular && (
                <Image
                  src={data.thumbnail.regular.small}
                  alt={`${data.title} ${data.category}`}
                  width={328}
                  height={220}
                  className="w-full h-auto rounded-[8px]"
                  loading="eager"
                />
              )}
              <div
                className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
                  hoverIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Play />
              </div>
              <CardBookmarked
                isBookmarked={
                  bookmarkedItems && bookmarkedItems.includes(data.title)
                }
                title={data.title}
                onToggleBookmark={handleToggleBookmark}
              />
              <LegendWrapper media={data} />
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
