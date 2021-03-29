import * as productConstants from "../constants/actions"

export const fetchListProducts = () => ({ type: productConstants.FETCH_PRODUCTS });

export const increaseTheNumberOfProduct = (info) => ({ type: productConstants.INCREASE_THE_NUMBER_OF_PRODUCT, id: info.id })

export const reduceTheNumberOfProduct = (info) => ({ type: productConstants.REDUCE_THE_NUMBER_OF_PRODUCT, id: info.id })

export const addItemProductToCart = (info) => ({ type: productConstants.ADD_ITEM_PRODUCT_TO_CART,  id: info.id, name: info.name, price: info.price, quantity: info.quantity, image: info.image })

export const getListProductsToCart = () => ({ type: productConstants.GET_DATA_FROM_CART })

export const removeItemFromCart = (info) => ({ type: productConstants.REMOVE_ITEM_FROM_CART, id: info.id, price: info.price, quantity: info.quantity })