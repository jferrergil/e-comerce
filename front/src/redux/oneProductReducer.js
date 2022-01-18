import { ProductsActionTypes } from "./actionTypes";
const initialOne = {};

export const productOne = (state = initialOne, action) => {
   
    switch (action.type) {
        case ProductsActionTypes.loadOne :
            return action.payload   
        default:
            return state;
    }
}