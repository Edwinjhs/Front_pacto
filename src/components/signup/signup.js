import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Footer from "../footer/footer";
import Header from "../header/header";
import axios from "axios";
import Avatar from '../img/perfil.png';

function Signup() {

  const [name_user, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [typesActors, setTypesActors] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name_enti, setNameEnti] = useState("");//New
  const [contributions, setContributions] = useState([]);
  const [phone_number, setPhone_number] = useState("");//New
  const [countries, setCountries] = useState([]);
  const [contributions_text, setContributions_text] = useState("");//New
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [description, setDescription] = useState("");
  const [knowledge_interests, setKnowledge_interests] = useState("");

  //   for the terms and conditions
  const [userData, setUserData] = useState({
    cohabitation_agreement: false,
  })

  function handleSignupSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const form_data = new FormData(form);
    const formDataObj = Object.fromEntries(form_data.entries());
    axios.post("http://localhost:8000/api/user/post", formDataObj).then((response) => {
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
        <div className="">
          <div className="container h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-4 row">
                  <div className="col">
                    <h3 className="text-start fw-bold">FORMULARIO DE REGISTRO</h3>
                  </div>
                </div>
                <h4 className='fw-bold text-center'>Foto de perfil</h4>
                <div className='mb-4 mt-4 text-center'>
                  <img
                    src={Avatar}
                    height="100"
                    alt="Avatar perfil"
                    loading="lazy"
                  />
                </div>
                <div className='row text-start'>
                  <div class="col">
                    <label className="form-label fw-bold" for="form3Example4">Seleccione un foto de perfil:</label>
                    <input type="file" className="form-control" placeholder="Inserte sus nombres" />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4"> Nombres:</label>
                    <input type="text" className="form-control" placeholder="Inserte sus nombres" name="name_user" value={name_user} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Apellidos:</label>
                    <input type="text" className="form-control" placeholder="Inserte sus apellidos" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Tipo de actor social:</label>
                    <select className="form-select" name="typesActors">
                      {typesActors.map((actor) => (
                        <option key={actor.id} value={actor.id}>
                          {actor.type_actor}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Correo electrónico:</label>
                    <input type="email" className="form-control" placeholder="Inserte su correo electrónico" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Nombre de usuario:</label>
                    <input type="text" className="form-control" placeholder="Inserte su nombre de usuario" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Contraseña:</label>
                    <input type="password" className="form-control" placeholder="Inserte su contraseña" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Nombre de la entidad:</label>
                    <input className="form-control" placeholder="Inserte el nombre d ela entidad" name="name_enti" value={name_enti} onChange={(e) => setNameEnti(e.target.value)} />
                  </div>
                  <div className="col text-start">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Aportes a la comunidad:</label>
                    <select className="form-select" name="typesActors">
                      {contributions.map((contribution) => (
                        <option key={contribution.id} value={contribution.id}>
                          {contribution.name}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                </div>
                <div className="row text-start">
                  <div className="col">
                    <label className="form-label fw-bold" for="form3Example4">Contacto:</label>
                    <input type="text" className="form-control" placeholder="Contacto" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
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
                  <div className="col text-start">
                    <label className='form-label fw-bold' for="exampleFormControlTextarea1">Breve descripción de aportes a la comunidad:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={contributions_text} onChange={(e) => setContributions_text(e.target.value)} ></textarea>
                  </div>
                </div>
                <div className="row text-start">
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
                <div className="col text-start">
                  <label className="form-label fw-bold" htmlFor="form3Example3">Descripción del perfil:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" name="description" placeholder="Inserte una breve descripción" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="col text-start">
                  <label className="form-label fw-bold p" htmlFor="form3Example4" > Intereses de conocimiento:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" name="knowledge_interests" placeholder="Inserte sus intereses de conocimientos" value={knowledge_interests} onChange={(e) => setKnowledge_interests(e.target.value)}></textarea>
                </div>
                <div>
                  <input type="checkbox" id="cohabitation_agreement" name="cohabitation_agreement" value={userData.cohabitation_agreement} onChange={handleInputChange} />
                  <label className="ms-2 fw-bold mt-3" htmlFor="cohabitation_agreement">Acepto los términos y condiciones.</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3 mb-0" disabled={!userData.cohabitation_agreement}>Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Signup;