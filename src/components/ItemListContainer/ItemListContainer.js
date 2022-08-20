import './itemlistcontainer.css';
import { useState, useEffect } from 'react';
// import { getProductsDeAlfredo, getProductsByCategory } from '../../simulacionApi';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where, Query } from 'firebase/firestore';
import { db } from '../../service/firebase';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  // useEffect(()=>{
  //   const onResize = () =>{
  //     console.log('cambio tamaño de pantalla')
  //   }
  //   window.addEventListener('resize', onResize)
    
  //   return()=>{
  //     window.removeEventListener('resize', onResize)
  //   }
  // },[])

  useEffect(()=> {

    const collectionRef = !categoryId ? collection(db, 'products') : query( collection(db, 'products'), where('category', '==', categoryId) )

    getDocs(collectionRef).then(response => {
      console.log(response)


      const productosTransformados = response.docs.map(doc => {
        const data = doc.data()
        // console.log(data)
        return { id: doc.id, ...data}
      })
      setProducts(productosTransformados)
    }).catch(error =>{
      console.log(error)
    })
    // const asyncFunction = categoryId ? getProductsByCategory : getProductsDeAlfredo;
    
    // asyncFunction(categoryId).then(products => {
    //   setProducts(products)
    // }).catch(error => {
    //   console.log(error)
    // })
  }, [categoryId])

  return (
    <>
      <div>
        <h1 className='mt-5'> {greeting}</h1>               
        <ItemList products={products} />
      </div>
        
    </>
  )
}

export default ItemListContainer;