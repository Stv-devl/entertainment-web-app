import { TrendingProps } from '@/types/types';
import Image from 'next/image';
import React, { useState } from 'react';

const TrendingCards: React.FC<TrendingProps> = ({ trendings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 3, trendings.length - 3));
  };

  return (
    <>
      {trendings && (
        <div className="flex justify-center gap-[40px]">
          {currentIndex > 0 && <button onClick={handlePrev}> &lt;</button>}
          {trendings
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div
                className="grid grid-cols-3 gap-[40px] overflow-hidden"
                key={`trending${index}`}
              >
                {item.thumbnail?.trending && (
                  <Image
                    src={item.thumbnail.trending.small}
                    alt={`${item.title} ${item.category}`}
                    width={470}
                    height={130}
                    className="rounded-lg"
                  />
                )}
                <div className="icone-wrapp">
                  <div>icone</div>
                </div>
                <div className="texte-trending-wrapper">
                  <div className="description-wrapper">
                    <p className="year">{item.year}</p>
                    <p className="dot">.</p>
                    <div className="icone-wrapper">
                      <div>icone</div>
                      <p className="type">{item.category}</p>
                    </div>
                    <p className="dot">.</p>
                    <p className="rating">{item.rating}</p>
                  </div>
                  <p className="movie-title">{item.title}</p>
                </div>
              </div>
            ))}
          {currentIndex + 3 < trendings.length && (
            <button onClick={handleNext}> &gt;</button>
          )}
        </div>
      )}
    </>
  );
};

export default TrendingCards;
