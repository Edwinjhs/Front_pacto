import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Footer from "../footer/footer";
import Header from "../header/header";
import axios from "axios";
import Avatar from '../img/perfil.png';

function Signup() {
  const [name_user, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [knowledge_interests, setKnowledge_interests] = useState("");
  const [typesActors, setTypesActors] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
//   for the terms and conditions
  const [userData, setUserData] = useState({
    cohabitation_agreement: false,
  })

  function handleSignupSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const form_data = new FormData(form);
    axios.post("http://localhost:8000/api/user/post", form_data).then((response) => {
    })
    .catch((error) => {
        console.log(error);
    });
  }
// traerme las entidades
  useEffect(() => {
    axios.get("http://localhost:8000/api/typeactor/get").then((response) => {
      setTypesActors(response.data);
    });
  }, []);
// traerme las contribuciones
  useEffect(() => {
    axios.get("http://localhost:8000/api/contribution/get").then((response) => {
      setContributions(response.data);
    });
  }, []);
//   traerme los paises
  useEffect(() => {
    axios.get("http://localhost:8000/api/country/get").then((response) => {
        setCountries(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
  }, []);

  function handleCountryChange(event) {
    // Obtener el ID del país seleccionado
    const countryId = event.target.value;
    // Solicitar los departamentos correspondientes al país seleccionado
    fetch(`http://localhost:8000/api/countries/${countryId}/departments/`)
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);
      });
  }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };
    
  function handleDepartmentChange(event) {
    // Obtener el ID del departamento seleccionado
    const departmentId = event.target.value;
    // Solicitar las ciudades correspondientes al departamento seleccionado
    fetch(`http://localhost:8000/api/departments/${departmentId}/cities/`)
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      });
  }

  return (
    <div>
      <Header />
      <main role="main" className="flex-shrink-0 mt-5 mb-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-7 offset-xl-1">
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-4 row">
                <div className="col">
                  <h3 className="text-start fw-bold">FORMULARIO DE REGISTRO</h3>
                </div>
              </div>
              <h4 className='fw-bold'>Foto de perfil</h4>
              <div className='mb-4 mt-4'>
                <img
                    src={Avatar}
                    height="100"
                    alt="Avatar perfil"
                    loading="lazy"
                />
              </div>
              <div className="row text-start">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="form3Example4"> Nombres:</label>
                  <input type="text" className="form-control" placeholder="Inserte sus nombres" name="name_user" />
                </div>
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="form3Example4">Apellidos:</label>
                  <input type="text" className="form-control" placeholder="Inserte sus apellidos" name="lastname" />
                </div>
                <div className="mb-4 row">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Correo electrónico:</label>
                    <input type="email" className="form-control" placeholder="Inserte su correo electrónico" name="email" />
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Nombre de usuario:</label>
                    <input type="text" className="form-control" placeholder="Inserte su nombre de usuario" name="username" />
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Contraseña:</label>
                    <input type="password" className="form-control" placeholder="Inserte su contraseña" name="password" />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Entidad:</label>
                    <select className="form-select" name="typesActors">
                        {typesActors.map((actor) => (
                        <option key={actor.id} value={actor.id}>
                            {actor.type_actor}{" "}
                        </option>
                        ))}{" "}
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Descripción:</label>
                    <input className="form-control" placeholder="Inserte una breve descripción" name="description" />
                  </div>
                </div>
                <div className="mb-4 row">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example1">País:</label>
                    <select className="form-select" name="country" onChange={handleCountryChange}>
                      <option value="">Seleccione un país</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example2">Departamento:</label>
                    <select className="form-select" name="department" onChange={handleDepartmentChange}>
                      <option value="">Seleccione un departamento</option>
                      {departments.map((department) => (
                        <option key={department.id} value={department.id}>
                          {department.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3"> Ciudad:</label>
                    <select className="form-select" name="city">
                      <option value="">Seleccione una ciudad</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Contribuciones:</label>
                    <select className="form-select" name="typesActors">
                        {contributions.map((contribution) => (
                        <option key={contribution.id} value={contribution.id}>
                            {contribution.name}{" "}
                        </option>
                        ))}{" "}
                    </select>
                  </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4" > Intereses y conocimientos:</label>
                    <input className="form-control" placeholder="Inserte sus intereses y conocimientos" name="knowledge_interests" />
                  </div>
                </div>
                <div className='row'>
                  <div class="col text-start">
                    <label className="form-label fw-bold" for="form3Example4">Seleccione un foto de perfil:</label>
                    <input type="file" className="form-control" placeholder="Inserte sus nombres" />
                  </div>
                  </div>
                <div>
                  <input type="checkbox" id="cohabitation_agreement" name="cohabitation_agreement" value={userData.cohabitation_agreement} onChange={handleInputChange} required />
                  <label htmlFor="cohabitation_agreement">Acepto los términos y condiciones</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={!userData.cohabitation_agreement}>Registrarse</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Signup;