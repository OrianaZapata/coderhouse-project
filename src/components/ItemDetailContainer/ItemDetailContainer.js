import { useEffect, useState } from 'react'
import { getProductById } from '../../simulacionApi'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(()=>{
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])
    return (
    <>   
        <h4 className='mt-5 title-detail d-flex justify-content-center'> Detalle </h4>
        <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer