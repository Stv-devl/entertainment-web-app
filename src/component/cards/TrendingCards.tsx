import { CardsProps } from '@/types/types';
import React from 'react';

const TrendingCards: React.FC<CardsProps> = ({ data }) => {
  return (
    <div className="flex gap-[40px]">
      {data &&
        data.map((data, index) => (
          <div className="card-trending-wrapper" key={`trending${index}`}>
            {data.thumbnail?.trending && (
              <picture>
                <source
                  srcSet={data.thumbnail.trending.large}
                  media="(min-width: 1200px)"
                />
                <img
                  src={data.thumbnail.trending.small}
                  alt={`${data.title} ${data.category}`}
                />
              </picture>
            )}
            <div>icone</div>
            <div className="texte-trending-wrapper">
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

export default TrendingCards;
