import axios from 'axios';

export const SHOP_HTTP_URL = 'http://localhost:8000/api/v1/';

const $http = axios.create({
    baseURL: SHOP_HTTP_URL,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
});

export const getAllShops = async () => {
    try {
        const res = await $http.get('/shops/');
        console.log(res)
        return res?.data;
    } catch (e: any) {
        console.log("the error: ", e)
        throw e?.response?.data || { message: e.message };
    }
};

export const getShopDetail = async (shopId) => {
    try {
        const res = await $http.get(`shops/${shopId}/`);
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

export const getShopProducts = async (shopId, page) => {
    try {
        const res = await $http.get(`shops/${shopId}/products/?page=${page}`);
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

