import React from 'react';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../footer/footer';
import Header from '../header/header';


class Signup extends React.Component {

    render() {

        return (
            <div>
                <Header />
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
                                                <option value="">Seleccione una opci??n</option>
                                                <option value="organizaci??n_personas_discapacidad">Organizaci??n de personas con discapacidad</option>
                                                <option value="empresas">Empresas</option>
                                                <option value="entidades_formaci??n">Entidades de formaci??n</option>
                                                <option value="entidad_intermediaci??n_laboral">Entidad de intermediaci??n laboral</option>
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
                                        <label class="form-label fw-bolder d-flex justify-content-start" for="Dperfil">Descripci??n del perfil:</label>
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
                                        <label class="form-label fw-bolder d-flex justify-content-start" for="pais">Pa??s:</label>
                                        <div class="controls">
                                            <input type="text" id="pais" name="pais" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="form-label fw-bolder d-flex justify-content-start" for="Iconocimiento">Intereses de conocimiento:</label>
                                        <div class="controls">
                                            <select name="Iconocimiento" id="Iconocimiento" class="form-control form-control-lg fs-6 bg-light">
                                                <option value="">Seleccione una opci??n</option>
                                                <option value="conocimientos">Conocimientos</option>
                                                <option value="Bpracticas">Buenas pr??cticas</option>
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
                                        <label class="form-label fw-bolder d-flex justify-content-start" for="contrase??a">Contrase??a:</label>
                                        <div class="controls">
                                            <input type="password" id="contrase??a" name="contrase??a" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="form-label fw-bolder d-flex justify-content-start" for="contrase??a_confirm">Confirme la contrase??a:</label>
                                        <div class="controls">
                                            <input type="password" id="contrase??a_confirm" name="contrase??a_confirm" placeholder="" class="form-control form-control-lg fs-6 bg-light" />
                                        </div>
                                    </div>

                                    <div class="control-group" >
                                        <div class="controls">
                                            <button type="button"  class="color-button-sign"><FontAwesomeIcon icon={faUserPlus} /> Registrarse</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </section>
                    </main>
                <Footer />
            </div>

        )

    }

}

export default Signup;