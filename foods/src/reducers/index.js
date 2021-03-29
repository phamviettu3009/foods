import { combineReducers } from "redux"
import { getProducts, getProductToCart } from "./product"

const rootReducer = combineReducers({
    getProducts, getProductToCart
})

export default rootReducer