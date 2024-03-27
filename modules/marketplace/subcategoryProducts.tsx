import React from 'react';
import { useQuery } from '@tanstack/react-query';

import ProductCardWrapper from './component/landingpage/productCardWrapper/productCardWrapper';
import { getSubCategoryProducts } from '@/http/marketplace';

// subcategoryItems is like
// {
//   "status": 200,
//   "success": true,
//   "message": "SubCategory names returned successfully",
//   "data": [
//     {
//       "id": 2,
//       "name": "Mobile"
//     },
//     {
//       "id": 1,
//       "name": "TV"
//     }
//   ]
// }

function SubCategoryProducts({ categoryId, subcategoryItems }) {
    return (
        <div>
            {subcategoryItems.data.map((subcategory, index) => (
                <SubCategoryProductWrapper
                    key={index}
                    categoryId={categoryId}
                    subcategory={subcategory}
                />
            ))}
        </div>
    );
}

function SubCategoryProductWrapper({ categoryId, subcategory }) {
    const { isLoading: isSubCategoryProductsLoading, data: SubCategoryProducts } = useQuery(
        ['subcategories', categoryId, subcategory.id],
        async () => getSubCategoryProducts(categoryId, subcategory.id)
    );

    return (
        <div key={subcategory.id}>
            <ProductCardWrapper
                title={subcategory.name}
                productsList={{ isLoading: isSubCategoryProductsLoading, items: SubCategoryProducts }}
                showTopPicks={false}
                showAll={false}
            />
        </div>
    );
}

export default SubCategoryProducts;