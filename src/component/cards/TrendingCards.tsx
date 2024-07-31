import Image from 'next/image';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TrendingProps } from '@/types/types';
import TrendingBtn from '../buttons/TrendingBtn';

const TrendingCards: React.FC<TrendingProps> = ({ trendings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery({ query: '(max-width: 655px)' });
  const cardWidth = isMobile ? 270 : 470;

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
      : [...trendings.slice(currentIndex), ...trendings.slice(0, 3)];
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
                <div className="flex items-center justify-center absolute top-4 right-4 w-[32px] h-[32px] z-10 bg-[#161D2F] rounded-full transform rotate-2 opacity-50 cursor-pointer hover:bg-white hover:opacity-100 transition-colors duration-500 group">
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-white group-hover:text-black transition-colors duration-500"
                  >
                    <path
                      d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-6 left-4">
                  <div className="flex gap-[8px]">
                    <p className="year">{item.year}</p>
                    <p className="dot">.</p>
                    <div className="flex items-center gap-[6px]">
                      <Image
                        src={'../assets/icon-category-movie.svg'}
                        alt={`category movie icon`}
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px]"
                      />
                      <p>{item.category}</p>
                    </div>
                    <p className="dot">.</p>
                    <p className="rating">{item.rating}</p>
                  </div>
                  <p className="text-2xl">{item.title}</p>
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
