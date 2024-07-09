'use client';

import React from 'react';
import Image from 'next/image';
import useAuthStore from '../../stores/useAuthStore';
import useIsAuthenticated from '../../hook/auth/useIsAuthenticated';
import { useLogout } from '@/hook/auth/useLogout';
import Link from 'next/link';

const Banner = () => {
  const { token } = useAuthStore((state) => ({
    token: state.token,
  }));

  const { isAuthenticated, setIsAuthenticated } = useIsAuthenticated();
  const logout = useLogout();

  const handleLogout = () => {
    logout(setIsAuthenticated);
  };

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
          <Link href="/home">
            <Image
              src="/assets/icon-nav-home.svg"
              alt="Icon home link"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/movies">
            <Image
              src="/assets/icon-nav-movies.svg"
              alt="Icon movies link"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/series">
            <Image
              src="/assets/icon-nav-tv-series.svg"
              alt="Icon series link"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/bookmarked">
            <Image
              src="/assets/icon-nav-bookmark.svg"
              alt="Icon bookmark description"
              width={20}
              height={20}
            />
          </Link>
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
      {token || isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : null}
    </nav>
  );
};

export default Banner;
