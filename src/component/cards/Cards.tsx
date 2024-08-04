import { DataProps } from '@/types/types';
import React, { useState } from 'react';
import LegendWrapper from './cardElements/CardLegend';
import Play from './cardElements/CardPlay';

import CardBookmarked from './cardElements/CardBookmarked';

const Cards: React.FC<DataProps> = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-4 gap-x-[2%] gap-y-[32px] max-w-[1490px] ">
      {data &&
        data.map((data, index) => (
          <div
            className="relative w-[calc(23.5% - 2%)]"
            key={`trending${index}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {data.thumbnail?.regular && (
              <img
                src={data.thumbnail.regular.small}
                alt={`${data.title} ${data.category}`}
                className="w-full h-auto rounded-[8px]"
              />
            )}
            <div
              className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
                hoverIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Play />
            </div>
            <CardBookmarked isBookmarked={data.isBookmarked} />

            <LegendWrapper data={data} />
          </div>
        ))}
    </div>
  );
};

export default Cards;
