import { useState, useEffect } from "react"

 export const useAsync = (asyncFnc, dependencias = []) => {

    const [datos, setDatos] = useState()
    const [error, setError] = useState()

    useEffect(()=> {

        asyncFnc().then(response => {
          setDatos(response)
        }).catch(error=>{
          setError(error)
        })
      }, dependencias)

    return{
        datos,
        error
    }
}