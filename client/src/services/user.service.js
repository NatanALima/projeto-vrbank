import axios from "axios";
import Cookies from 'js-cookie';

const baseURL = "http://localhost:8080";


export async function registerService(body) {
    const res = await axios.post(`${baseURL}/user/create`, body);
    return res;

}

export async function loginService(body) {
    const res = await axios.post(`${baseURL}/auth`, body);
    return res;

}

export function logoutService() {
    Cookies.remove("userInfo");
}