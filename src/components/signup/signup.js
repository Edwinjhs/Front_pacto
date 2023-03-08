import React from 'react';
import Logo from '../img/cropped-logo_positivo.png';
import { faBars, faMagnifyingGlass, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../footer/footer';
import Header from '../header/header';


class Signup extends React.Component {

    render() {

        return (

            <main role="main" className="flex-shrink-0 mt-5 mb-5">

                <section className="container">
                    <form class="form-horizontal" action='' method="POST">
                        <fieldset>
                            <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                                <h3 className="fw-bold">Registrarse</h3>
                            </div>
                            <div class="control-group">
                                <label class="form-label fw-bolder d-flex justify-content-start" for="username">Nombres:</label>
                                <div class="controls">
                                    <input type="text" id="username" name="username" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="form-label fw-bolder d-flex justify-content-start" for="username">Apellidos:</label>
                                <div class="controls">
                                    <input type="text" id="username" name="username" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="form-label fw-bolder d-flex justify-content-start" for="actor_social">Tipo de actor social:</label>
                                <div class="controls">
                                    <select name="actor_social" id="actor_social" class="form-control form-control-lg fs-6 bg-light">
                                        <option value="">Seleccione una opción</option>
                                        <option value="organización_personas_discapacidad">Organización de personas con discapacidad</option>
                                        <option value="empresas">Empresas</option>
                                        <option value="entidades_formación">Entidades de formación</option>
                                        <option value="entidad_intermediación_laboral">Entidad de intermediación laboral</option>
                                        <option value="entidad_prestadora_servicios">Entidad prestadora de servicios</option>
                                        <option value="entidad_territorial">Entidad territorial</option>
                                        <option value="academia">Academia</option>
                                    </select>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="form-label fw-bolder d-flex justify-content-start" for="entidad">Nombre de la entidad:</label>
                                <div class="controls">
                                    <input type="text" id="entidad" name="entidad" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="form-label fw-bolder d-flex justify-content-start" for="Dperfil">Descripción del perfil:</label>
                                <div class="controls">
                                    <input type="text" id="Dperfil" name="Dperfil" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="contacto">Contacto:</label>
                                <div class="controls">
                                    <input type="number" id="contacto" name="contacto" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="ciudad">Ciudad:</label>
                                <div class="controls">
                                    <input type="text" id="ciudad" name="ciudad" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="departamento">Departamento:</label>
                                <div class="controls">
                                    <input type="text" id="departamento" name="departamento" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="pais">País:</label>
                                <div class="controls">
                                    <input type="text" id="pais" name="pais" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="Iconocimiento">Intereses de conocimiento:</label>
                                <div class="controls">
                                    <select name="Iconocimiento" id="Iconocimiento" class="form-control form-control-lg fs-6 bg-light">
                                        <option value="">Seleccione una opción</option>
                                        <option value="conocimientos">Conocimientos</option>
                                        <option value="Bpracticas">Buenas prácticas</option>
                                        <option value="Cexitosos">Casos exitosos</option>
                                    </select>
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="imagen_perfil">Seleccione una foto de perfil:</label>
                                <div class="controls">
                                    <input type="file" id="imagen_perfil" name="imagen_perfil" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="contraseña">Contraseña:</label>
                                <div class="controls">
                                    <input type="password" id="contraseña" name="contraseña" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <label class="form-label fw-bolder d-flex justify-content-start" for="contraseña_confirm">Confirme la contraseña:</label>
                                <div class="controls">
                                    <input type="password" id="contraseña_confirm" name="contraseña_confirm" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                </div>
                            </div>

                            <div class="control-group">

                                <div class="controls">
                                    <button type="button" class="color-button-sign"><FontAwesomeIcon icon={faUserPlus} /> Registrarse</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>

            </main>

        )

    }

}

export default Signup;