import Image from 'next/image';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TrendingProps } from '@/types/types';
import TrendingBtn from '../buttons/TrendingBtn';
import BookmarkedIc from '../icon/BookmarkedIc';
import LegendWrapper from './LegendWrapper';

const TrendingCards: React.FC<TrendingProps> = ({ trendings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery({ query: '(max-width: 655px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(max-width: 1225px)' });
  const cardsToShow = isTabletOrDesktop ? 2 : 3;
  const cardWidth = isMobile ? 270 : 470;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + trendings.length) % trendings.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trendings.length);
  };

  const trendingSlice = () => {
    const end = (currentIndex + cardsToShow) % trendings.length;
    return end > currentIndex
      ? trendings.slice(currentIndex, end)
      : [...trendings.slice(currentIndex), ...trendings.slice(0, end)];
  };

  return (
    trendings.length > 0 && (
      <div className="flex items-center">
        <div className="overflow-hidden">
          <div className="relative flex gap-[40px]">
            {trendingSlice().map((item, index) => (
              <div className="relative flex-none" key={`trending${index}`}>
                <div className="w-full">
                  {item.thumbnail?.trending && (
                    <Image
                      src={item.thumbnail.trending.small}
                      alt={`${item.title} ${item.category}`}
                      width={cardWidth}
                      height={130}
                      className="rounded-lg"
                    />
                  )}
                </div>
                <BookmarkedIc />
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
