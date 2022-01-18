import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';
import {productOne} from './oneProductReducer'
import { userReducer } from './userReducer';


export default function configureStore(preloadState){
 const rootReducer = 
  combineReducers({
    cartStore: cartReducer,
    productStore: productsReducer,
    productOne: productOne,
    userStore: userReducer,
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  
  return createStore(
    rootReducer,
    preloadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}