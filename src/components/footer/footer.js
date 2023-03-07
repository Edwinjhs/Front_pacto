import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';


class Footer extends React.Component {

  render() {

    return (
      <section className="text-white text-center text-lg-start color-footer pt-5 pb-5">

        <div class="container p-5">

          <div class="row">

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-font-size">Contacto</h5>

              <ul class="list-unstyled mb-0 text-color text-font-size">
                <li>Bogotá, D.C. - Colombia - Sur América</li>
                <li>Calle 70 No. 7-30 oficina 1001</li>
                <li>Teléfono (+571) 400 00 31</li>
              </ul>
            </div>

            <div class="col-md-6 mb-4 mb-md-0 d-flex justify-content-end">

              <ul class="list-unstyled list-group list-group-horizontal ">
                <li className='m-2'>
                  <a href="#!" class="text-white"><SocialIcon url="https://www.instagram.com/pactodeproductividad/" style={{ height: 38, width: 38 }} fgColor='#ffffff'/></a>
                </li>
                <li className='m-2'>
                  <a href="#!" class="text-white"><SocialIcon url="https://www.facebook.com/pactodeproductividad.co" style={{ height: 38, width: 38 }} fgColor='#ffffff'/></a>
                </li>
                <li className='m-2'>
                  <a href="#!" class="text-white"><SocialIcon url="https://www.youtube.com/c/PactodeProductividad" style={{ height: 38, width: 38 }} fgColor='#ffffff'/></a>
                </li>
                <li className='m-2'>
                  <a href="#!" class="text-white"><SocialIcon url="https://www.linkedin.com/company/pactocol/" style={{ height: 38, width: 38 }} fgColor='#ffffff'/></a>
                </li>
                <li className='m-2'>
                  <a href="#!" class="text-white"><SocialIcon url="https://twitter.com/PactoProductivd" style={{ height: 38, width: 38 }} fgColor='#ffffff'/></a>
                </li>
              </ul>
            </div>

          </div>

        </div>
        <hr class="container mx-" />

        <div class="container px-5">
          <ul class="list-group list-group-horizontal list-unstyled text-font-size">
            <li class="me-3"><a class="text-color text-decoration-none" href='https://www.pactodeproductividad.com/'>Inicio</a></li>
            <li class="me-3"><a class="text-color text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/sobre-nosotros/'>Sobre nosotros</a></li>
            <li class="me-3"><a class="text-color text-decoration-none" href='https://www.pactodeproductividad.com/2022/12/26/modelo-territorial/'>Modelo Territorial</a></li>
            <li class="me-3"><a class="text-color text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/que-hacemos/'>Lo que hacemos</a></li>
            <li class="me-3"><a class="text-color text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/conocimiento/'>Gestión del Conocimiento</a></li>
            <li class="me-3"><a class="text-color text-decoration-none" href='https://www.pactodeproductividad.com/2022/11/01/escuela-virtual/'>Escuela Virtual</a></li>
            <li class="me-3"><a class="text-color text-decoration-none" href='https://www.pactodeproductividad.com/contacto/'>Contacto</a></li>
            <li class="me-3"><a class="text-color text-decoration-none" href='#!'>Login</a></li>
          </ul>
          <div class="text-end p-3 text-color text-font-size">
            ©Copyright 2023 — Pacto de Productividad. Todos los derechos reservados.
          </div>
        </div>
      </section>

    )

  }

}

export default Footer;