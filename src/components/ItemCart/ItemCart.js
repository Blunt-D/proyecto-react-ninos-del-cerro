import { useContext } from "react"
import CartContext from "../../Context/CartContext"



const ItemCart = ({id, name, price, quantity}) => {

    const {cart, removeItem} = useContext(CartContext)


    return (
            <li key={id}>
                {name}  Cantidad: {quantity}  Precio unitario: {price}  Subtotal: {quantity * price} <button onClick={() => removeItem(id)}>X</button>
            </li>
            )}



export default ItemCart