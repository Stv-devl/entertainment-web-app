import React, { useCallback, useMemo, useState } from 'react';
import { TrendingProps } from '@/types/types';
import TrendingBtn from '../buttons/TrendingBtn';
import LegendWrapper from './cardElements/CardLegend';
import Play from './cardElements/CardPlay';
import CardBookmarked from './cardElements/CardBookmarked';
import useIsBookmarked from '@/hook/dataSync/useBookmarked';
import useFitlerWithId from '@/hook/dataSync/useFitlerWithId';

const TrendingCards: React.FC<TrendingProps> = ({ trendings, user }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const { bookmarkedItems, toggleBookmark } = useIsBookmarked(user);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + trendings.length) % trendings.length);
  }, [trendings.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % trendings.length);
  }, [trendings.length]);

  const trendingSlice = useMemo(() => {
    const end = (currentIndex + 3) % trendings.length;
    return end > currentIndex
      ? trendings.slice(currentIndex, end)
      : [...trendings.slice(currentIndex), ...trendings.slice(0, end)];
  }, [currentIndex, trendings]);

  return (
    trendings.length > 0 && (
      <div className="flex items-center">
        <div className="overflow-hidden">
          <div className="relative flex gap-[16px] sm:gap-[40px]">
            {trendingSlice.map((item, index) => (
              <div
                className={`relative flex-none w-[240px] sm:w-[470px] h-auto rounded-lg overflow-hidden`}
                key={`trending${index}`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item.thumbnail?.trending && (
                  <img
                    src={item.thumbnail.trending.small}
                    alt={`${item.title} ${item.category}`}
                    className="object-cover rounded-lg"
                  />
                )}

                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
                    hoverIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Play />
                </div>
                <CardBookmarked
                  isBookmarked={bookmarkedItems.includes(item.title)}
                  title={item.title}
                  onToggleBookmark={toggleBookmark}
                />
                <div className="absolute bottom-6 left-4">
                  <LegendWrapper data={item} />
                </div>
              </div>
            ))}
            <TrendingBtn
              onClick={handlePrev}
              iconSrc={'../assets/icon-chevron-left-solid.svg'}
              alt="button left icon"
              position="left"
            />
            <TrendingBtn
              onClick={handleNext}
              iconSrc={'../assets/icon-chevron-right-solid.svg'}
              alt="button right icon"
              position="right"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default TrendingCards;
