import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchNormal1, UserSquare } from 'iconsax-react';
import { toast } from 'react-toastify';

import Button from '../ui/Button';
import { Input, SelectInput } from '../ui/Input';
import { useAuth } from '@/context/AuthContext';
import MobileNav from '@/modules/dashboard/MobileNav';
import isAuthenticated from '@/helpers/isAuthenticated';
import { MenuUI, MenuIcon } from './MenuUI';


import notificationIcon from './assets/notification.svg';
import cartIcon from './assets/shopping-cart.svg';
import briefCaseIcon from './assets/briefcase.svg';
import dashBoard from './assets/home-2.svg';
import likesIcon from './assets/like-shapes.svg';
import settingsIcon from './assets/setting-2.svg';
import logo from '../../public/assets/images/logo/INT_logo.png'
import useUserSession from '@/hooks/Auth/useUserSession';


function TopBar(props: { activePage: string; showDashboard: boolean }) {
  const { auth: globalAuth } = useAuth();
  const { signIn, signUp } = useUserSession();
  const [auth, setAuth] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    const token = localStorage.getItem('zpt');
    const isLoggedIn = isAuthenticated(token as string);

    if (isLoggedIn) {
      setAuth(true);
    }
  }, []);

  const router = useRouter();

  const activeLink = (path: string) =>
    router.pathname === path
      ? 'text-green-950 group-hover:text-white text-base font-semibold  leading-normal tracking-tight'
      : 'text-gray-600 text-base font-semibold  leading-normal tracking-tight';

  const handleSearch = async (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      if (searchQuery.trim() === '') {
        toast.error('A search term must be provided.');
      }
    }
  };

  return (
    <>
      <nav className="w-full py-6  bg-white-100 border-b border-[#EBEEEF] justify-between items-center px-4  z-[40]  isolate sticky top-0  ">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between  relative gap-1">
          <div className=" flex lg:max-w-[450px] max-w-none lg:w-[100%] lg:gap-14 gap-6">
            <div className="flex items-center gap-1 justify-center">
              {auth && (
                <>
                  <MenuIcon toggle={toggle} style="lg:hidden" toggler={handleToggle} />
                  <Link className="flex items-center gap-2 hover:underline justify-center" href={'/'}>
                    <Image src={logo} alt="logo" className='w-[30px] h-[30px]' />
                    <span className="font-bold tracking-[0.008rem]">U2R&nbsp;Technologies</span>
                  </Link>
                </>
              )}
              {!auth && (
                <Link className="flex items-center gap-2 hover:underline justify-center" href={'/'}>
                  <Image src={logo} alt="logo" className='w-[30px] h-[30px]' />
                  <span className="font-bold tracking-[0.008rem]">U2R&nbsp;Technologies</span>
                </Link>
              )}
            </div>
            <div className=" hidden lg:flex gap-10 items-start">
              <div className=" group flex flex-col ali justify-center items-center gap-1 ">
                <Link className={activeLink('/marketplace')} href={'/marketplace'}>
                  Marketplace
                </Link>
                {router.pathname === '/marketplace' ? <div className="w-6 h-0.5 bg-[#64D1FF] rounded-lg" /> : null}
              </div>
              <div className=" group flex flex-col ali justify-center items-center gap-1 ">
                <Link className={activeLink('/shops')} href={'/shops'}>
                  Shops
                </Link>
                {router.pathname === '/shops' ? <div className="w-6 h-0.5 bg-[#64D1FF] rounded-lg" /> : null}
              </div>
            </div>
          </div>

          {/* Right Items */}
          <div
            className={`lg:flex hidden items-center gap-4  lg:flex-row flex-col w-[100%] py-8 lg:py-0 lg:justify-end lg:opacity-100 transition-all ease-in-out duration-500 top-[9vh]   z-[1]`}
          >
            <div className="max-w-[53%] h-auto lg:h-12 p-4 rounded-lg border border-neutral-200 justify-start items-center gap-3 flex lg:flex-row flex-col basis-[100%]">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex lg:w-full w-auto">
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                      <g>
                        <g stroke="#464646" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                          <path d="M7.667 14a6.333 6.333 0 100-12.667 6.333 6.333 0 000 12.667z"></path>
                          <path d="M14.667 14.667l-1.333-1.334"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <input
                  value={searchQuery}
                  onKeyUp={handleSearch}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="placeholder:text-neutral-400 text-gray-900 text-base font-normal leading-normal tracking-tight focus:border-0 focus:outline-none focus:ring-0 w-[100%] font-manropeL"
                />
              </div>
            </div>

            {/* Action Buttons */}

            {/* if not Authenticated */}
            {!globalAuth && (
              <div className=" p-2 justify-center relative items-center gap-4 lg:flex-row flex flex-col mt-5  lg:mt-0">
                <div className="justify-center hidden items-center lg:w-auto w-[100%] gap-2 lg:flex-row lg:flex flex-col">
                  <Button
                    href="/auth/login"
                    onClick={signIn}
                    className="rounded-lg py-3 px-6 border-0 bg-[#64D1FF] bg-opacity-30"
                    intent={'secondary'}
                    size={'md'}
                  >
                    Sign In
                  </Button>

                  <Button
                    href="/auth/signup"
                    onClick={signUp}
                    className="rounded-lg px-6 py-3 bg-[#64D1FF]"
                    intent={'primary'}
                    size={'md'}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* if Authenticated */}
          <div className="flex lg:hidden items-center ">
            {auth && (
              <div className="lg:hidden flex items-center gap-1 ">

                {/* Wishlist icon */}
                <div className="flex gap-3">
                  <Link href={'/marketplace/wishlist'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <mask
                        id="mask0_1377_22486"
                        style={{ maskType: 'alpha' }}
                        width="24"
                        height="24"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
                      </mask>
                      <g mask="url(#mask0_1377_22486)">
                        <path
                          fill="#5B5F5E"
                          d="M17.95 15.82l-2.494-2.47 1.069-1.054 1.425 1.41 3.525-3.525 1.07 1.044-4.595 4.594zM11 20.326L8.835 18.38a112.583 112.583 0 01-3.444-3.246c-.935-.927-1.691-1.774-2.269-2.54-.577-.766-.992-1.486-1.244-2.16A5.911 5.911 0 011.5 8.35c0-1.42.479-2.605 1.436-3.557S5.08 3.365 6.5 3.365c.873 0 1.698.205 2.475.613.777.408 1.452.994 2.025 1.757.573-.763 1.248-1.349 2.025-1.757a5.244 5.244 0 012.475-.613c1.254 0 2.312.37 3.174 1.11a5.065 5.065 0 011.678 2.775h-1.577c-.23-.744-.649-1.327-1.258-1.75a3.458 3.458 0 00-2.017-.635c-.83 0-1.566.23-2.205.688-.639.458-1.241 1.107-1.807 1.947h-.976c-.562-.846-1.174-1.497-1.835-1.952A3.76 3.76 0 006.5 4.865c-.963 0-1.787.331-2.472.993C3.343 6.519 3 7.35 3 8.35c0 .556.117 1.121.35 1.694.233.573.65 1.234 1.25 1.982s1.417 1.624 2.45 2.629C8.083 15.659 9.4 16.875 11 18.3c.472-.422.977-.87 1.515-1.344.539-.475.993-.888 1.362-1.24l1.07 1.069c-.38.352-.833.76-1.358 1.223-.525.463-1.02.905-1.485 1.327L11 20.327z"
                        ></path>
                      </g>
                    </svg>
                  </Link>

                  {/* Notification icon */}
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <g>
                        <g stroke="#464646" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                          <path d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"></path>
                          <path d="M22 22l-2-2"></path>
                        </g>
                      </g>
                    </svg>
                  </span>

                  {/* Cart icon */}
                  <div className="w-fit flex h-fit relative cursor-pointer">
                    <Image
                      src={notificationIcon}
                      draggable={false}
                      width={24}
                      height={24}
                      alt="Cart Icon"
                    />
                  </div>
                </div>

                {/* User information */}
                <div className="auth flex items-center scale-75 gap-1 cursor-pointer">
                  <div className="details hidden ">
                    <p className=" font-bold ">
                      {globalAuth?.user?.firstName} {globalAuth?.user?.lastName}
                    </p>
                  </div>
                  <UserSquare size="32" color="#555555" />{' '}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;