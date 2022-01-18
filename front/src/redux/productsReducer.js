import { ProductsActionTypes } from "./actionTypes";

const initialState = [{_id:'',brand:'',name:'',size_stock:[],description:'',imgUrl:'',prize:'',visible:true,stock:100}]


export const productsReducer = (state= initialState, action) =>{
    switch(action.type){
        case ProductsActionTypes.load:
            return[...action.payload];
         
        
          default:
              return state   
    }
}

