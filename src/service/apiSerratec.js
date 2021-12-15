import axios from "axios";

const token = 'a'

export const api = axios.create({
    baseURL: 'https://serratec2.herokuapp.com',
    headers: { 'Authorization': token }
})

