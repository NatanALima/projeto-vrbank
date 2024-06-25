import axios from "axios";
import Cookies from 'js-cookie';

const baseURL = "http://localhost:8080";

export async function getBancoInfoService() {
    const {_id} = JSON.parse(Cookies.get('userInfo'));

    const res = await axios.get(`${baseURL}/banco/find`, {params: {idUser: _id}});
    return res;
}

export async function addSaldoBancoService(body) {
    const {_id} = JSON.parse(Cookies.get('userInfo'));
    const res = await axios.patch(`${baseURL}/banco/saldo/add`, body, {params: {idUser: _id}});
    return res;
}