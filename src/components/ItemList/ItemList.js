import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
        {products?.length === 0 && <p className="d-flex justify-content-center"> Cargando productos <i className="bi bi-arrow-clockwise"></i> </p>}    
        <br/>
        <div className="container">
          <div className="row">
            {products?.map(prod => 
            <div className="col-5 col-sm-4 col-md-5 col-lg-3">
              <Item key={prod.id} {...prod} />
            </div>
            )}
          </div>
        </div>
    </>
  )
}

export default ItemList