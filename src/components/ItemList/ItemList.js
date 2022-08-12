import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
        {/* {products.length === 0 && <p className="d-flex justify-content-center"> Cargando productos <i className="bi bi-arrow-clockwise"></i> </p>}     */}
        <br/>
        <ul className="row mx-auto mt-5 col-8 col-sm-8 col-md-8 col-lg-8 d-flex justify-content-center">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    </>
  )
}

export default ItemList