import axios from "axios";

//https://sujeitoprogramador.com/rn-api/?api=posts
const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;