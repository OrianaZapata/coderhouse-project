# INICIALIZANDO EL PROYECTO

En mi aplicación, empecé creandola con create-react-app, luego de esto, instalé las dependencias a utilizar en el proyecto, tales como :

1. React Router Dom (npm i react-router-dom)
2. Bootstrap (npm i react-bootstrap), pero en el caso del proyecto, está en el index-html.

Para poder correr el servidor, colocamos en la terminal de VS el comando de "npm start" o "npm run start". 

# RUTAS

Route "/" :
Muestra la pantalla de inicio.

Route "/detail":
Muestra el detalle de cada producto al dar click en el botón "Ver detalles"

Route "/category":
Muestra la ruta de cada producto al seleccionar en el navbar, por su categoría. 

Route "/carrito"
Muestra detalladamente cuáles son los productos que agregaste

Route "/contacto"
Si bien no cumple ninguna funcionalidad, sería la página de contacto.

Route "/finalizar-compra"
Es la ruta en la que redirige al formulario para generar la compra y va directamente firestore.

¿Qué podemos encontrar en checkout? 
Dentro de este componente estará toda la lófica del formulario y la generación de la compra junto a sus productos.

En CardWidget encontraremos el carrito con la cantidad de productos agregados y la el total de los mismos. 

Finalizando, tenemos la carpeta de hooks, en la cual optimizamos el código de ItemListContainer.

Rote "/*":
Muestra la página no encontrada (404)

# GIF
open "/public/ezgif.com-gif-maker.gif"

# GIF PROYECTO FINAL

"/public/Proyecto-final.gif"


