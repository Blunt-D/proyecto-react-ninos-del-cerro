import { useState, useEffect } from 'react'
import { getProductsById } from '../../asynmock'
import ItemDetailTote from '../ItemDetail/ItemDetailTote'

const ItemDetailContainerTote = () => {
    const [product, setProduct] = useState()
    

    useEffect(() => {
        getProductsById(2).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [2])


    return (
        <div>
            { 
                    <ItemDetailTote  {...product} /> 
            }
        </div>
    )    
}
export default ItemDetailContainerTote