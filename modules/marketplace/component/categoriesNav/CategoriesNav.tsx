import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import more from "../../../../public/assets/ic_outline-arrow-back-ios.svg";

type CategoryType = {
    name: string;
    subcategories: { name?: string }[];
};

interface CategoriesNavProps {
    navItems: CategoryType[];
    isLoading: boolean;
}

const CategoriesNav = (props: CategoriesNavProps) => {
    return (
        <div className={`font-ppReg shadow-sm -mt-4 px-4 py-5 relative`}>
            <aside className="max-w-[1240px] mx-auto justify-between flex xl:gap-8 items-center z-50">
                <Link href="/marketplace/allcategories" className="text-[#64D1FF] text-lg hover:underline">All Categories</Link>
                <Image src={more} alt={""} />
            </aside>
        </div>
    );
};

export default CategoriesNav;
