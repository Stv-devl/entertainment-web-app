import React from 'react';
import { IconBookmarkedProps } from '@/types/types';

/**
 * Renders a home icon with dynamic color based on selection state.
 * The icon changes color when selected and includes a hover effect when not selected.
 * @param {IconBookmarkedProps} props - The props object containing the `isSelected` property.
 * @returns {JSX.Element} The home icon component.
 */

const IconHome: React.FC<IconBookmarkedProps> = ({
  isSelected = false,
}: IconBookmarkedProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`transition duration-500  fill-current ${
        isSelected ? 'text-white' : 'text-gray-500  hover:text-red-500'
      } w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] `}
      aria-hidden="true"
    >
      <path
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconHome;
