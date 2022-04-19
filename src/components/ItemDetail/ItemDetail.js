
const ItemDetail = ({  name, img, category, description, price, stock }) => {
    return (
        <div className='card'>
            <img src={img} alt={name} className='card-image-top'/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                    <p className="card-text">
                        Categoria: {category}
                    </p>
                    <p className="card-text">
                        Descripción: {description}
                    </p>
                    <p className="card-text">
                        Precio: {price}
                    </p>
            </div>
        </div>
    )
}

export default ItemDetail