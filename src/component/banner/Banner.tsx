'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useAuthStore from '../../stores/useAuthStore';
import useIsAuthenticated from '../../hook/auth/useIsAuthenticated';
import { useLogout } from '@/hook/auth/useLogout';
import IconHome from '../icon/IconHome';
import IconMovie from '../icon/IconMovie';
import IconSerie from '../icon/IconSerie';
import IconBookmarked from '../icon/IconBookmarked';

const Banner = () => {
  const { token } = useAuthStore((state) => ({
    token: state.token,
  }));

  const { isAuthenticated, setIsAuthenticated } = useIsAuthenticated();
  const logout = useLogout();
  const pathname = usePathname();

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
              width={33}
              height={27}
              priority
              className="w-[33px] h-[27px]"
            />
            <div className="flex flex-col gap-[40px]">
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
            </div>
          </div>
          <div className="user-icon">
            <Image
              src="/assets/image-avatar.png"
              alt="Icon user avatar"
              width={50}
              height={50}
              priority
              className="w-[50px] h-[50px]"
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
