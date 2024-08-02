import React from 'react';
import Image from 'next/image';
import { btnTrendingProps } from '@/types/types';

const TrendingBtn: React.FC<btnTrendingProps> = ({
  onClick,
  iconSrc,
  alt,
  position,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group absolute ${
        position === 'left' ? 'left-4' : 'right-4'
      } top-1/2 transform -translate-y-1/2 w-10 h-10 z-10 bg-[#161D2F] text-white rounded-full flex items-center justify-center opacity-50 transition-colors duration-300 hover:bg-white hover:opacity-100`}
    >
      <Image
        src={iconSrc}
        alt={alt}
        width={14}
        height={14}
        className="filter invert transition duration-300 group-hover:invert-0 group-hover:brightness-0 w-[12px] h-[14px]"
      />
    </button>
  );
};

export default TrendingBtn;
