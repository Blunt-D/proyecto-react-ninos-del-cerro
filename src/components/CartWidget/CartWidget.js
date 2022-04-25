import { useContext } from "react";
import CartContext from "../../Context/CartContext";


const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    return(
        <div className="CartWidget">
    <img src='/images/carrito.png' alt="carrito" width="60" height="auto"/>  
    { getQuantity()}
    </div>
    );
}
export default CartWidget