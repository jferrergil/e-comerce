import React from 'react';
import {Link} from 'react-router-dom'
import './shoeCard.css'

const ShoeCard = ({shoe}) => {
    
     return(
        
        <section className='flex'>
            <div className='container'>
             <div className='card'>
             <Link to={`/shoe/${shoe._id}`}>
             <img className='card-img' src={shoe.picture_url.avatar} alt={shoe.brand}/>
             </Link>
              <h4>{shoe.brand}</h4>
             <p>{shoe.name}</p>
             </div>
            </div>
         </section> 




    )
}

export default ShoeCard;