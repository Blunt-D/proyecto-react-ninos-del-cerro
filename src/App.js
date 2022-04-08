import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/ItemCount/ItemCount';
import {useState} from 'react'


function App() {
    const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} producto(s)`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={'Tienda Niños del Cerro'}/>
        {/* { show ? <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/> : null} Comentado por ahora por motivos de la disposición de los nuevos elementos */}
      </header>
    </div>
  );
}

export default App;
