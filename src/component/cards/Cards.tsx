import { CardsProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-[25px]">
      {data &&
        data.map((data, index) => (
          <div className="card-wrapper custom-col" key={`trending${index}`}>
            <div>icone</div>
            {data.thumbnail?.regular && (
              <Image
                src={data.thumbnail.regular.small}
                alt={`${data.title} ${data.category}`}
                width={328}
                height={220}
                className="rounded-[8px]"
              />
            )}
            <div className="texte-wrapper">
              <div className="description-wrapper">
                <p className="year">{data.year}</p>
                <p className="dot">.</p>
                <div className="icone-wrapper">
                  <div>icone</div>
                  <p className="type">{data.category}</p>
                </div>
                <p className="dot">.</p>
                <p className="rating">{data.rating}</p>
              </div>
              <p className="movie-title">{data.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
