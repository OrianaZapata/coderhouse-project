import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from './components/Contacto/Contacto';
import { CartContextProvider } from './Context/CartContext'
import { NotificacionProvider } from './notification/Notification';
import CartView from './components/CartView/CartView';

function App() {

  return (
    <>
    <NotificacionProvider> 
      <CartContextProvider >
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting='Listado de todos los productos'/> } /> 
            <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Listado por categoría' /> }/>
            <Route path='/detail/:productId' element={ <ItemDetailContainer /> } /> 
            <Route path='/carrito' element={<CartView />} />
            <Route path='/contacto' element={ <Contacto/> } />
            <Route path='*' element={ <h1> 404. PÁGINA NO ENCONTRADA </h1> } />
            {/* <Route path='/cart' element={ <Carrito />} /> */}
          </Routes>
          </Router>
      </CartContextProvider>
    </NotificacionProvider>

    </>
  );
}

export default App;