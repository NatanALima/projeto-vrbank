import axios from "axios";

const baseUrl = "http://localhost:8080";

export async function getAllSalasService() {
    const res = await axios.get(`${baseUrl}/sala/`);
    return res;
}

export async function getSalasByAnoService(anoParam) {
    const res = await axios.get(`${baseUrl}/sala/filter`, {params: anoParam})
    return res;

}