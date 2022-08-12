import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ id, img, name, price }) => {


    const handleClick = (e) =>{
      e.stopPropagation()
      console.log('hice click en item')
    }
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col col-lg col-md col-sm-4">
            <div className='card m-5 shadow' key={id} onClick={handleClick}>                    
                <h6 className="card-header text-center mt-2"> 
                  <div className="card-title"> {name} </div>              
                </h6>                
                <div className='card-body m-3'>                
                  <img src={img} alt={name} id='img-tarjeta' className='m-3 ' />  
                  <p> Pecio: {price} </p>
                  <div className="card-footer">
                    <Link to={`/detail/${id}`} className="mt-3 btn bg-warning btn-sm"> Ver detalle </Link>
                  </div>
                </div>                                                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
