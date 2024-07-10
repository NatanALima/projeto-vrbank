import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080";


export async function getAllProdsByUserService() {
    const {_id} = Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : "";

    const res = await axios.get(`${baseUrl}/produtos/find`, {params: {idUser: _id}});
    return res;
}

export async function addProdutosService(body) {
    const {_id} = Cookies.get('userInfo') ?  JSON.parse(Cookies.get('userInfo')) : "";
    
    const res = await axios.post(`${baseUrl}/produtos/create`, body, {params: {idUser: _id}});
    return res;
}