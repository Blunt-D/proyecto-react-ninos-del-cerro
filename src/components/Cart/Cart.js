import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {

    const { cart, totalCompra} = useContext(CartContext)

    if(cart.lenght === 0){
        return (
            <h1>No hay productos en el carro</h1>
        )
    }

    return(
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
            <li>Total: {totalCompra()}</li>
            <button>Terminar compra</button>

        </ul>
        </>
    )
}

export default Cart