import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import ButtonCount from '../ButtonCount/ButtonCount'
import InputCount from '../InputCount/InputCount'

const ItemDetail = ({ id, name, description, category, price, stock }) => {

  const[inputType, setInputType] = useState('button')
  const [quantityToAdd, setQuantityToAdd] = useState(0)

  const { addItem, getProductQuantity } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity} `)
    setQuantityToAdd(quantity)
    const productToAdd ={
      id, name, price, quantity
    }
    addItem(productToAdd)
  }
  const productQuantity = getProductQuantity(id)
  const Count = inputType === 'button' ? ButtonCount : InputCount;

  return (
    <>
    <div className='d-flex justify-content-center col-12'>
      <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}> {inputType === 'button' ? 'Pasar a input' : 'Pasar a button'} </button>
      <div className='card text-center'>
        <h5 className='card-header'> {name} </h5>          
        <h6 className='card-body'> 
          <p> Categoría: {category} </p> <hr/>
          {description} 
        </h6>
        <div className='card-footer'>        
          {
            quantityToAdd === 0 ? (
              <Count onConfirm={handleOnAdd} stock={stock} initial={productQuantity} />
            ) : (
              <Link to='/cart'> Finalizar compra </Link>
            )
          }

          {/* <ItemCount stock={27} onAdd={handleOnAdd} />  */}
        </div>
      </div>

    </div>
    </>
  )
}

export default ItemDetail;