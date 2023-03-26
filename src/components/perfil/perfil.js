
import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header_post from '../header_post/header_post';
import Avatar from '../img/perfil.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFile, faImage, faLocationDot, faUserPlus, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import ModalLogin from '../modal_perfil/modal-profile';


const Perfil = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div>
                <Header_post />

                <div class="row profile-body">
                    <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper mt-3">
                        <div class="card rounded">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <h6 class="card-title mb-4 fw-bold">Intereses</h6>
                                </div>
                                <div class="d-flex align-items-center text-start mb-3">
                                    <img class="mw-image-nav-left rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                    <div class="ms-2">
                                        <button type="button" class="my-0 mx-0 bg-body border-0 px-0 text-start" onClick={handleShow}>
                                            <p className='mb-0 fw-bold'>Andrés Felipe Rodríguez Lamus</p>
                                        </button>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon class="mw-icon-nav-left color-icon" icon={faComments} />
                                    <div class="ms-2">
                                        <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Publicaciones</p></a>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center text-start mb-3">
                                    <FontAwesomeIcon class="mw-icon-nav-left color-icon" icon={faUsers} />
                                    <div class="ms-2">
                                        <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Seguidos</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8 col-xl-6 middle-wrapper mt-3">
                        <div class="row">
                            <div class="col-md-12 gri-margin">

                                <div class="card rounded">
                                    <div class="d-flex align-items-center justify-content-center my-3">

                                        <img class="mw-image-perfil rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Imagen de perfil" />
                                    </div>
                                    <div class="ms-2">
                                        <a className='text-decoration-none text-dark' href='#'><p className='mb-2 fs-5 fw-bolder'>Andrés Felipe Rodríguez Lamus</p></a>
                                    </div>

                                    <hr className='m-0' />

                                    <div class="row align-items-start mt-3">
                                        <div class="col fw-bold">
                                            Actor social:
                                            <p className='fw-normal' >Empresa</p>
                                        </div>
                                        <div class="col fw-bold">
                                            Entidad:
                                            <p className='fw-normal' >Ejemplo 1 sas</p>
                                        </div>
                                        <div class="col fw-bold">
                                            Aportes a la comunidad:
                                            <p className='fw-normal' >Conocimientos</p>
                                        </div>
                                    </div>

                                    <div class="col fw-bold text-start mx-4 mt-4 bg-perfil p-4 rounded-3">
                                        Descripción del perfil:
                                        <p className='fw-normal'>Vivamus tristique finibus quam ac placerat. Phasellus tincidunt efficitur libero, sed pretium ipsum porttitor eget. Quisque id lorem nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod id metus vel finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut turpis id nunc aliquam rutrum. Aenean aliquet mattis fringilla.</p>
                                    </div>

                                    <div class="col fw-bold text-start mx-4 my-4 bg-perfil p-4 rounded-3">
                                        Intereses de conocimiento:
                                        <p className='fw-normal'>Vivamus tristique finibus quam ac placerat. Phasellus tincidunt efficitur libero, sed pretium ipsum porttitor eget. Quisque id lorem nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod id metus vel finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut turpis id nunc aliquam rutrum. Aenean aliquet mattis fringilla.</p>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-center mb-3'>
                                            <FontAwesomeIcon class="icon-size d-flex align-items-center mx-2 color-corp" icon={faLocationDot} /> 
                                            <p className='mb-0 fs-6 fw-bolder'>Bogotá D.C., Cundinamarca</p>
                                    </div>

                                    <hr className='m-0' />

                                    <div class="d-flex justify-content-center post-actions my-1 me-0">
                                        <button type='button' class="btn btn-prim fs-6 my-2 color-corp-boton">
                                            Actualizar
                                        </button>
                                    </div>
                                </div>



                                <div class="card rounded mt-3">
                                    <div class="card-header">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center text-start">
                                                <img class="mw-image rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fs-5 fw-bolder'>Andrés Felipe Rodríguez Lamus</p></a>
                                                    <p class="mb-0 text-muted">Hace 40 minutos</p>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <button class="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-lg pb-3px color-corp">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span class="">Unfollow</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span class="">Go to post</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span class="">Share</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span class="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-3 tx-14 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-flex justify-content-evenly post-actions my-2">
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icon-md color-corp">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ms-2 mb-0 align-items-center">Me gusta</p>
                                            </a>
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square icon-md color-corp">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ms-2 mb-0">Comentarios</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card rounded mt-3 mb-3">
                                    <div class="card-header">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center text-start">
                                                <img class="mw-image rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fs-5 fw-bolder'>Andrés Felipe Rodríguez Lamus</p></a>
                                                    <p class="mb-0 text-muted">Hace 1 minuto</p>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <button class="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-lg pb-3px color-corp">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span class="">Unfollow</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span class="">Go to post</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span class="">Share</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span class="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-3 tx-14 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-flex justify-content-evenly post-actions my-2">
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icon-md color-corp">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ms-2 mb-0 align-items-center">Me gusta</p>
                                            </a>
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square icon-md color-corp">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ms-2 mb-0">Comentarios</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="d-none d-xl-block col-xl-3 right-wrapper mt-3">
                        <div class="row">
                            <div class="col-md-12 grid-margin ">
                                <div class="card rounded mt-0 mx-1">
                                    <div class="card-body">
                                        <h6 class="card-title text-start fw-bold">Sugerencias para ti</h6>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom mt-4">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' class="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 3</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' class="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 4</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' class="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 5</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' class="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 6</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' class="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 7</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-4 mx-auto'>
                                                <button type='button' class="btn btn-primary fs-6 mx-3 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right-sug" icon={faUserPlus} /> Seguir
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 grid-margin">
                                <div class="card rounded mt-3 mx-1 mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title text-start fw-bold">Usuarios en línea</h6>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom mt-4">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 2</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' class="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 3</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' class="btn btn btn-primary fs-6  mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 4</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' class="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 5</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' class="btn btn btn-primary fs-6  mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 6</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' class="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="mw-icon-nav-right rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                                                <div class="ms-2">
                                                    <a className='text-decoration-none text-dark' href='#'><p className='mb-0 fw-bold'>Usuario 7</p></a>
                                                </div>
                                            </div>
                                            <div className='d-grid col-5 mx-auto'>
                                                <button type='button' class="btn btn btn-primary fs-6 mx-1 my-3 color-corp-boton">
                                                    <FontAwesomeIcon class="mw-icon-nav-right" icon={faComments} /> Enviar mensaje
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <Footer />
            </div>
            <ModalLogin show={show} handleClose={handleClose} />
        </>
    )

}

export default Perfil;