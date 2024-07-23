import { CardsProps } from '@/types/types';
import React from 'react';

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-[25px]">
      {data &&
        data.map((data, index) => (
          <div className="card-wrapper custom-col" key={`trendingd${index}`}>
            <div>icone</div>
            {data.thumbnail?.regular && (
              <picture>
                <source
                  srcSet={data.thumbnail.regular.large}
                  media="(min-width: 1200px)"
                />
                <source
                  srcSet={data.thumbnail.regular.medium}
                  media="(min-width: 768px)"
                />
                <img
                  src={data.thumbnail.regular.small}
                  alt={`${data.title} ${data.category}`}
                />
              </picture>
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
