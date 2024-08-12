import { CardBookmarkedProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';

/**
 * The CardBookmarked component displays a bookmark icon that indicates whether an item is bookmarked.
 * The icon can be toggled between bookmarked and not bookmarked states.
 * The component is typically used as an overlay on media cards to allow users to quickly add or remove items from their bookmarks.
 * @component
 * @param {CardBookmarkedProps} props - The props for the CardBookmarked component.
 * @param {boolean} props.isBookmarked - Indicates if the item is currently bookmarked.
 * @param {string} props.title - The title of the item to be bookmarked.
 * @param {(title: string) => void} props.onToggleBookmark - Function to be called when the bookmark icon is clicked, toggling the bookmark state.
 * @returns {JSX.Element} The CardBookmarked component.
 */

const CardBookmarked: React.FC<CardBookmarkedProps> = ({
  isBookmarked,
  title,
  onToggleBookmark,
}: CardBookmarkedProps): JSX.Element => {
  return (
    <div
      className="flex items-center justify-center absolute top-2 sm:top-4 right-4 w-[32px] h-[32px] z-10 bg-[#161D2F] rounded-full transform rotate-1 opacity-50 cursor-pointer hover:bg-white hover:opacity-100 transition-colors duration-500 group"
      onClick={() => onToggleBookmark(title)}
    >
      <Image
        src={`../assets/icon-bookmark-${!isBookmarked ? 'empty' : 'full'}.svg`}
        alt={`Bookmarked icon ${
          !isBookmarked ? 'is not bookmarked' : "it's bookmarked"
        }`}
        width={12}
        height={14}
        className={`transition duration-500 group-hover:invert-0 group-hover:brightness-0 w-[12px] h-[14px] ${
          !isBookmarked ? 'filter invert' : ''
        }`}
      />
    </div>
  );
};

export default CardBookmarked;
