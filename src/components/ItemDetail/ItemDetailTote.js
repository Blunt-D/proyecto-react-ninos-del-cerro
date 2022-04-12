const ItemDetailTote = ({img, name, description, category, price}) => {
    return(
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section>
                    <p className="Info">
                        Categoria: {category}
                    </p>
                    <p className="Info">
                        Descripción: {description}
                    </p>
                    <p className="Info">
                        Precio: {price}
                    </p>
                </section>           
                <footer className='ItemFooter'>
                </footer>
            </article>
        )
    }

export default ItemDetailTote