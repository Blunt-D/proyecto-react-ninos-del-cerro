import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useState, useEffect} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
    const [show, setShow] = useState(true)

  // const handleOnAdd = (quantity) => {
  //   console.log(`Se agregaron ${quantity} producto(s)`)
  // } Pendiente por ahora hasta aplicar el counter

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        </Routes>
        </BrowserRouter>
        {/* <ItemListContainer greeting={'Tienda Niños del Cerro'}/> */}
        {/* { show ? <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/> : null} Comentado por ahora por motivos de la disposición de los nuevos elementos */}
      </header>
    </div>
  );
}

export default App;
