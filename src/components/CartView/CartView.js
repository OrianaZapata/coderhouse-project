import CartContext from '../../Context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../CartWidget/carrito.css'


const CartView = () => {
    const {cart, clearCart, removeItem, cantidad, total } = useContext(CartContext)

    let prodInCart = cantidad()
    let prodTotal = total()


  return (
    <>
        <div className='cart-view'>
            <h4 className='text-center'> {cart.length === 0 ? 'Tu carrito está vacío' : 'Tus compras '} </h4>
            <br/><br/><br/>
            {prodInCart === 0 && <p> No hay productos en el carrito </p> }
            {cart.map((producto) => {
                return(
                    <div className='container contenedor-cartview'>
                        <div className='card' key={producto.id}>
                            <div>
                                <Link className='titulo-product' to={`../detail/${producto.id}`}>
                                    {producto.name}
                                </Link>
                                <div className='total-products'>
                                    <p> Precio: ${producto.price} </p>
                                    <p> Cantidad: {producto.quantity} </p>
                                    <div className='d-flex justify-content-center'>
                                        <button className='btn btn-sm btn-danger ' onClick={() => removeItem(producto.id)}> Eliminar producto <i className="bi bi-x-lg"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='vaciar-carrito my-5'>
                <div className='mt-2'> Cantidad de productos: {prodInCart} </div>
                <div> Total de compra: $ {prodTotal} </div>
                <hr/>                
                <Link to='/finalizar-compra' className='text-success'> Finalizar compra <i className="bi bi-check-lg"></i> </Link> 
                <Link to='/' className='text-center text-white text-sm'> Seguir comprando </Link> 
                
                {prodInCart > 0 ? <button className='btn btn-success mb-2' onClick={() => clearCart()}> Vaciar carrito </button> : <Link to='/'>Volver al inicio</Link>}
            </div>
        </div>
    </>
  )
}

export default CartView