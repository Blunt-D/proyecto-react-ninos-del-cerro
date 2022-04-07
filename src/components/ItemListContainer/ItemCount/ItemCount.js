import {useState} from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

    // Me permite aplicar useState en sus dos posiciones
    const[count, setCount] = useState(initial)



    const decrement = () => {
        if (count > 0) {
            setCount(count -1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count +1)
        }
}

    return(

        <div className='container'>
            <div className='row'> 
            <button className='col'  onClick={decrement}>-</button>
            <p className='col'>{count}</p>
            <button className='col' onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount