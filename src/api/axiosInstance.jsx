import axios from "axios";

export const baseApi = axios.create({
    baseURL: "https://fakestoreapi.com",
})