import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <nav>
      <div className="icon-wrapper">
        <Image
          src="/assets/logo.svg"
          alt="logo title"
          width={50}
          height={50}
          priority
        />
        <div className="nav-icon-wrapper">
          <Image
            src="/assets/icon-nav-home.svg"
            alt="Icon home link"
            width={20}
            height={20}
          />
          <Image
            src="/assets/icon-nav-movies.svg"
            alt="Icon movies link"
            width={20}
            height={20}
          />
          <Image
            src="/assets/icon-nav-tv-series.svg"
            alt="Icon series link"
            width={20}
            height={20}
          />
          <Image
            src="/assets/icon-nav-bookmark.svg"
            alt="Icon bookmark description"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="user-icon">
        <Image
          src="/assets/image-avatar.png"
          alt="Icon user avatar"
          width={50}
          height={50}
        />
      </div>
    </nav>
  );
};

export default Banner;
