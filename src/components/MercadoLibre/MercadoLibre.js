import React, { useState, useEffect } from 'react'

const MercadoLibre = () => {

    const [products, setProducts] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false)

     const handleOnSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response=>response.json())
            .then(json =>{
                setProducts(json.results) //results es una propiedad del objeto, por lo tanto accedo a ella.       
            }).catch(error=> {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })      
        }
        console.log(input)
        if(loading){
            return  <h1>Cargando...</h1>
        }

  return (
    <>
        <h3> Mercado Libre </h3>
        <form onSubmit={handleOnSubmit}>
            <input value={input} onChange={(e)=> setInput(e.target.value)} />
            <button type='submit'> Buscar </button> {/*acá se ejecuta el fetch */}
        </form>
        <div>
            {products.map(prod =>{
                return( 
                    <div key={prod.id}>
                        <h6 className='text-center'> {prod.title} </h6>
                        <img className='justify-content-center' src={prod.thumbnail} alt={prod.title}/>
                    </div>
                    )
            })}
        </div>
    </>
  )
}

export default MercadoLibre