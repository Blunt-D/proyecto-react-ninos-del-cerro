import './NavBar.css'

const NavBar = () => {
    return <>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark container-fluid">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">
                    <img src="./images/ndc_logo_white.png" alt="logo de ninos del cerro en blanco" width="200" height="auto"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./paginas/contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./paginas/biografia.html">Tienda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./paginas/multimedia.html">¡Shows en Vivo!</a>
                        </li>
                        <li class="nav-item">
                            <div class="btn-group">
                                <a class="nav-link" href="paginas/discografia.html">Discografía</a>
                                <button type="button" class="btn dropdown-toggle dropdown-toggle-split " data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="./paginas/nonatocoo.html">Nonato Coo</a></li>
                                    <li><a class="dropdown-item" href="./paginas/lance.html">Lance</a></li>
                                    <li><a class="dropdown-item" href="./paginas/cuautemoc.html">Cuautéhmoc</a></li>
                                    <li><a class="dropdown-item" href="./paginas/novapasareltiempo.html">No va a pasar el tiempo en vano</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>;
}

export default NavBar