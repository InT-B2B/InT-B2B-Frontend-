import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MainLayout from "@/components/Layout/MainLayout";
import SEO from "@/components/SEO";
import CategoriesNav from "../categoriesNav/CategoriesNav";
import ProductCardWrapper from "./productCardWrapper/productCardWrapper";
import { fetchLimitedOffers, fetchRecommendation } from "@/http/marketplace";

function LandingPage() {

    const { isLoading: isLimitedOfferLoading, data: limitedOffersData } = useQuery(['products/limited_offers'], fetchLimitedOffers)
    const { isLoading: isRecommendationLoading, data: RecommendationData } = useQuery(['recommendations'], fetchRecommendation)

    return (
        <MainLayout
            activePage="marketplace"
            showDashboardSidebar={false}
            showFooter={true}
            showTopbar={true}
        >
            <SEO title='InT Marketplace' description='InT marketplace - Browse varieties of products based on choice.' image="" url="" />
            <CategoriesNav navItems={[]} isLoading={false} />
            <div className="py-6 px-4 overflow-hidden w-full lg:max-w-[1350px] mx-auto">
                <div className="max-w-[1240px] mx-auto">
                    <ProductCardWrapper
                        title="Popular Products"
                        productsList={{ isLoading: isLimitedOfferLoading, items: limitedOffersData }}
                        showTopPicks={true}
                        showAll={false}
                    />
                    <ProductCardWrapper
                        title="Limited Offers"
                        productsList={{ isLoading: isRecommendationLoading, items: RecommendationData }}
                        showTopPicks={false}
                        showAll={false}
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default LandingPage;

const limitedOffersList = [
    {
        "id": "1a23bc45-6789-012c-3456-7890def12345",
        "shop": {
            "id": "ghij6789-0123-4567-89ab-0123456789kl",
            "name": "Smith's Electronics Hub"
        },
        "name": "Smart Home Bundle",
        "description": "Upgrade your home with the latest smart home devices. Limited-time offer!",
        "quantity": 15,
        "category": {
            "id": 123,
            "name": "Smart Home",
            "createdat": "2024-01-11T18:30:00.000000Z",
            "user": "012345kl-ghij-6789-0123-4567mnop8901"
        },
        "price": "899.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=3109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "699.99",
        "tax": "50.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T18:35:45.678901Z",
        "updatedat": "2024-01-11T18:35:45.678923Z"
    },
    {
        "id": "2c34de56-7890-12d3-4567-89e0f12345ab",
        "shop": {
            "id": "ijkl9012-3456-7890-1234-5678mnop6789",
            "name": "Miller's Fashion Outlet"
        },
        "name": "Luxury Watch Set",
        "description": "Elegant and stylish luxury watch set. Limited-time exclusive offer!",
        "quantity": 20,
        "category": {
            "id": 234,
            "name": "Watches",
            "createdat": "2024-01-11T20:45:00.000000Z",
            "user": "345abc67-89de-0123-4567-89012fgh3456"
        },
        "price": "1499.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=3841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "1299.99",
        "tax": "75.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T20:50:30.123456Z",
        "updatedat": "2024-01-11T20:50:30.123478Z"
    },
    {
        "id": "3e56ef78-9012-34d5-6789-0123fghi12345",
        "shop": {
            "id": "klmn1234-5678-90ab-0123-4567opqr7890",
            "name": "Anderson's Sports Emporium"
        },
        "name": "Fitness Equipment Set",
        "description": "Transform your home into a fitness zone with this limited-time fitness equipment set.",
        "quantity": 10,
        "category": {
            "id": 345,
            "name": "Fitness",
            "createdat": "2024-01-11T22:30:00.000000Z",
            "user": "456789ab-cdef-0123-4567-89ab012345cd"
        },
        "price": "799.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "599.99",
        "tax": "40.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T22:35:45.678901Z",
        "updatedat": "2024-01-11T22:35:45.678923Z"
    },
    {
        "id": "4fghijk7-8901-23d4-5678-9012lmno2345",
        "shop": {
            "id": "stuv9012-3456-7890-1234-5678wxyz6789",
            "name": "Clark's Adventure Gear"
        },
        "name": "Hiking Backpack Bundle",
        "description": "Explore the outdoors with this limited-time hiking backpack bundle offer.",
        "quantity": 25,
        "category": {
            "id": 456,
            "name": "Outdoor",
            "createdat": "2024-01-12T09:20:00.000000Z",
            "user": "2345lmnop-6789-0123-4567-89ab0123qrst"
        },
        "price": "179.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?q=80&w=3503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "139.99",
        "tax": "15.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-12T09:25:30.123456Z",
        "updatedat": "2024-01-12T09:25:30.123478Z"
    },
    {
        "id": "5ghijkl8-9012-34d5-6789-0123mnop5678",
        "shop": {
            "id": "uvwx3456-7890-1234-5678-9012abcd6789",
            "name": "Brown's Home Essentials"
        },
        "name": "Kitchen Appliance Set",
        "description": "Upgrade your kitchen with this limited-time offer on a high-quality kitchen appliance set.",
        "quantity": 12,
        "category": {
            "id": 567,
            "name": "Kitchen",
            "createdat": "2024-01-12T11:10:00.000000Z",
            "user": "9012abcd-6789-0123-4567-89ef0123ghij"
        },
        "price": "499.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1514237487632-b60bc844a47d?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "399.99",
        "tax": "30.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-12T11:15:45.678901Z",
        "updatedat": "2024-01-12T11:15:45.678923Z"
    },
    {
        "id": "6mnopqr7-8901-23d4-5678-9012wxyz1234",
        "shop": {
            "id": "stuv9012-3456-7890-1234-5678wxyz6789",
            "name": "Clark's Adventure Gear"
        },
        "name": "Camping Gear Combo",
        "description": "Prepare for your next camping trip with this limited-time camping gear combo.",
        "quantity": 18,
        "category": {
            "id": 678,
            "name": "Outdoor",
            "createdat": "2024-01-12T13:45:00.000000Z",
            "user": "2345lmnop-6789-0123-4567-89ab0123qrst"
        },
        "price": "249.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "199.99",
        "tax": "20.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-12T13:50:30.123456Z",
        "updatedat": "2024-01-12T13:50:30.123478Z"
    },
    {
        "id": "7opqrst8-9012-34d5-6789-0123wxyz5678",
        "shop": {
            "id": "uvwx3456-7890-1234-5678-9012abcd6789",
            "name": "Brown's Home Essentials"
        },
        "name": "Smart Kitchen Appliance Set",
        "description": "Make your kitchen smart with this limited-time offer on a smart kitchen appliance set.",
        "quantity": 15,
        "category": {
            "id": 789,
            "name": "Smart Kitchen",
            "createdat": "2024-01-12T15:30:00.000000Z",
            "user": "9012abcd-6789-0123-4567-89ef0123ghij"
        },
        "price": "699.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1567767326925-e2047bf469d0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "599.99",
        "tax": "40.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-12T15:35:45.678901Z",
        "updatedat": "2024-01-12T15:35:45.678923Z"
    },
    {
        "id": "8qrstuv9-0123-45d6-7890-1234abcd5678",
        "shop": {
            "id": "efgh5678-9012-3456-7890-1234ijkl6789",
            "name": "White's Tech Emporium"
        },
        "name": "Gaming Console Bundle",
        "description": "Experience immersive gaming with this limited-time gaming console bundle offer.",
        "quantity": 8,
        "category": {
            "id": 890,
            "name": "Gaming",
            "createdat": "2024-01-12T17:20:00.000000Z",
            "user": "6789ijkl-efgh-9012-3456-7890mnop1234"
        },
        "price": "799.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "699.99",
        "tax": "50.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-12T17:25:30.123456Z",
        "updatedat": "2024-01-12T17:25:30.123478Z"
    },
    {
        "id": "9uvwxyz0-1234-5678-9012-3456abcd7890",
        "shop": {
            "id": "ijkl9012-3456-7890-1234-5678mnop6789",
            "name": "Miller's Fashion Outlet"
        },
        "name": "Designer Handbag Set",
        "description": "Elevate your style with this limited-time offer on a set of designer handbags.",
        "quantity": 10,
        "category": {
            "id": 901,
            "name": "Fashion",
            "createdat": "2024-01-12T19:45:00.000000Z",
            "user": "345abc67-89de-0123-4567-89012fgh3456"
        },
        "price": "899.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1604494320172-4e4e5f40359d?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "749.99",
        "tax": "60.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-12T19:50:45.678901Z",
        "updatedat": "2024-01-12T19:50:45.678923Z"
    }
];


const myItems = [
    {
        "id": "0a83ca25-090b-45b2-bad4-70c465096268",
        "shop": {
            "id": "ebc74995-5788-4a72-8302-f56fa408bc70",
            "name": "Brooks, Electronics Store"
        },
        "name": "Nokia SmartPhone",
        "description": "Shake place person hope put return.\nRange toward speech. Culture step indeed war her.",
        "quantity": 99,
        "category": {
            "id": 564,
            "name": "Electronics",
            "createdat": "2023-10-16T23:21:23.785249Z",
            "user": "303b5837-ec49-4823-8707-442f393d204f"
        },
        "price": "41633.00",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "11986.00",
        "tax": "205.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": false,
        "currency": "Birr",
        "createdat": "2023-10-16T23:39:21.091214Z",
        "updatedat": "2023-10-16T23:39:21.091236Z"
    },
    {
        "id": "1a23ca45-6789-12c3-d456-78e901234567",
        "shop": {
            "id": "cdef6789-0123-4567-89ab-0123456789cd",
            "name": "Smith's Gadgets"
        },
        "name": "Samsung Laptop",
        "description": "High-performance laptop with advanced features for your computing needs.",
        "quantity": 50,
        "category": {
            "id": 789,
            "name": "Computers",
            "createdat": "2023-11-20T15:45:00.000000Z",
            "user": "456789ab-cdef-0123-4567-89ab012345cd"
        },
        "price": "59999.00",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1522202195465-df8a5f26fa15?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "52999.00",
        "tax": "150.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2023-11-20T15:50:30.123456Z",
        "updatedat": "2023-11-20T15:50:30.123478Z"
    },
    {
        "id": "2b34de56-7890-12c3-d456-78e901234567",
        "shop": {
            "id": "defa5678-0123-4567-89ab-0123456789ef",
            "name": "Miller's Fashion Boutique"
        },
        "name": "Leather Jacket",
        "description": "Classic leather jacket for a stylish and trendy look.",
        "quantity": 25,
        "category": {
            "id": 876,
            "name": "Fashion",
            "createdat": "2023-12-05T18:30:00.000000Z",
            "user": "567890cd-defa-0123-4567-89ab012345ef"
        },
        "price": "199.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "149.99",
        "tax": "20.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2023-12-05T18:35:45.678901Z",
        "updatedat": "2023-12-05T18:35:45.678923Z"
    },
    {
        "id": "3c90ab12-3456-789d-0123-45e6f7890123",
        "shop": {
            "id": "fghi7890-1234-5678-90ab-0123456789ij",
            "name": "Jones, Home Decor Store"
        },
        "name": "Vintage Wooden Coffee Table",
        "description": "Elegant coffee table crafted from vintage wood for a timeless addition to your living space.",
        "quantity": 30,
        "category": {
            "id": 987,
            "name": "Home Decor",
            "createdat": "2024-01-11T09:15:00.000000Z",
            "user": "678901ij-fghi-1234-5678-90ab012345kl"
        },
        "price": "499.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1531694289743-6ce6b21921b0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "399.99",
        "tax": "30.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T09:20:30.456789Z",
        "updatedat": "2024-01-11T09:20:30.456811Z"
    },
    {
        "id": "4d56ef78-9012-3456-7890-12345abc6789",
        "shop": {
            "id": "klmn1234-5678-90ab-0123-4567opqr7890",
            "name": "Anderson, Sports Gear Shop"
        },
        "name": "Running Shoes",
        "description": "High-performance running shoes for both casual joggers and professional athletes.",
        "quantity": 100,
        "category": {
            "id": 654,
            "name": "Sports",
            "createdat": "2024-01-11T10:30:00.000000Z",
            "user": "345abc67-89de-0123-4567-89012fgh3456"
        },
        "price": "89.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=3097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "69.99",
        "tax": "10.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T10:35:45.678901Z",
        "updatedat": "2024-01-11T10:35:45.678923Z"
    },
    {
        "id": "5e67ab89-0123-4567-89de-0123fghij4567",
        "shop": {
            "id": "opqr5678-90ab-1234-5678-9012stuv7890",
            "name": "Taylor's Bookstore"
        },
        "name": "Classic Novels Set",
        "description": "A set of classic novels that will transport you to different worlds and eras.",
        "quantity": 50,
        "category": {
            "id": 321,
            "name": "Books",
            "createdat": "2024-01-11T12:45:00.000000Z",
            "user": "0123fghij-4567-89de-0123-4567klmn8901"
        },
        "price": "129.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1657346259456-0f723e944dd0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "99.99",
        "tax": "15.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T12:50:30.123456Z",
        "updatedat": "2024-01-11T12:50:30.123478Z"
    },
    {
        "id": "6ghijk78-90ab-1234-5678-9012lmnop2345",
        "shop": {
            "id": "stuv9012-3456-7890-1234-5678wxyz6789",
            "name": "Clark's Outdoor Gear"
        },
        "name": "Camping Tent",
        "description": "Durable and weather-resistant camping tent for outdoor enthusiasts.",
        "quantity": 20,
        "category": {
            "id": 432,
            "name": "Outdoor",
            "createdat": "2024-01-11T14:20:00.000000Z",
            "user": "2345lmnop-6789-0123-4567-89ab0123qrst"
        },
        "price": "199.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "159.99",
        "tax": "25.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T14:25:45.678901Z",
        "updatedat": "2024-01-11T14:25:45.678923Z"
    },
    {
        "id": "7mnopqr8-9012-3456-7890-1234wxyz5678",
        "shop": {
            "id": "uvwx3456-7890-1234-5678-9012abcd6789",
            "name": "Brown's Kitchen Essentials"
        },
        "name": "Stainless Steel Cookware Set",
        "description": "Premium stainless steel cookware set for professional-grade cooking experiences.",
        "quantity": 40,
        "category": {
            "id": 543,
            "name": "Kitchen",
            "createdat": "2024-01-11T16:10:00.000000Z",
            "user": "9012abcd-6789-0123-4567-89ef0123ghij"
        },
        "price": "299.99",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1556910633-5099dc3971e8?q=80&w=3850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "discount_price": "249.99",
        "tax": "20.00",
        "admin_status": "approved",
        "is_deleted": "active",
        "rating": null,
        "is_published": true,
        "currency": "Dollar",
        "createdat": "2024-01-11T16:15:30.123456Z",
        "updatedat": "2024-01-11T16:15:30.123478Z"
    },
]