import { useState } from "react";


const InputCount = ({ onConfirm, stock, initial=1 }) => {
    const [count, setCount] = useState(initial)
    
    const handleChange = (e) => {
      if(e.target.value <= stock ){
        setCount(e.target.value)
      }
    }
    return(
      <div>
        <input type='number' onChange={handleChange} value={count} />
        <button 
            className=''
            onClick={()=> onConfirm(count)}> 
            Agregar al carrito <i className="bi bi-bag-plus-fill text-info"></i>
        </button>
  
      </div>
    )
  }

export default InputCount