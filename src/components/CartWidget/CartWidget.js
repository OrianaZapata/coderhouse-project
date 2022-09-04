import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './carrito.css'
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
                <section className='carrito'>
                    <div className='carrito-compras'>
                        <p><i className="bi bi-cart3 ms-2"> </i> {quantity}  </p>
                    </div>
                    <div className='total-compras'>
                      <p> ${`${totalProducts}`} </p>
                    </div>
                </section>
               </Link> 
            )
          }            
        </div>
        
    </>
  )
}

export default CartWidget