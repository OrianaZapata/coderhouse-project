import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const { cantidad, total } = useContext(CartContext)

  const quantity = cantidad()
  const totalProducts = total()

  return (
    <>
    
        <div className='ms-5'> 
          {
            quantity > 0 && (
               <Link to='/carrito'> 
                  <p> {quantity} </p>
                  <p> {`${totalProducts}`} </p>
                  <i className="bi bi-cart3 ms-2"> </i>
               </Link> 
            )
          }            
        </div>
        
    </>
  )
}

export default CartWidget