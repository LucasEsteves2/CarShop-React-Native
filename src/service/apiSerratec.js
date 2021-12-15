import axios from "axios";

const token = 'a'

export const api = axios.create({
    baseURL: 'https://ecommerce-residencia.herokuapp.com/',
    headers: { 'Authorization': token }
})

