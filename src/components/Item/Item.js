import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ id, img, name, price }) => {

    const handleClick = (e) =>{
      e.stopPropagation()
      console.log('hice click en item')
    }
  return (
    <>    
      <div className='card mb-4' key={id} onClick={handleClick}>                    
        <div className="card-body text-center"> 
          <div className="title-card">{name}</div> 
          <hr/> 
          <img src={img} alt={name} id='img-tarjeta'/>   
          <div className='card-body '>                
            <p> {price} </p>       
            <hr/>  
            <Link to={`/detail/${id}`} className=" boton btn"> Ver detalle </Link>      
          </div>                                                        
        </div>              
      </div>
       
    </>
  )
}

export default Item
