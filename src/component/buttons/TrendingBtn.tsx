import React from 'react';
import Image from 'next/image';
import { btnTrendingProps } from '@/types/types';

/**
 * The TrendingBtn component renders a button with an icon, used for navigation in trending media sections.
 * The button is positioned either to the left or right, based on the `position` prop.
 * The icon changes color when the button is hovered, providing visual feedback.
 * @param {btnTrendingProps} props - The props for the TrendingBtn component.
 * @param {() => void} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.iconSrc - The source path of the icon to be displayed inside the button.
 * @param {string} props.alt - The alt text for the icon image.
 * @param {'left' | 'right'} props.position - The position of the button, either 'left' or 'right'.
 * @returns {JSX.Element} The TrendingBtn component.
 */

const TrendingBtn: React.FC<btnTrendingProps> = ({
  onClick,
  iconSrc,
  alt,
  position,
}: btnTrendingProps): JSX.Element => {
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
        width={12}
        height={14}
        className="filter invert transition duration-300 group-hover:invert-0 group-hover:brightness-0 w-[12px] h-[14px]"
      />
    </button>
  );
};

export default TrendingBtn;
