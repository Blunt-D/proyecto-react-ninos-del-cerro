import  {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = (props) => {
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    
    const {categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef)
            .then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]) 

    if(products.length === 0){
        return <h1>No existen productos</h1>
    }

    return(
        <div className='container mt-5 pt-5 mb-5 gx-5'>
        <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer

