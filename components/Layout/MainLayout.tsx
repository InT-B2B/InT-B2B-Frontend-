import React, { useContext, useEffect } from 'react';

import { twMerge } from 'tailwind-merge';
import Head from 'next/head';
import Image from 'next/image';

import MainLayoutContext from '@/context/LayoutContext';
import { MainLayoutProps } from '../../@types';
import Footer from '../footer';
import SideBar from '../Navbar/Sidebar';
import TopBar from '../Navbar/TopBar';
import SEO from '../SEO';
import useAuthRevalidate from '../../hooks/Auth/useAuthRevalidate';

function MainLayout({
    children,
    activePage,
    className,
    showDashboardSidebar = true,
    showFooter = true,
    showTopbar,
    includeMarginTop = true,
}: MainLayoutProps) {
    const { setActivePage } = useContext(MainLayoutContext);

    useAuthRevalidate();

    useEffect(() => {
        setActivePage(activePage as string);
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="/assets/INT_logo.png" />
            </Head>

            <div className={twMerge('w-full flex flex-col relative h-screen overflow-y-auto overflow-x-hidden', className)}>
                {showTopbar && <TopBar activePage={activePage} showDashBorad={showDashboardSidebar} />}

                {showDashboardSidebar && <SideBar activePage={activePage} />}
                <div className={`w-full ${includeMarginTop ? 'mt-5' : ''}`}>{children}</div>

                {showFooter && <Footer />}
            </div>
        </>
    );
}

export default MainLayout;