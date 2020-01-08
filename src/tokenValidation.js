import {apiPath} from "./Config";
import axios from "axios"
import cookie from "react-cookies";

export const checktoken = () => {
    let age = localStorage.getItem("age");
    let token = cookie.load("token");
    let header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    if (token) {
        axios.get(apiPath + "/api/validate-token", header).then(res => {
            if (res.status === 401) {
            }
        }).catch(err => {
            cookie.remove('token', {
                maxAge: parseInt(age),
                path: "/"
            });
            window.location.replace("/")
            localStorage.removeItem("age");
            localStorage.removeItem('user');
        })
    }
}