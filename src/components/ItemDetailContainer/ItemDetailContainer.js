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
        <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer