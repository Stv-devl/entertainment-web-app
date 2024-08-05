import Image from 'next/image';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TrendingProps } from '@/types/types';
import TrendingBtn from '../buttons/TrendingBtn';
import LegendWrapper from './cardElements/CardLegend';
import Play from './cardElements/CardPlay';

const TrendingCards: React.FC<TrendingProps> = ({ trendings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + trendings.length) % trendings.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trendings.length);
  };

  const trendingSlice = () => {
    const end = (currentIndex + 3) % trendings.length;
    return end > currentIndex
      ? trendings.slice(currentIndex, end)
      : [...trendings.slice(currentIndex), ...trendings.slice(0, end)];
  };

  return (
    trendings.length > 0 && (
      <div className="flex items-center">
        <div className="overflow-hidden">
          <div className="relative flex gap-[16px] sm:gap-[40px]">
            {trendingSlice().map((item, index) => (
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
                <div className="flex items-center justify-center absolute top-4 right-4 w-[32px] h-[32px] z-10 bg-[#161D2F] rounded-full transform rotate-2 opacity-50 cursor-pointer hover:bg-white hover:opacity-100 transition-colors duration-500 group">
                  <Image
                    src={'../assets/icon-bookmark-empty.svg'}
                    alt={'bookmarked icon'}
                    width={12}
                    height={14}
                    className="filter invert transition duration-500 group-hover:invert-0 group-hover:brightness-0 w-[12px] h-[14px]"
                  />
                </div>
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
