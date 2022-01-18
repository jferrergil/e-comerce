import { CartActionTypes } from "./actionTypes";

const initialState = {products: [], total_price:''};

export const cartReducer = (state= initialState, action) => {
    switch(action.type){
        case CartActionTypes.load:
            return action.payload.cartItems   
            
        case CartActionTypes.add:
          return action.payload;
         
        
        case CartActionTypes.delete:
          return action.payload;
               
          
              default:
              return state;
    }
}