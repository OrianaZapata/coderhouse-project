import React from 'react';
// import Button from '../Button/Button';
import Logo from '../../logo/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <>   
        <nav className='navbar p-4 d-flex justify-content-center'>            
              <Link to='/'> <img src={ Logo } type='button' alt="" width='300' height='60' className='logo' /> </Link>
              <div>
                <Link to='/category/adultos' className='btn text-white'> Vitaminas para adultos </Link>
                <Link to='/category/niños' className='btn text-white'> Vitaminas para niños </Link>
                <Link to='/contacto' className='btn text-white'> Contactanos </Link>
                <Link to='/'  className='btn text-white'> Inicio <i className="bi bi-house-fill"></i> </Link>
              </div>
            <CartWidget />
        </nav>
    </>
  )     
}

export default Navbar;