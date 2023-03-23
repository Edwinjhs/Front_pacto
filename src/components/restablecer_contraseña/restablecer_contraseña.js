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
                                        <form>
                                            <div class="mb-5">
                                                <h1 class="text-center">Restablecer contraseña</h1>
                                            </div>
                                            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                                                <Form.Label>Ingrese el correo electrónico con el cual se registro:</Form.Label>
                                                <Form.Control type="email" placeholder="Ingrese un correo electrónico valido" />  
                                            </Form.Group>
                                            <form className='mt-5'>
                                                <Button variant="primary" size="lg" active>Enviar nueva contraseña</Button>   
                                            </form>
                                        </form>
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