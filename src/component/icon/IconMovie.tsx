import React from 'react';
import { IconBookmarkedProps } from '@/types/types';

/**
 * Renders a movie icon with dynamic color based on selection state.
 * The icon changes color when selected and includes a hover effect when not selected.
 * @param {IconBookmarkedProps} props - The props object containing the `isSelected` property.
 * @returns {JSX.Element} The home icon component.
 */
const IconMovie: React.FC<IconBookmarkedProps> = ({
  isSelected = false,
}: IconBookmarkedProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`transition duration-500  fill-current ${
        isSelected ? 'text-white' : 'text-gray-500  hover:text-red-500'
      }  w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] `}
      aria-hidden="true"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconMovie;
