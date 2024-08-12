import React from 'react';
import IconHome from '../icon/IconHome';
import IconMovie from '../icon/IconMovie';
import IconSerie from '../icon/IconSerie';
import Link from 'next/link';
import IconBookmarked from '../icon/IconBookmarked';
import { linkWrapperProp } from '@/types/types';

/**
 * The LinkWrapper component renders a set of navigation links, each represented by an icon.
 * The icons visually indicate which page is currently selected based on the `pathname` prop.
 * The component includes links for the home page, movies, TV series, and bookmarked items.
 * Each icon is highlighted when its corresponding route matches the current pathname.
 * @param {linkWrapperProp} props - The props for the LinkWrapper component.
 * @param {string} props.pathname - The current path used to determine which icon should be highlighted.
 * @returns {JSX.Element} The LinkWrapper component with navigation links.
 */

const LinkWrapper: React.FC<linkWrapperProp> = ({
  pathname,
}: linkWrapperProp): JSX.Element => {
  return (
    <>
      <Link href="/home">
        <IconHome isSelected={pathname === '/home'} />
      </Link>
      <Link href="/movies">
        <IconMovie isSelected={pathname === '/movies'} />
      </Link>
      <Link href="/series">
        <IconSerie isSelected={pathname === '/series'} />
      </Link>
      <Link href="/bookmarked">
        <IconBookmarked isSelected={pathname === '/bookmarked'} />
      </Link>
    </>
  );
};

export default LinkWrapper;
