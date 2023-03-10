import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/footer';
import Header2 from '../header2/header2';

class Editar_perfil extends React.Component {

	render() {

		return (
            <div>
                <Header2/>

                    <main role="main" className="flex-shrink-0 mt-5 mb-5">
                        <section class="">
                            <div class="container h-custom">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-md-9 col-lg-6 col-xl-5">
                                        <img src="../../img/perfil.png" class="img-fluid" alt="Sample image"/>                                           
                                    </div>

                                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                        <form>
                                            <div class="d-flex flex-row align-items-center justify-content-center mb-4">
                                                <h3 class="">Editar tu perfil de usuario</h3>
                                            </div>

                                            <form>
                                                <form>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="form-control" placeholder="Inserte sus nombres"/>
                                                            <label class="form-label" for="form3Example4">Nombres</label>
                                                        </div>
                                                        <div class="col">
                                                            <input type="text" class="form-control" placeholder="Inserte sus apellidos"/>
                                                            <label class="form-label" for="form3Example4">Apellidos</label>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="form-group"> 
                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Seleccionar</option>
                                                                    <option>Organización de personas con discapacidad</option>
                                                                    <option>Empresas</option>
                                                                    <option>Entidades de formación</option>
                                                                    <option>Entidad de intermediación laboral</option>
                                                                    <option>Entidad prestadora de servicios</option>
                                                                    <option>Entidad territorial</option>
                                                                    <option>Academia</option>
                                                                </select>
                                                                <label for="exampleFormControlSelect1">Actores sociales</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="form-control" placeholder="Nombre de la entidad"/>
                                                            <label class="form-label" for="form3Example4">Nombre de la entidad</label>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">                                                           
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                <label for="exampleFormControlTextarea1">Descripción del perfil</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="form-control" placeholder="Contacto"/>
                                                            <label class="form-label" for="form3Example4">Contacto</label>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" placeholder="Ingrese su Ciudad"/>
                                                                <label for="exampleFormControlTextarea1">Ciudad</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="form-control" placeholder="Ingrese su departamento"/>
                                                            <label class="form-label" for="form3Example4">Departamento</label>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" placeholder="Ingrese su País"/>
                                                                <label for="exampleFormControlTextarea1">País</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <form>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="form-group"> 
                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Seleccionar</option>
                                                                    <option>Conocimientos</option>
                                                                    <option>Buenas practicás</option>
                                                                    <option>Casos exitosos</option>
                                                                </select>
                                                                <label for="exampleFormControlSelect1">Intereses de conocimiento</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <br></br>

                                                <Button variant="primary" size="lg" active> Guardar </Button>{' '}
                                                <Button variant="secondary" size="lg" active> Cancelar </Button>
                                            </form>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                <Footer/>
            </div>          

		)

	}

}

export default Editar_perfil;