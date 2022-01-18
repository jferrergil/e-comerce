import { CartActionTypes } from "./actionTypes";

const initialState = {name:'',passwd:'',email:''};

export const userReducer = (state= initialState, action) => {
    switch(action.type){
            
        case CartActionTypes.add:
          return action.payload;
          
              default:
              return state;
    }
}