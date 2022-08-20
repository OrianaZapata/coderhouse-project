import CartContext from '../../Context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const CartView = () => {
    const {cart, clearCart, removeItem, cantidad, total } = useContext(CartContext)

    let prodInCart = cantidad()
    let prodTotal = total()


  return (
    <>
        <div className='cart-view'>
            <h4> {cart.length === 0 ? 'Tu carrito está vacío' : 'Tu carrito '} </h4>
            <br/><br/><br/>
            {prodInCart === 0 && <p> No hay productos en el carrito </p> }
            {cart.map((producto) => {
                return(
                    <div className='container'>
                        <div className='card' key={producto.id}>
                            <button className='btn btn-warning' onClick={() => removeItem(producto.id)}><i className="bi bi-x-lg"></i></button>
                            <div>
                                <Link className='' to={`../detail/${producto.id}`}>
                                    {producto.name}
                                </Link>
                                <div>
                                    <p> Precio: ${producto.price} </p>
                                    <p> Cantidad: {producto.quantity} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='container'>
                {prodInCart > 0 ? <button onClick={() => clearCart()}> Vaciar carrito </button> : <Link to='/'>Volver al inicio</Link>}
                <div> Cantidad de productos: {prodInCart} </div>
                <div> Total de compra: $ {prodTotal} </div>
            </div>
        </div>
    </>
  )
}

export default CartView