// import React, { useState } from 'react'
// import { db } from '../../service/firebase'
// import { 
//     collection,
//     addDoc,
     
// } from  'firebase/firestore'


// const Formulario = () => {

//     const data = {
//         nombre: '',
//         apellido:'',
//         email:'',
//         telefono:'',
//         direccion:''
//     }

//     const [user, setUser] = useState(data)

//     const capturarInputs = (e) =>{
//         const {name, value } = e.target
//         setUser({...user, [name]:value})
//     }

//     const guardarDatos = async (e) => {
//         e.preventDefault()
//         try{
//             await addDoc(collection(db, 'usuarios'), {
//                 ...user
//             })
//         }catch(error){
//             console.log(error)
//         }        
//         setUser({...data})
//     }

//     // console.log(user)


//   return (
//     <>
//         <div className='container d-flex justify-content-center align-center contenedor-formulario my-5'> 
//             <div className='row my-5'> 
//                 <div className='col'>
//                     <form onSubmit={guardarDatos}>
//                         <h5 className='form-title text-center titulo'> Para gestionar tu compra, necesitamos que completes los siguientes datos </h5>
//                         <hr/>
//                         <div className='row'>
//                             <div className='col-12 col-md-6 col-sm-6 my-3'> 
//                                 <label htmlFor='nombre' className='form-label'></label>
//                                 <input 
//                                     type='text'
//                                     name='nombre'
//                                     className='form-control'
//                                     placeholder='Nombre'
//                                     id='nombre'
//                                     required
//                                     value={user.nombre}
//                                     onChange={capturarInputs}
//                                 />
//                             </div>
//                             <div className='col-12 col-md-6 col-sm-6 my-3'> 
//                                 <label htmlFor='apellido' className='form-label'></label>
//                                 <input 
//                                     type='text'
//                                     name='apellido'
//                                     className='form-control'
//                                     placeholder='Apellido'
//                                     id='apellido'
//                                     required
//                                     value={user.apellido}
//                                     onChange={capturarInputs}
//                                 />
//                             </div>
//                             <div className='col-12 col-md-6 col-sm-6 my-3'> 
//                                 <label htmlFor='email' className='form-label'></label>
//                                 <input 
//                                     type='email'
//                                     name='email'
//                                     className='form-control'
//                                     placeholder='Correo electrónico'
//                                     id='email'
//                                     required
//                                     value={user.email}
//                                     onChange={capturarInputs}
//                                 />
//                             </div>
//                             <div className='col-12 col-md-6 col-sm-6 my-3'> 
//                                 <label htmlFor='telefono' className='form-label'></label>
//                                 <input 
//                                     type='number'
//                                     name='telefono'
//                                     className='form-control'
//                                     placeholder='Número de contacto'
//                                     id='telefono'
//                                     required
//                                     value={user.telefono}
//                                     onChange={capturarInputs}
//                                 />
//                             </div>
//                             <div className='col-12 col-md-12 col-sm-12 my-3'> 
//                                 <label htmlFor='direccion' className='form-label'></label>
//                                 <input 
//                                     type='text'
//                                     name='direccion'
//                                     className='form-control'
//                                     placeholder='Dirección de residencia'
//                                     id='direccion'
//                                     required
//                                     value={user.direccion}
//                                     onChange={capturarInputs}
//                                 />
//                             </div>
//                             <div className='form-floating'>                       
//                             <h6> Escribinos un comentario (opcional) </h6>         
//                                 <textarea className='form-control' placeholder='Comentarios' />                                
//                             </div>                          
//                         </div>                       
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Formulario