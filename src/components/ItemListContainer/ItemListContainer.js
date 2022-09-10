import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../service/firebase/firestore';
import { useAsync } from '../../hooks/useAsync';


const ItemListContainer = ({ greeting }) => {

  const { categoryId } = useParams()
  const getProductsFromFirestore = () => getProducts(categoryId)
  const { datos, error } = useAsync(getProductsFromFirestore, [categoryId])

  return (
    <>
      <div>
        <h1 className='mt-5'> {greeting}</h1>               
        <ItemList products={datos} />
      </div>
        
    </>
  )
}

export default ItemListContainer;