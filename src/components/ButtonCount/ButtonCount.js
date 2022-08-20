import { useState } from "react"
import './ButtonCount.css';

const ButtonCount = ({ onConfirm, stock = 0, initial= 1 }) => {

    const [count, setCount] = useState(initial)
    
    const incrementar = () =>{
        if(count < stock ){
            setCount (count + 1)
        }
    }
    const decrementar = () => {
        if(count > 1 ){
            setCount (count - 1)
        }
    }
    return(
      <> 
        <div className='d-flex justify-content-center contenedor'>
          <button onClick={decrementar} className='m-2'><i className="bi bi-dash"></i> </button>
          <h4 className="d-flex align-items-center"> {count} </h4>
          <button onClick={incrementar} className='m-2'><i className="bi bi-plus"></i> </button>
        </div>
        <div className="d-flex justify-content-center">
        <button  
            className='add my-3'
            onClick={()=> onConfirm(count)}> 
            Agregar al carrito <i className="bi bi-bag-plus-fill"></i>
        </button>
        </div>
      </>
    )
  }

export default ButtonCount