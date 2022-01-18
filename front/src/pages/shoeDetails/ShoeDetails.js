import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import { loadOneproduct, addToCart } from '../../redux/actionCreators';
import { useNavigate } from 'react-router';

import './ShoeDetails.css'


const auth = JSON.parse(localStorage.getItem('user'))

function ShoeDetails() {
    const product = useSelector((store) => store.productOne);
    
    
    const { shoeId } = useParams();
    const dispatch = useDispatch();

    const navigate = useNavigate()

  

    useEffect(() => {
        dispatch(loadOneproduct(shoeId));
    }, [dispatch, shoeId]);

    
    function handleAddClick(product) {
        dispatch(addToCart(product))        
    }
  
    return (

        <section className='details'>
          {product.brand &&
            <div className='details_card'>
                <div className='details_card-info'>
                <img src={product.picture_url.avatar} alt={product.brand} />
                <p>{product.brand}</p>
                <p>{product.name}</p>
                <p>{product.prize} € </p>
                
                <p>{product.description}</p>
              {!auth ?(<>  <div >
                <button className='button' onClick={() => navigate('/login')} type="button"  > login </button>
                </div>  </>): <div >
                <button className='button cartbtn' onClick={() => handleAddClick(product)} type="button" disabled={product.stock < 1} > compar </button>
                </div>   }   
                </div> 
             
          </div>} 
   
        </section>
  
    ) 
}

export default ShoeDetails;







