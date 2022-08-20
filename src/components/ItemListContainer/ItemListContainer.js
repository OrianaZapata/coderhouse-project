import './itemlistcontainer.css';
import { useState, useEffect } from 'react';
import { getProductsDeAlfredo, getProductsByCategory } from '../../simulacionApi';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(()=>{
    const onResize = () =>{
      console.log('cambio tamaño de pantalla')
    }
    window.addEventListener('resize', onResize)
    
    return()=>{
      window.removeEventListener('resize', onResize)
    }
  },[])

  useEffect(()=> {
    const asyncFunction = categoryId ? getProductsByCategory : getProductsDeAlfredo;
    
    asyncFunction(categoryId).then(products => {
      setProducts(products)
    }).catch(error => {
      console.log(error)
    })
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