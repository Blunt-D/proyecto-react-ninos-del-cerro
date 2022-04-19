import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className='card-group row row-cols-2'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList