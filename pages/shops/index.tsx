import React from 'react';
import Image from 'next/image';

import SEO from '@/components/SEO';
import MainLayout from "@/components/Layout/MainLayout";

import shopOne from "../../public/assets/images/shops_p/shopOne.webp";
import shopTwo from "../../public/assets/images/shops_p/shopTwo.webp";


export default function Shop() {
  return (
    <MainLayout
      activePage="shops"
      showDashboardSidebar={false}
      showFooter={true}
      showTopbar={true}
    >
      <div>
        <SEO title='Shops - ' description='InT Shops - Discover different shops Browse varieties of products.' image="" url="" />
        <div className="py-6 px-4 overflow-hidden w-full lg:max-w-[1350px] mx-auto">
          <h3 className="text-black font-manropeL mb-5 md:mb-8 font-bold md:text-2xl leading-normal flex items-center justify-between">
            Discover Shops of different Companies.
          </h3>
          {shops.map((logo, index) => (
            <div key={index} className="flex lg:grid grid-cols-4 gap-x-2 md:gap-x-4 gap-y-[70px] mb-[74px] lg:[grid-column-gap:2rem] overflow-scroll">
                <div className="bg-white border-white-200 border-[1px] rounded-[1px] p-2 m-4">
                  <div className="space-x-2 items-center">
                    <Image src={logo.src} alt="link" width={200} height={200} />
                    <div className="text-left flex flex-col">
                      <p className="text-[11px] xl:text-[12px] font-manropeEB">{logo?.name}</p>
                      <p className="text-[11px] xl:text-[12px] font-manropeL">{logo?.products} Digital Products</p>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

const shops = [
  {
    src: shopOne.src,
    alt: 'shop',
    section: 'shop',
    name: "Dani's Tech Couture",
    products: 110,
  },
  {
    src: shopTwo.src,
    alt: 'shop',
    section: 'shop',
    name: "Tife's Illustrations",
    products: 400,
  },
  {
    src: shopOne.src,
    alt: 'shop',
    section: 'shop',
    name: "Dani's Tech Couture",
    products: 110,
  },
  {
    src: shopTwo.src,
    alt: 'shop',
    section: 'shop',
    name: "Tife's Illustrations",
    products: 400,
  },
]
