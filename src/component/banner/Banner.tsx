'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useAuthStore from '../../stores/useAuthStore';
import useIsAuthenticated from '../../hook/auth/useIsAuthenticated';
import { useLogout } from '@/hook/auth/useLogout';

import LinkWrapper from './LinkWrapper';

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
        <nav
          className="flex items-center justify-between px-[20px] mx-auto w-full sm:w-[96%] h-[72px] bg-[#161D2F] rounded-[15px]
          xl:fixed xl:top-[2%] xl:left-0 xl:z-10 xl:w-[96px] xl:h-[92%] xl:flex xl:flex-col xl:items-center xl:justify-between xl:py-[30px] xl:rounded-[15px] xl:mx-[30px]"
        >
          <div className="flex items-center w-full justify-between xl:flex-col xl:gap-[40px]">
            <Image
              src="/assets/logo.svg"
              alt="logo title"
              width={33}
              height={27}
              priority
              className="w-[25px] h-[20px] lg:w-[32px] lg:h-[25px] xl:w-auto xl-h-auto"
            />
            <div className="flex gap-[20px] sm:gap-[40px] xl:hidden justify-center flex-grow">
              <LinkWrapper pathname={pathname} />
            </div>
            <div className="hidden xl:flex xl:flex-col xl:gap-[40px]">
              <LinkWrapper pathname={pathname} />
            </div>
            <div className="flex items-center gap-[10px] xl:hidden">
              <Image
                src="/assets/image-avatar.png"
                alt="Icon user avatar"
                width={50}
                height={50}
                priority
                className="w-[32px] h-[32px] xl:w-[50px] xl:h-[50px]"
              />
              <button
                className="text-[#FC4747] tracking-wide xl:font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="hidden xl:flex xl:flex-col xl:gap-[10px] xl:mt-auto">
            <Image
              src="/assets/image-avatar.png"
              alt="Icon user avatar"
              width={50}
              height={50}
              priority
              className="w-[32px] h-[32px] xl:w-[50px] xl:h-[50px]"
            />
            <button
              className="text-[#FC4747] sm:text-sm	sm:tracking-wide xl:font-semibold"
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
