import { useState, useEffect } from 'react'
import { getProductsById } from '../../asynmock'
import ItemDetailPolera from '../ItemDetail/ItemDetailPolera'

const ItemDetailContainerPolera = () => {
    const [product, setProduct] = useState()
    

    useEffect(() => {
        getProductsById(1).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [1])


    return (
        <div>
            { 
                    <ItemDetailPolera  {...product} /> 
            }
        </div>
    )    
}
export default ItemDetailContainerPolera