import axios from "axios"
const URL_PRODUCTS = "https://gist.githubusercontent.com/nphattai/6c28eb13b1eb02f71546eb5d125a405e/raw/314bd97da22a1e762405e0d57db03713dbcc4e6d/data.json"

export const getProducts = () => {
    return axios.get(URL_PRODUCTS)
}