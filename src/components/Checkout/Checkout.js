import React, { useState } from 'react'
import CartContext from '../../Context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../service/firebase'
import { 
    addDoc, 
    collection,     
    getDocs, 
    query,  
    where, 
    documentId, 
    writeBatch 
} from 'firebase/firestore'

const Checkout = () => {

    const[ isLoading, setIsLoading] = useState(false)
    const [ ordenCreada, setOrdenCreada ] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const cantidadTotal = total();

    const data = {
        comprador:{
            nombre: '',
            apellido:'',
            email:'',
            telefono:'',
            direccion:''
        },
        items: cart,
        total:0,
        fecha: new Date () 
    }

    const [user, setUser] = useState(data)

    const capturarInputs = (e) =>{
        const {name, value } = e.target
        setUser({...user, [name]:value})
    }

    const guardarDatos = async (e) => {
        e.preventDefault()
        try{
            await addDoc(collection(db, 'usuarios'), {
                ...user
            })
        }catch(error){
            console.log(error)
        }        
        setUser({...data})

        const ids = cart.map(prod => prod.id)
        const productsRef = collection(db, 'products')
        const productsAddFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsAddFromFirestore
        const outOffStock = []
        const batch = writeBatch(db)

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddToCart = cart.find(prod => prod.id === doc.id)
            const productQuantity = productAddToCart?.quantity

            if(stockDb >= productQuantity){
                batch.update(doc.ref, {stock : stockDb - productQuantity })
            }else{
                outOffStock.push({id: dataDoc.id, ...dataDoc})
            }
        })
        if(outOffStock.length === 0){
            await batch.commit()
            const orderRef = collection(db, 'usuarios')
            const orderAdded = await addDoc(orderRef, data)
            console.log(`El id de su orden es: ${orderAdded}`)
            clearCart()
            setOrdenCreada(true)
            setTimeout(() => {
                navigate('/')
            }, 7000);
        }else{
            return <> <h1> No hay productos en stock </h1> </>
        }
    }

    if(isLoading){
        return (            
            <>  <h3 className='text-center mt-5'> Se está generando tu orden ... </h3> <br/>
                <h1> La cantidad total es de: {cantidadTotal} </h1>
            </>            
            )
    }
    if(ordenCreada){
        return (<>
                <h3 className='text-center mt-5'> ¡Su orden ha sido creada con éxito!  <br/> Serás redirigido al inicio.</h3> </>
        )
        
    }

  return (
    <>
    <div className='text-center'>
        <h1 className='my-5'> Finalizar Compra </h1>
        <div className='container d-flex justify-content-center align-center contenedor-formulario my-5'> 
            <div className='row my-5'> 
                <div className='col'>
                    <form onSubmit={guardarDatos}>
                        <h5 className='form-title text-center titulo'> Para gestionar tu compra, necesitamos que completes los siguientes datos </h5>
                        <hr/>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-sm-6 my-3'> 
                                <label htmlFor='nombre' className='form-label'></label>
                                <input 
                                    type='text'
                                    name='nombre'
                                    className='form-control'
                                    placeholder='Nombre'
                                    id='nombre'
                                    required
                                    value={user.nombre}
                                    onChange={capturarInputs}
                                />
                            </div>
                            <div className='col-12 col-md-6 col-sm-6 my-3'> 
                                <label htmlFor='apellido' className='form-label'></label>
                                <input 
                                    type='text'
                                    name='apellido'
                                    className='form-control'
                                    placeholder='Apellido'
                                    id='apellido'
                                    required
                                    value={user.apellido}
                                    onChange={capturarInputs}
                                />
                            </div>
                            <div className='col-12 col-md-6 col-sm-6 my-3'> 
                                <label htmlFor='email' className='form-label'></label>
                                <input 
                                    type='email'
                                    name='email'
                                    className='form-control'
                                    placeholder='Correo electrónico'
                                    id='email'
                                    required
                                    value={user.email}
                                    onChange={capturarInputs}
                                />
                            </div>
                            <div className='col-12 col-md-6 col-sm-6 my-3'> 
                                <label htmlFor='telefono' className='form-label'></label>
                                <input 
                                    type='number'
                                    name='telefono'
                                    className='form-control'
                                    placeholder='Número de contacto'
                                    id='telefono'
                                    required
                                    value={user.telefono}
                                    onChange={capturarInputs}
                                />
                            </div>
                            <div className='col-12 col-md-12 col-sm-12 my-3'> 
                                <label htmlFor='direccion' className='form-label'></label>
                                <input 
                                    type='text'
                                    name='direccion'
                                    className='form-control'
                                    placeholder='Dirección de residencia'
                                    id='direccion'
                                    required
                                    value={user.direccion}
                                    onChange={capturarInputs}
                                />
                            </div>
                            <div className='form-floating'>                       
                            <h6> Escribinos un comentario (opcional) </h6>         
                                <textarea className='form-control' placeholder='Comentarios' />                                
                            </div>                          
                        </div> 
                        <button type='submit' className='btn btn-success mt-5'> Enviar </button>                      
                    </form>
                </div>
            </div>
        </div>

    </div>
    </>
 
  )
}

export default Checkout