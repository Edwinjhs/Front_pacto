import React from 'react';
import Logo from '../img/cropped-logo_positivo.png';
import { faBars, faMagnifyingGlass, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../footer/footer';
import Header from '../header/header';


class Login extends React.Component {

	render() {

		return (
		 <div>
			<Header />
			<main role="main" className="flex-shrink-0 mt-5 mb-5">

				<section class="">
					<div class="container h-custom">
						<div class="row d-flex justify-content-center align-items-center h-100">
							<div class="col-md-9 col-lg-6 col-xl-5">
								<img src={Logo} class="img-fluid" alt="Sample image" />
							</div>
							<div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
								<form>
									<div class="d-flex flex-row align-items-center justify-content-center mb-4">
										<h3 class="">Inicio de sesión</h3>
									</div>

									<div class="form-outline mb-4">
										<input type="email" id="form3Example3" class="form-control form-control-lg"
											placeholder="Introduzca una dirección de correo electrónico válida" />
										<label class="form-label" for="form3Example3">Correo electrónico</label>
									</div>


									<div class="form-outline mb-3">
										<input type="password" id="form3Example4" class="form-control form-control-lg"
											placeholder="Introducir la contraseña" />
										<label class="form-label" for="form3Example4">Contraseña</label>
									</div>

									<div class="d-flex justify-content-between align-items-center">

										<div class="form-check mb-0">
											<input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
											<label class="form-check-label" for="form2Example3">
												Recordar contraseña
											</label>
										</div>

									</div>

									<div class="text-center text-lg-center mt-4 pt-2">
										<button type="button" class="btn btn-primary btn-lg"
										><FontAwesomeIcon icon={faRightToBracket} /> Iniciar sesión</button>

										<div class="form-outline mb-3">
											<a href="#!" class="text-body">¿Olvidó la contraseña?</a>
										</div>
										<p class="small fw-bold mt-2 pt-1 mb-0">¿No tiene una cuenta?</p>
										<button type="button" class="btn btn-primary btn-lg"
										><FontAwesomeIcon icon={faUserPlus} /> Registrarse</button>
									</div>

								</form>
							</div>
						</div>
					</div>
				</section>

			</main>

			<Footer />

		 </div>	

			

		)

	}

}

export default Login;