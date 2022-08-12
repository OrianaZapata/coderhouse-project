import { useState } from "react"

const ButtonCount = ({ onConfirm, stock, initial=1 }) => {

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
      <div className='mt-5 d-flex justify-content-center'>
        <button onClick={decrementar} className='btn m-2 bg-danger text-white'> <i className="bi bi-dash"></i> </button>
        <h1> {count} </h1>
        <button onClick={incrementar} className='btn m-2 bg-success text-white'> <i className="bi bi-plus"></i> </button>
        <button 
            className='btn btn-outline-info mt-3 text-dark mb-4'
            onClick={()=> onConfirm(count)}> 
            Agregar al carrito <i className="bi bi-bag-plus-fill text-info"></i>
        </button>
      </div>
    )
  }

export default ButtonCount