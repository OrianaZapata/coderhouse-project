import { createContext, useState } from "react"

const Notificacion = ({ mensaje, severity }) =>{

    const background = {
      success: 'green',
      error: 'red',
      warning:'yellow',
      default: 'orange'
    }
  
    const notificacionesStyles={
      position: 'absolute',
      top: 114,
      right: 10,
      padding: '10px 20px',
      backgroundColor: background[severity] || background.default,
      color: 'black'
    }
    if(mensaje === '') return
    
    return(
      <div style={notificacionesStyles}> 
        {mensaje} 
      </div>
    )
  }

  const NotificacionContext = createContext()
  
  export const NotificacionProvider = ({ children }) => {

    const [ mensaje, setMensaje] = useState('Notificación')
    const [ severity, setSeverity] = useState('success')

    const setNotificacion = (msg, sev) => {
        setMensaje(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMensaje('')
        }, 3000);
    }
   
    return(
        <NotificacionContext.Provider value={{ setNotificacion }}>
        <Notificacion mensaje={mensaje} severity={severity}/>
            {children}
        </NotificacionContext.Provider>
    )
}

export default NotificacionContext