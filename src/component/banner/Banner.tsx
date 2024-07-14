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
    <>
      {token || isAuthenticated ? (
        <nav className="flex flex-col items-center justify-between bg-[#161D2F] fixed z-1 h-[92%] w-[96px] mt-[2%] mx-[30px] py-[30px] top-0 left-0 bg-customBg rounded-[15px]">
          <div className="flex flex-col gap-[80px] items-center">
            <Image
              src="/assets/logo.svg"
              alt="logo title"
              width={32}
              height={25.6}
              priority
            />
            <div className="flex flex-col gap-[40px]">
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
            <button
              className="text-[#FC4747] font-semibold tracking-wide mt-[10px]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Banner;
