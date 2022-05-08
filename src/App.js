import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useState, useEffect, createContext} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import {NotificationProvider} from './components/Notification/Notification'
import Cart from './components/Cart/Cart';


function App() {



  return (
    <div className="App">
      <NotificationProvider>
      <CartContextProvider>
      <header className="App-header">

        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        <Route path='/cart' element={<Cart />} />
        </Routes>
        </BrowserRouter>
        {/* <ItemListContainer greeting={'Tienda Niños del Cerro'}/> */}
        {/* { show ? <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/> : null} Comentado por ahora por motivos de la disposición de los nuevos elementos */}
      </header>
      </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
