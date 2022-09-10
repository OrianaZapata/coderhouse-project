import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(()=>{
      getDoc(doc(db, 'products', productId)).then(response => {
        console.log(response)
        const data =response.data()
        const productosTransformados = { id: response.id, ...data}
        setProduct(productosTransformados)
      }).catch(error=>{
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