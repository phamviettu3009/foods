import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { getProducts } from "../apis/products"
import AsyncStorage from '@react-native-community/async-storage';
import { 
    FETCH_PRODUCTS, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILED,
    INCREASE_THE_NUMBER_OF_PRODUCT,
    REDUCE_THE_NUMBER_OF_PRODUCT,
    ADD_ITEM_PRODUCT_TO_CART,
    GET_DATA_FROM_CART,
    GET_DATA_FROM_CART_SUCCESS,
    REMOVE_ITEM_FROM_CART,
    SAGA_TO_REDUCER_REMOVE_ITEM_FROM_CART
} from "../constants/actions"

function* rootSaga() {
    yield takeEvery(FETCH_PRODUCTS, watchFetchListProductAction)
    yield takeEvery(INCREASE_THE_NUMBER_OF_PRODUCT, watchAddItemProductAction)
    yield takeEvery(REDUCE_THE_NUMBER_OF_PRODUCT ,watchRemoveItemProductAction)
    yield takeEvery(ADD_ITEM_PRODUCT_TO_CART ,watchAddItemProductToCart)
    yield takeEvery(GET_DATA_FROM_CART, watchListProductToCart)
    yield takeEvery(REMOVE_ITEM_FROM_CART, watchRemoveItemFromCart)
}
function* watchFetchListProductAction() {
    try {
        const response = yield getProducts()
        let newData = response.data.reduce((target, value) => {
            return [...target, ...[{...value, ...{quantity: 0}}]]
        }, [])
        yield put({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: {
                data: newData
            }
        });
    } catch (error) {
        yield put({
            type: FETCH_PRODUCTS_FAILED,
            payload: {
                data: 'error'
            }
        });
    }
}

function* watchAddItemProductAction({id}) {
    try {
        const state = yield select()
        const listProduct = state.getProducts.listProducts.data
        let arr = listProduct.reduce((target, value) => {
            value.id == id ? value.quantity += 1 : null
            return [...target, ...[{...value, ...{quantity: value.quantity}}]]
        }, []) 
        yield put({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: {
                data: arr
            }
        })
    } catch (error) {
        
    }
}

function* watchRemoveItemProductAction({id}) {
    try {
        const state = yield select()
        const listProduct = state.getProducts.listProducts.data
        let arr = listProduct.reduce((target, value) => {
            value.id != id ? null : value.quantity > 0 ? value.quantity -= 1 : 0
            return [...target, ...[{...value, ...{quantity: value.quantity}}]]
        }, []) 
        yield put({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: {
                data: arr
            }
        })
    } catch (error) {
        
    }
}

function* watchAddItemProductToCart({id, name, price, quantity, image}) {
    try {
        if (quantity != 0){
            const store = yield select()
            const state = store.getProductToCart
            const product = {id: id, name: name, price: price, quantity, image: image}
            let obj = {}
            
            if(state.list.length == 0){
                obj = { 
                    list: [...state.list, ...[product]], 
                    price: state.price += product.price * product.quantity, 
                    validate: true 
                }
            } else {
                const i = state.list.findIndex((e) => {
                    return e.id == product.id
                })
                if(i >= 0) {
                    state.list[i].quantity += product.quantity
                    obj = { 
                        list: [...state.list], 
                        price: state.price += product.price * product.quantity, 
                        validate: [...state.list].length == 0 ? false : true 
                    }
                } else {
                    obj = { 
                        list: [...state.list, ...[product]], 
                        price: state.price += product.price * product.quantity, 
                        validate: [...state.list, ...[product]].length == 0 ? false : true 
                    }
                }
            }
            
            yield put({
                type: GET_DATA_FROM_CART_SUCCESS,
                payload: {
                    data: obj
                }
            })
        }
    } catch (error) {
        console("error 1")
    }
}

function* watchRemoveItemFromCart({ id, price, quantity }) {
    try {
        const store = yield select()
        const state = store.getProductToCart

        const arr = state.list.reduce((target, value) => {
            if(value.id != id) {
                return [...target,...[value]]
            } else {
                return [...target]
            }
        }, [])

        yield put({
            type: SAGA_TO_REDUCER_REMOVE_ITEM_FROM_CART,
            payload: {
                list: arr, 
                price: state.price -= price * quantity, 
                validate: arr.length == 0 ? false : true 
            }
        })
    } catch (error) {
        
    }
}

function* watchListProductToCart() {
    try {
        // yield put({
        //     type: GET_DATA_FROM_CART_SUCCESS,
        //     payload: {
        //         data: []
        //     }
        // })
    } catch (error) {
        console("error 2")
    }
}

async function postData(info) {
    try {    
      
    } catch (error) {
        console("error 3")
    }
}

async function getData() {
    try {
       
    } catch (error) {
        console("error 4")
    }
}

async function RemoveData() {
    try {
        await AsyncStorage.removeItem('STORE')
    } catch (error) {
        
    }
}

export default rootSaga

