import { DataProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import BookmarkedIc from '../icon/BookmarkedIc';
import LegendWrapper from './LegendWrapper';

const Cards: React.FC<DataProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-x-[2%] gap-y-[32px] max-w-[1490px] ">
      {data &&
        data.map((data, index) => (
          <div
            className="relative w-[calc(23.5% - 2%)]"
            key={`trending${index}`}
          >
            {data.thumbnail?.regular && (
              <img
                src={data.thumbnail.regular.small}
                alt={`${data.title} ${data.category}`}
                className="w-full h-auto rounded-[8px]"
              />
            )}
            <BookmarkedIc />
            <LegendWrapper data={data} />
          </div>
        ))}
    </div>
  );
};

export default Cards;
