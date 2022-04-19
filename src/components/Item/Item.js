import {Link} from 'react-router-dom'

const Item = ({name, img, id}) => {
    return(
        <div className='card g-0 border-0'>
                <img src={img} alt={name}/>
        <div className='card-body'>
            <h3 className='card-title'>{name}</h3>
            <Link className='card-text' to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
        </div>
    )
}

export default Item