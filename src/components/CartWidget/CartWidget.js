import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";


const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    if(getQuantity() === 0){
        return <div></div>
    }

    return(
        <div className="CartWidget">
    <Link to='/cart'>
    <img src='/images/carrito.png' alt="carrito" width="60" height="auto"/>  
    </Link>
    { getQuantity()}
    </div>
    );
}
export default CartWidget