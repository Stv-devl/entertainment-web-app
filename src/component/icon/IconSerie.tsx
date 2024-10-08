import React from 'react';
import { IconBookmarkedProps } from '@/types/types';

/**
 * Renders a serie icon with dynamic color based on selection state.
 * The icon changes color when selected and includes a hover effect when not selected.
 * @param {IconBookmarkedProps} props - The props object containing the `isSelected` property.
 * @returns {JSX.Element} The home icon component.
 */
const IconSerie: React.FC<IconBookmarkedProps> = ({
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
        xmlns="http://www.w3.org/2000/svg"
        d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconSerie;
