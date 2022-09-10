import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from './index';

export const getProducts = ( categoryId ) => {

    const collectionRef = !categoryId ? collection(db, 'products') : query( collection(db, 'products'), where('category', '==', categoryId) )

   return getDocs(collectionRef).then(response => {
      console.log(response)

    const productosTransformados = response.docs.map(doc => {
    const data = doc.data()
    return { id: doc.id, ...data}
    })
      return productosTransformados
    }).catch(error =>{
      return error
    })
}