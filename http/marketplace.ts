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
        const res = await $http.get('/marketplace/limited-offers/');
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};

export const fetchRecommendation = async () => {
    try {
        const res = await $http.get('/marketplace/popular/');
        return res?.data;
    } catch (e: any) {
        throw e?.response?.data || { message: e.message };
    }
};