import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import {  loadCart, deleteCart } from '../../redux/actionCreators';

import './cart.css'


const CartDetails = () => {
    const cart = useSelector((store) => store.cartStore);
    const product = useSelector((store) => store.productOne);
    
    const dispatch = useDispatch();
    const {cartId} = useParams()
    
    useEffect (() =>{
        dispatch(loadCart(cartId))
    },[dispatch, cartId])

   
    function handDelete(product) {
        dispatch(deleteCart(product._id))
    }
 

    return(
    <section className='cart'>
            {cart.products.length ? (cart.products.map((shoe) => (
                shoe.product?.picture_url && (
                    <div className='car_target'>
                 <img src={shoe.product.picture_url.avatar } alt={shoe.product.brand}/>   
                <p>{shoe.product.brand}</p>
                <p>{shoe.product.name}</p>
                <p>{shoe.product.prize}</p>
                <p>{cart.amount}</p>
                <div>
                    <button className='button' onClick={() => handDelete(shoe.product)} type="button" disabled={product.stock < 1} > BORRAR </button>
                </div>
                </div>
                )
                )                
            )) : (<h1>No hay productos en la cesta</h1>) } 
        </section>)

    
}

export default CartDetails;