import React from 'react';
import Image from 'next/image';

import SEO from '@/components/SEO';
import ShopLayout from '@/components/Layout/shops-layout';
import ShopLanding from '@/modules/shops/shopLanding';

export default function Shop() {
  return (
    <div>
        <SEO title='Shops - ' description='InT Shops - Discover different shops Browse varieties of products.' image="" url="" />
        <ShopLanding />
    </div>
  )
}