import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchNormal1 } from 'iconsax-react';
import { toast } from 'react-toastify';

import Button from '../ui/Button';
import { useAuth } from '@/context/AuthContext';
import isAuthenticated from '@/helpers/isAuthenticated';
import useUserSession from '@/hooks/Auth/useUserSession';
import { MenuIcon } from './MenuUI';

import signOutIcon from './assets/bx-error-alt.svg';
import settingIcon from './assets/settings.svg';
import profileIcon from './assets/profileIcon.svg';
import dashboardIcon from './assets/dashboardIcon.svg'
import notificationIcon from './assets/notification.svg';
import cartIcon from './assets/shopping-cart.svg';
import likesIcon from './assets/heart-add.svg';
import avatarIcon from './assets/user.png';
import logo from '../../public/assets/images/logo/INT_logo.png'


function TopBar(props: { activePage: string; showDashboard: boolean }) {
  const { auth: globalAuth } = useAuth();
  // globalAuth => contains
  //   token: string, // This will be a string representing the authentication token
  //   user: User // This will be an object containing user information
  const [auth, setAuth] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { signIn, signUp } = useUserSession();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const isLoggedIn = isAuthenticated(token as string);

    if (isLoggedIn) {
      setAuth(true);
    }
  }, []);

  // Active page
  const router = useRouter();
  const activeLink = (path: string) =>
    router.pathname === path
      ? 'group-hover:text-white text-base font-semibold  leading-normal tracking-tight'
      : 'text-gray-600 text-base font-semibold  leading-normal tracking-tight';

  // Search functionality 
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = async (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      if (searchQuery.trim() === '') {
        toast.error('A search term must be provided.');
      }
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="w-full py-6  bg-white-100 border-b border-[#EBEEEF] justify-between items-center px-4  z-[40]  isolate sticky top-0  ">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between relative gap-1">
          <div className=" flex lg:max-w-[450px] max-w-none lg:w-[100%] lg:gap-14 gap-6">
            <div className="flex items-center gap-1 justify-center">
              <div className='flex justify-between'>
                <Link className="flex items-center gap-2 hover:underline justify-center" href={'/'}>
                  <Image src={logo} alt="logo" className='w-[30px] h-[30px]' />
                  <span className="font-bold tracking-[0.008rem]">U2R&nbsp;Technologies</span>
                </Link>
              </div>
            </div>
            <div className=" hidden lg:flex gap-10 items-start">
              <div className=" group flex flex-col ali justify-center items-center gap-1 ">
                <Link className={activeLink('/marketplace')} href={'/marketplace'}>
                  Marketplace
                </Link>
                {router.pathname.startsWith('/marketplace') ? <div className="w-6 h-0.5 bg-[#64D1FF] rounded-lg" /> : null}
              </div>
              <div className=" group flex flex-col ali justify-center items-center gap-1 ">
                <Link className={activeLink('/shops')} href={'/shops'}>
                  Shops
                </Link>
                {router.pathname.startsWith('/shops') ? <div className="w-6 h-0.5 bg-[#64D1FF] rounded-lg" /> : null}
              </div>
            </div>
          </div>

          {/* Right Items */}
          <div
            className={`flex items-center gap-4  lg:flex-row flex-col w-[100%] py-8 lg:py-0 lg:justify-between lg:opacity-100 transition-all ease-in-out duration-500 top-[9vh]   z-[1]`}
          >
            {/* Search in large screens */}
            <div className="lg:flex hidden max-w-[50%] h-auto lg:h-12 p-4 rounded-lg border border-neutral-200 justify-start items-center gap-3 lg:flex-row flex-col basis-[100%]">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex lg:w-full w-auto">
                <div className="w-4 h-4 justify-center items-center flex">
                  <SearchNormal1/>
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
              {/* if there is no authentication data (i.e., globalAuth is falsy) */}
              {!auth && (
                <>
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
                <div className='lg:hidden'>
                    <MenuIcon toggle={toggle} toggler={handleToggle} />
                    {toggle && (
                    <div
                      className="absolute flex lg:flex flex-col right-0 lg:top-[71px] top-[60px] bg-white-100 shadow-lg z-[60] w-[250px]"
                    >
                      <ul>
                        <Link
                          href="#"
                          className=" border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={profileIcon} alt="sign-in" />
                          <p className="font-manropeL">Sign In</p>
                        </Link>
                        <Link
                          href="#"
                          className="border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={profileIcon} alt="sign-up" />
                          <p className="font-manropeL">Sign Up</p>
                        </Link>
                      </ul>
                    </div>
                  )}
                  </div>
                  </>
              )}

            {/* if Authenticated */}
              {auth && (
              <div className='flex w-[100%] items-center'>
                <div className='flex items-center justify-between w-[100%] gap-1'>
                  <div className="flex items-center justify-between gap-10">
                    <div className="lg:flex gap-4 hidden">
                      {/* Wishlist icon */}
                      <div className="w-fit flex h-fit relative cursor-pointer">
                        <Link href={'/marketplace/wishlist'}>
                          <span className="text-[#fff] text-[8px] font-bold  leading-3 tracking-tight w-3 h-3 px-1 absolute bg-[#64D1FF] rounded-[80px] flex-col justify-center items-center gap-2.5 inline-flex top-[-4px] left-[-2px]">
                            5
                          </span>
                          <Image
                            src={likesIcon}
                            draggable={false}
                            width={24}
                            height={24}
                            alt="Cart Icon"
                          />
                        </Link>
                      </div>

                      {/* Cart icon */}
                      <div className="w-fit flex h-fit relative cursor-pointer">
                        <Link href={'/marketplace/cart'}>
                          <span className="text-[#fff] text-[8px] font-bold  leading-3 tracking-tight w-3 h-3 px-1 absolute bg-[#64D1FF] rounded-[80px] flex-col justify-center items-center gap-2.5 inline-flex top-[-4px] left-[-2px]">
                            1
                          </span>
                          <Image
                            src={cartIcon}
                            draggable={false}
                            width={24}
                            height={24}
                            alt="Cart Icon"
                          />
                        </Link>
                      </div>

                      {/* Notification icon */}
                      <div className="w-fit flex h-fit relative cursor-pointer">
                        <Link href={'/marketplace/notification'}>
                          <span className="text-[#fff] text-[8px] font-bold  leading-3 tracking-tight w-3 h-3 px-1 absolute bg-[#64D1FF] rounded-[80px] flex-col justify-center items-center gap-2.5 inline-flex top-[-4px] left-[-2px]">
                            4
                          </span>
                          <Image
                            src={notificationIcon}
                            draggable={false}
                            width={24}
                            height={24}
                            alt="notification Icon"
                          />
                        </Link>
                      </div>
                    </div>

                    {/* User information */}
                    <div className="user-info lg:flex hidden items-center gap-3 cursor-pointer">
                      <div className="user-details">
                        <p className="text-gray-800 font-semibold">UsersFirstName</p>
                        <p className="text-gray-500 text-sm">UsersLastName</p>
                      </div>
                      <div className="user-avatar rounded-full overflow-hidden">
                        <Image
                          src={avatarIcon}
                          alt="User Avatar"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <MenuIcon toggle={toggle} toggler={handleToggle} />
                    {toggle && (
                    <div
                      className="absolute flex lg:flex flex-col right-0 lg:top-[71px] top-[60px] bg-white-100 shadow-lg z-[60] w-[250px]"
                    >
                      <ul>
                        <Link
                          href="#"
                          className=" border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={profileIcon} alt="Briefcase icon" />
                          <p className="font-manropeL">View Profile</p>
                        </Link>
                        <Link
                          href="#"
                          className="border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={dashboardIcon} alt="dashboard" />
                          <p className="font-manropeL">Dashboard</p>
                        </Link>
                        <Link
                          href="#"
                          className="border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={likesIcon} alt="wishlist" />
                          <p className="font-manropeL">My Wishlist</p>
                        </Link>
                        <Link
                          href="#"
                          className="border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={cartIcon} alt="cart" />
                          <p className="font-manropeL">My Shopping Cart</p>
                        </Link>
                        <Link
                          href="#"
                          className=" border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={settingIcon} alt="Setting" />
                          <p className="font-manropeL">Settings</p>
                        </Link>

                        {/* Logout button */}
                        <div className="font-manropeL">
                          <Link
                          href="#"
                          className=" border-[#EBEEEF] cursor-pointer hover:bg-[#bdebff] py-5 px-4 flex gap-6 "
                        >
                          <Image draggable={false} src={signOutIcon} alt="Setting" />
                          <p className="font-manropeL text-red-200">Sign Out</p>
                        </Link>
                        </div>
                      </ul>
                    </div>
                  )}
                  </div>
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