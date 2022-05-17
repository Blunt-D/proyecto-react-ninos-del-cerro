import { useContext, useState } from "react"
import CartContext from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'



const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, totalCompra, getQuantity } = useContext(CartContext)  

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Sebastian Zuviria',
                phone: '123456789',
                email: 'szvuria@gmail.com'
            },
            total: totalCompra(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products') 

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return PromiseRejectionEvent({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({id}) => {
                batch.commit()
                console.log(`El id de la orden es ${id} `)
            }).catch(error => {
                return console.log("error auxilio", error.message)
            }).finally(() => {
                setLoading(false)
            })
    }


    return(
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
            <li>Total: {totalCompra()}</li>
            <li><button onClick={() => clearCart()}>Limpiar Carro</button></li>
            <li><button onClick={() => createOrder()}>Crear Orden</button></li>

        </ul>
        </>
    )
}

export default Cart