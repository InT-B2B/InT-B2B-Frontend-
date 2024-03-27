import axios from 'axios';

export const MARKETPLACE_HTTP_URL = 'http://localhost:8000/api/v1/';

const $http = axios.create({
    baseURL: MARKETPLACE_HTTP_URL,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
});

export const fetchLimitedOffers = async () => {
    try {
        const res = await $http.get('/marketplace/products/limited-offer/');
        console.log(res)
        return res?.data;
    } catch (e: any) {
        console.log("the error: ", e)
        throw e?.response?.data || { message: e.message };
    }
};

export const fetchRecommendation = async () => {
    try {
        const res = await $http.get('/marketplace/products/');
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

export const getCategoryNames = async () => {
    try {
        const res = await $http.get('/marketplace/categories/');
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

export const getSubCategories = async (category_id) => {
    try {
        const res = await $http.get(`marketplace/categories/${category_id}/sub-category/`);
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

export const getSubCategoryProducts = async (category_id, sub_category_id) => {
    try {
        const res = await $http.get(`marketplace/categories/${category_id}/sub-category/${sub_category_id}/products/`);
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

export const getCategoryProducts = async (category_id) => {
    try {
        const res = await $http.get(`/marketplace/categories/${category_id}/products`);
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

export const getProductDetail = async (productId) => {
    try {
        const res = await $http.get(`marketplace/products/${productId}/product-detail/`);
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

