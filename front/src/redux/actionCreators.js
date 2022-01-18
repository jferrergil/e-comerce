import { CartActionTypes,ProductsActionTypes } from "./actionTypes";
import * as FetchApi from '../services/FetchApi'

export const loadProducts = () => {
    return (dispatch) => {
        FetchApi.getProducts().then((data) => {
            dispatch({
                type:ProductsActionTypes.load,
                payload: data,
            })
        })
    }
}

export const loadOneproduct = (id) => {
    return(dispatch) => {
        FetchApi.getOneProduct(id).then((data) =>{
            dispatch({
                type:ProductsActionTypes.loadOne,
                payload: data
            })
        })
    }
}

export const loadCart = (id) => {
    return (dispatch) => {
        FetchApi.getCart(id).then((data) => {
            
            dispatch({
                type:CartActionTypes.load,
                payload: data
            })
        })
    }
}

export const addToCart = (product) => {
    return (dispatch) => {
        FetchApi.addToCart(product).then((data) => {
            dispatch({
                type: CartActionTypes.add,
                payload: data,
            })
        })
    }
}

export const deleteCart = (product) => {
    return (dispatch) => {
        FetchApi.deleteCart(product).then((data) => {
        dispatch({
            type:CartActionTypes.delete,
            payload:data,
        })
    })
}
}

