import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ShoeCard from '../../components/ShoeCard/shoeCard';
import * as ActionCreators from '../../redux/actionCreators'
import logo from '../../sources/image/scarpa-1.svg'

import './HomePage.css'

const ProductList = () => {
    const products = useSelector((store) => store.productStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ActionCreators.loadProducts())       
    }, [dispatch])

    



    return(
        <section className='homepage'>
          <div className='homepage_container'>
         <h1 className='homepage_tittle'> <img className='homepage_logo
            ' src={logo} alt='carro'/>SHOEMAKER</h1>
            </div>
            <p className='texto'>Durante los años 1950, las oportunidades de ocio se expandieron mucho y los niños y los adolescentes empezaron a llevar zapatillas de deporte tan pronto como los códigos de vestimenta escolar se relajaron. Las ventas de zapatillas aumentaron tanto que empezaron a afectar adversamente las ventas de zapatos de cuero convencionales, llevando a una guerra publicitaria feroz para conseguir cuota de mercado a finales de los 50. En los 1970, el jogging se volvió cada vez más popular, y los entrenadores las diseñaron específicamente para proporcionar confort mientras el jogging se vendió bien. Las compañías también empezaron a dirigir algunos de sus productos al mercado de moda casual. Pronto, las zapatillas estuvieron disponibles para fútbol, jogging, baloncesto, running, etc. Muchos deportes tuvieron su zapatilla correspondiente, hecho posible gracias al desarrollo de tecnología podológica para el calzado.</p>
            
            <ul className='homepage_ul'>
                
                {products.length > 1 && products.map((product) => (
                    <ShoeCard shoe={product} key={product._id}/>
                    
                ))}
            </ul>
        </section>
    )
    
}

export default ProductList;