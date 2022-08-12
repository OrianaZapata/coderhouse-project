import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
    <>
    
        <div className='ms-5'> 
            { quantity }
            <i className="bi bi-cart3 ms-2"> </i>
        </div>
        
    </>
  )
}

export default CartWidget