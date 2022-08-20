import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import ButtonCount from '../ButtonCount/ButtonCount'
import InputCount from '../InputCount/InputCount'
import NotificacionContext from '../../notification/Notification'
import './ItemDetail.css';

const ItemDetail = ({ id, name, description, category, price, stock }) => {

  const[inputType, setInputType] = useState('button')
  const[quantityToAdd, setQuantityToAdd] = useState(0)
  const{ addItem, getProductQuantity } = useContext(CartContext)
  const { setNotificacion } = useContext(NotificacionContext)

  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity} `)
    setQuantityToAdd(quantity)
    const productToAdd ={
      id, name, price, quantity
    }
    addItem(productToAdd)
    setNotificacion(`Se agregaron ${quantity} ${name}`)
  }

  const productQuantity = getProductQuantity(id)

  const Count = inputType === 'button' ? ButtonCount : InputCount;

  return (
    <>
    <div className='container d-flex justify-content-center my-5'>
      <div className='card col-8 col-sm-8 col-md-8 col-lg-4 shadow'>        
          <h5 className='card-header text-center'> {name} </h5>          
          <h6 className='card-body'> 
            Categoría: {category} <hr/>
            {description} 
          </h6>
          <hr/>
          <div className='text-center finalizar'>        
            { quantityToAdd === 0 ? (
                <Count onConfirm={handleOnAdd} stock={stock} initial={productQuantity} />
                ) : (
                  <Link to='/cart' className='text-success'> Finalizar compra <i className="bi bi-check-lg"></i> </Link> 
                  )
                }
              {/* <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}> {inputType === 'button' ? 'Pasar a input' : 'Pasar a button'} </button> */}
          </div>       
          <Link to='/' className='text-center text-white text-sm'> Seguir comprando </Link> 
      </div>
  </div>
    </>
  )
}

export default ItemDetail;