import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Footer from '../footer/footer';
import Header from '../header/header';

class Restablecer_contraseña extends React.Component {

	render() {

		return (

            <div>
                <Header/>

                    <main role="main" className="flex-shrink-0 mt-5 mb-5">
                        <section class="">
                            <div class="container h-custom">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    
                                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                        <form>
                                            <div class="d-flex flex-row align-items-center justify-content-center mb-4">
                                                <h3 class="">Restablecer contraseña</h3>
                                            </div>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Ingrese el correo electrónico con el cual se registro</Form.Label>
                                                <Form.Control type="email" placeholder="Ingrese su correo electrónico" />  
                                            </Form.Group>

                                            <form>
                                                <Button variant="primary" size="lg" active> Enviar nueva contraseña </Button>   
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

export default Restablecer_contraseña;