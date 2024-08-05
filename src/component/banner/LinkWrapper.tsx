import React from 'react';
import IconHome from '../icon/IconHome';
import IconMovie from '../icon/IconMovie';
import IconSerie from '../icon/IconSerie';
import Link from 'next/link';
import IconBookmarked from '../icon/IconBookmarked';
import { linkWrapperProp } from '@/types/types';

const LinkWrapper: React.FC<linkWrapperProp> = ({ pathname }) => {
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
