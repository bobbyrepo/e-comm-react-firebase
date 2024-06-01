import axios from "axios";

// Create a base API instance using Axios
export const baseApi = axios.create({
    baseURL: "https://fakestoreapi.com",
})