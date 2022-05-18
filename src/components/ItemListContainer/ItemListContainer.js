import  {useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = (props) => {
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    
    const {categoryId } = useParams()

    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => console.log('hubo un error en item list container')
        [categoryId]
    )

    if(loading) {
        return <h1>Cargando...</h1>
    }

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

