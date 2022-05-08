import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {    
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    console.log(cart);


    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count += prod.quantity
        })

        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const totalCompra = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.price * prod.quantity
        })
        console.log(total);
        return <div>${total}</div>
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            totalCompra    
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext