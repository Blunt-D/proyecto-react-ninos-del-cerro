import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { firestoreDb } from '../../services/firebase';
import {getDocs, collection } from 'firebase/firestore'


const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
    getDocs(collection(firestoreDb, 'categories')).then(response => {
        const categories = response.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        })
        setCategories(categories)
    })
    }, [])


    return <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark container-fluid">
            <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">
                    <Link to='/'>
                    <img src='/images/ndc_logo_white.png' alt="logo de ninos del cerro en blanco" width="200" height="auto"/>
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/form' className="nav-link active" aria-current="page" href="./paginas/contacto.html">Formulario de contacto</Link>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <Link to='/' className="nav-link">Tienda</Link>
                                <button type="button" className="btn dropdown-toggle dropdown-toggle-split " data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                            {categories.map(cat => <li><NavLink key={cat.id} to={`/category/${cat.id}`}
                            className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                            >{cat.description}</NavLink></li>)}                               
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./paginas/multimedia.html">¡Shows en Vivo!</a>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <a className="nav-link" href="paginas/discografia.html">Discografía</a>
                                <button type="button" className="btn dropdown-toggle dropdown-toggle-split " data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="./paginas/nonatocoo.html">Nonato Coo</a></li>
                                    <li><a className="dropdown-item" href="./paginas/lance.html">Lance</a></li>
                                    <li><a className="dropdown-item" href="./paginas/cuautemoc.html">Cuautéhmoc</a></li>
                                    <li><a className="dropdown-item" href="./paginas/novapasareltiempo.html">No va a pasar el tiempo en vano</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>;
}

export default NavBar