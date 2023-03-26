import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/footer';
import Header2 from '../header2/header2';
import Avatar from '../img/perfil.png';

class Editar_perfil extends React.Component {

    render() {

        return (
            <div>
                

                <main role="main" className="flex-shrink-0 mt-5 mb-5">
                    <section className="">
                        <div className="container h-custom">
                            <div className="row d-flex justify-content-center align-items-center h-100">

                                <div className="">
                                    <form>
                                        <form>
                                            <form>
                                                <h4 className='fw-bold text-center'>Foto de perfil</h4>
                                                <div className='mb-4 mt-4 text-center'>
                                                    <img
                                                        src={Avatar}
                                                        height="100"
                                                        alt="Avatar perfil"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className='row'>
                                                    <div className="col text-start">
                                                        <label className="form-label fw-bold" for="form3Example4">Seleccione un foto de perfil:</label>
                                                        <input type="file" className="form-control" placeholder="Inserte sus nombres" />
                                                    </div>
                                                </div>
                                                <div className="row text-start">
                                                    <div className="col">
                                                        <label className="form-label fw-bold" for="form3Example4">Nombres:</label>
                                                        <input type="text" className="form-control" placeholder="Inserte sus nombres" />
                                                    </div>
                                                    <div className="col">
                                                        <label className="form-label fw-bold" for="form3Example4">Apellidos:</label>
                                                        <input type="text" className="form-control" placeholder="Inserte sus apellidos" />
                                                    </div>
                                                </div>
                                            </form>

                                            <form>
                                                <div className="row text-start">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label className='form-label fw-bold' for="exampleFormControlSelect1">Tipo de actor social:</label>
                                                            <select className="form-control" id="exampleFormControlSelect1">
                                                                <option className='#'>Seleccione una opción</option>
                                                                <option>Organización de personas con discapacidad</option>
                                                                <option>Empresas</option>
                                                                <option>Entidades de formación</option>
                                                                <option>Entidad de intermediación laboral</option>
                                                                <option>Entidad prestadora de servicios</option>
                                                                <option>Entidad territorial</option>
                                                                <option>Academia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <label className="form-label fw-bold" for="correo">Correo electrónico:</label>
                                                        <input type="email" className="form-control" name="correo" placeholder="Ingrese un correo electrónico" />
                                                    </div>
                                                </div>
                                            </form>

                                            <form>
                                                <div className="row text-start">
                                                    <div className="col">
                                                        <label className="form-label fw-bold" for="entidad">Nombre de la entidad:</label>
                                                        <input type="text" className="form-control" name="entidad" placeholder="Nombre de la entidad" />
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label className='form-label fw-bold' for="exampleFormControlSelect1">Aportes a la comunidad:</label>
                                                            <select className="form-control" id="exampleFormControlSelect1">
                                                                <option>Seleccione una opción</option>
                                                                <option>Conocimientos</option>
                                                                <option>Buenas practicás</option>
                                                                <option>Casos exitosos</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                            <form>
                                                <div className="row text-start">
                                                    <div className="col">
                                                        <label className="form-label fw-bold" for="form3Example4">Contacto:</label>
                                                        <input type="text" className="form-control" placeholder="Contacto" />
                                                        <label className="form-label fw-bold" for="form3Example4">Departamento:</label>
                                                        <input type="text" className="form-control" placeholder="Ingrese su departamento" />
                                                    </div>
                                                    <div className="col text-start">
                                                        <label className='form-label fw-bold' for="exampleFormControlTextarea1">Breve descripción de aportes a la comunidad:</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                                    </div>
                                                </div>
                                            </form>

                                            <form>
                                                <div className="row text-start">
                                                    <div className="col">
                                                        <label className='form-label fw-bold' for="exampleFormControlTextarea1">País:</label>
                                                        <input type="text" className="form-control" placeholder="Ingrese su País" />
                                                    </div>
                                                    <div className="col">
                                                        <label className='form-label fw-bold' for="exampleFormControlTextarea1">Ciudad:</label>
                                                        <input type="text" className="form-control" placeholder="Ingrese su Ciudad" />
                                                    </div>
                                                </div>
                                            </form>
                                            <form>
                                                <div className="col text-start">
                                                    <div className="form-group">
                                                        <label className='form-label fw-bold' for="exampleFormControlTextarea1">Descripción del perfil:</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col text-start">
                                                    <div className="form-group">
                                                        <label className='form-label fw-bold' for="exampleFormControlTextarea1">Intereses de conocimiento:</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                        </form>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
            </div>

        )

    }

}

export default Editar_perfil;