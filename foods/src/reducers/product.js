import * as productConstants from "../constants/actions"

const inttialState = {
    loading: false,
    listProducts: [],
    error: '',
}

const getProducts = (state = inttialState, action) => {
    switch (action.type) {
        case productConstants.FETCH_PRODUCTS_SUCCESS : 
        return {
            loading: false,
            listProducts: action.payload,
            error: ''
        }
        case productConstants.FETCH_PRODUCTS_FAILED :
        return {
            loading: false,
            listProducts: [],
            error: action.payload
        }
        default:
            return state
    }
}

const inttialState_2 = {
    price: 0,
    list: [],
    validate : false
}

const getProductToCart = (state = inttialState_2, action) => {
    switch (action.type) {
        case productConstants.GET_DATA_FROM_CART_SUCCESS:
            return action.payload.data
        case productConstants.SAGA_TO_REDUCER_REMOVE_ITEM_FROM_CART:
            return action.payload
        default:
            return state
    }
}

export { getProducts, getProductToCart }