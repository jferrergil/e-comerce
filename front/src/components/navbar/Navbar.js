import React from 'react';
import {Link} from 'react-router-dom';
import {userService} from '../../services/user.services';
import { useNavigate } from 'react-router';

import './Navbar.css'
import carro from '../../sources/image/shopping.svg'
import logo from '../../sources/image/scarpa-1.svg'


const Navbar = () => {
const navigate = useNavigate()

    const auth = JSON.parse(localStorage.getItem('user'))

    return(
<div className='navbar'>
        <nav className='navbar_nav'>
            <Link className='navbar_nav-logo ' to='/'><img className='logo
            ' src={logo} alt='carro'/>SHOEMAKER</Link>
            {!auth ? (
           <div className='navbar_var-links
           '> <Link className='navbar_nav-register' to='/register'>REGISTRO</Link>

            <Link className='navbar_nav-login' to='/login'>LOGIN</Link> </div>) : 


        (
            <div className='navbar_var-links'>
        
        <a href='/' onClick={() =>{navigate('/');userService().logout();}}className='navbar_nav-logout' >LOGOUT</a>    
         <Link className='navbar_nav-carro' to='/cart/cartId'>
            <img className='navbar_nav-carro-img' src={carro} alt='carro'/>
       </Link>
       
       </div>
       
       ) }        
        </nav>
    </div>
    )
} 

export default Navbar