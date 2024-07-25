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
      className={`absolute ${
        position === 'left' ? 'left-4' : 'right-4'
      } top-1/2 transform -translate-y-1/2 w-10 h-10 z-10 bg-[#161D2F] text-white rounded-full flex items-center justify-center opacity-50`}
    >
      <Image
        src={iconSrc}
        alt={alt}
        width={14}
        height={14}
        className="filter invert brightness-100 w-[12px] h-[14px] "
      />
    </button>
  );
};

export default TrendingBtn;
