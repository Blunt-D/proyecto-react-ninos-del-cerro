import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {    
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
    }

    console.log(cart);


    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
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