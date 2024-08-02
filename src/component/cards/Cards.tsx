import { DataProps } from '@/types/types';
import React, { useState } from 'react';
import LegendWrapper from './cardElements/CardLegend';
import Play from './cardElements/CardPlay';
import Image from 'next/image';

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
            <div className="flex items-center justify-center absolute top-4 right-4 w-[32px] h-[32px] z-10 bg-[#161D2F] rounded-full transform rotate-2 opacity-50 cursor-pointer hover:bg-white hover:opacity-100 transition-colors duration-500 group">
              <Image
                src={'../assets/icon-bookmark-empty.svg'}
                alt={'bookmarked icon'}
                width={12}
                height={14}
                className="filter invert transition duration-500 group-hover:invert-0 group-hover:brightness-0 w-[12px] h-[14px]"
              />
            </div>
            <LegendWrapper data={data} />
          </div>
        ))}
    </div>
  );
};

export default Cards;
