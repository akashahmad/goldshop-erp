import axios from 'axios';
import cookie from "react-cookies";
export const requestInterceptor = () => {
    axios.interceptors.request.use(function (config) {
        const token = cookie.load('token');
        if(config.url.indexOf('/auth') === -1){
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
};