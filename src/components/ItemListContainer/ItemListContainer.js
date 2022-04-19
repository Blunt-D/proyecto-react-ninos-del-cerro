import  {useState, useEffect} from 'react'
import {getProducts} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const[products, setProducts] = useState([])

    
    const {categoryId } = useParams()


    useEffect(() => {
        getProducts(categoryId).then(prods =>{
            setProducts(prods)
        }).catch(error => {
            console.log('error')
        })
    }, [categoryId])

    
    return(
        <div className='container mt-5 pt-5 mb-5 gx-5'>
        <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer

