import React from 'react'
import SEO from "@/components/SEO";
import CategoryLayout from '@/components/Layout/category-layout';
import ProductCardWrapper from '@/modules/marketplace/component/landingpage/productCardWrapper/productCardWrapper';
import { useQuery } from '@tanstack/react-query';
import { getCategoryNames } from '@/http/marketplace';
import CategoryCard from '@/modules/marketplace/component/categoryCard/category-card';

function Allcategories() {
    const { isLoading: isCategoryLoading, data: CategoryNames } = useQuery(['categoryNames'], getCategoryNames)

    return (
        <>
            <SEO title='Marketplace - ' description='U2R marketplace - Browse varieties Categories of products.' image="" url="" />
            <CategoryLayout>
                <CategoryCard navItems={CategoryNames} isLoading={isCategoryLoading}/>
            </CategoryLayout>
        </>
    )
}

export default Allcategories;