import {Link} from 'react-router-dom'

const Item = ({name, img, id}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
        </section>
    )
}

export default Item