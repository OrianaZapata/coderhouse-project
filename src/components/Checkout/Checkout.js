import React, { useState } from 'react'
import CartContext from '../../Context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../service/firebase'
import { addDoc, collection, updateDoc, doc, getDocs, query,  where, documentId, writeBatch } from 'firebase/firestore'
import Formulario from '../Formulario/Formulario'

const Checkout = () => {

    const[ isLoading, setIsLoading] = useState(false)
    const [ ordenCreada, setOrdenCreada ] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const cantidadTotal = total();

    const ordenDeCompra = async () => {
        setIsLoading(true)
        try {
            const objOrden = {
                comprador:{
                    primerNombre: 'Oriana',
                    apellido: 'Zapata',
                    telefono: '1187966541',
                    direccion: 'Hipolito Yrigoyen 615'
                },
                items: cart,
                total: 0,
                fecha: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddFromFirestore = await getDocs(query(productsRef, where(documentId(),'in', ids)))
            
            const { docs } = productsAddFromFirestore
            const outOffStock = []
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc =  doc.data()
                const stockDb = dataDoc.stock
    
                const productAddToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAddToCart?.quantity
    
                if(stockDb >= productQuantity){
                    batch.update(doc.ref, { stock : stockDb - productQuantity })
                }else{
                    outOffStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOffStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrden)
    
                console.log(`El id de tu orden es : ${orderAdded.id}`)
                clearCart()
                setOrdenCreada(true)
                setTimeout(() => {
                    navigate('/')                    
                }, 5000);
            }else{
                console.log('Hay productos que no tenemos en stock')
            }            
        }catch(error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }      
    }

    if(isLoading){
        return <h3 className='text-center mt-5'> Se está generando tu orden ... </h3>
    }
    if(ordenCreada){
        return <h3 className='text-center mt-5'> ¡Su orden ha sido creada con éxito! <br/> Serás redirigido al inicio.</h3>
    }
  return (
    <>
    <div className='text-center'>
        <h1 className='my-5'> Finalizar Compra </h1>
        <Formulario/>
        <button className='btn btn-success' onClick={ordenDeCompra}> Generar Orden  </button>

    </div>
    </>
 
  )
}

export default Checkout