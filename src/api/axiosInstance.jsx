import axios from 'axios';
import Cookies from 'js-cookie';

// Create a base API instance using Axios
export const baseApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to dynamically set the Authorization header
baseApi.interceptors.request.use(
    (config) => {
        const token = Cookies.get('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);