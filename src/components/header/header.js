import { faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../img/cropped-logo_positivo.png';


import React from 'react';

class Header extends React.Component {

    render() {

        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-white border-nav-color">

                <div class="container px-5 py-3">

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src={Logo}
                                height="60"
                                alt="Logo Pacto de Productividad"
                                loading="lazy"
                            />
                        </a>

                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/'>Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/sobre-nosotros/'>Sobre nosotros</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/12/26/modelo-territorial/'>Modelo Territorial</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/que-hacemos/'>Lo que hacemos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/conocimiento/'>Conocimiento</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/escuela-virtual/'>Escuela Virtual</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-color-header text-decoration-none" href='https://www.pactodeproductividad.com/contacto/'>Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-color-header" href="#">Login</a>
                            </li>
                        </ul>

                    </div>



                    <div class="d-flex align-items-center">

                        <a class="link-secondary me-3" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>

                        <div class="dropdown">
                            <a
                                class="dropdown-toggle d-flex align-items-center hidden-arrow text-secondary"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a class="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                        <form class="d-flex input-group w-auto">
                            <span class="ps-3">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                        </form>
                    </div>

                </div>
                
            </nav>
                
        )

    }

}

export default Header;