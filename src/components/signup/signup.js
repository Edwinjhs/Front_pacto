import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/footer';
import Header from '../header/header';
import Avatar from '../img/perfil.png';
import axios from 'axios';

// function Registro() {

//     const [name_user, setName] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [city, setCity] = useState('');
//     const [entidad, setEntidad] = useState('');
//     const [hashed_password, setHashed_password] = useState('');
//     const [cohabitation_agreement, setCohabitation_agreement] = useState('');
//     const [status, setStatus] = useState('');
//     const [description, setDescription] = useState('');
//     const [knowledge_interests, setKnowledge_interests] = useState('');
//     const [forgot_password, setForgot_password] = useState('');
//     const [image_profile, setImage_profile] = useState('');
//     const [phone_number, setPhone_number] = useState('');
//     const [typesActors, setTypesActors] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/typeactor/get")
//         .then((response) => {
//             setTypesActors(response.data);
//         });
//     }, []);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const form_data = new FormData(form);
//         axios.post('http://localhost:8000/api/user/post', form_data)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     };
//     const handleTypeActorChange = (event) => {
//         setTypeActor(event.target.value);
//       };

// }
// function RegisterForm() {
//     const [selectedCountry, setSelectedCountry] = useState(null);
//     const [selectedDepartment, setSelectedDepartment] = useState(null);
//     const [selectedCity, setSelectedCity] = useState(null);
//     const [departments, setDepartments] = useState([]);
//     const [cities, setCities] = useState([]);
  
//     const handleCountryChange = (event) => {
//       const countryId = event.target.value;
//       setSelectedCountry(countryId);
//       setSelectedDepartment(null);
//       setSelectedCity(null);
//       setDepartments([]);
//       setCities([]);
//       // llamar a la función get_locations para obtener los departamentos del país seleccionado
//       fetch(`/api/locations?country=${countryId}`)
//         .then(response => response.json())
//         .then(data => {
//           setDepartments(data.departments);
//         })
//         .catch(error => console.error(error));
//     };
  
//     const handleDepartmentChange = (event) => {
//       const departmentId = event.target.value;
//       setSelectedDepartment(departmentId);
//       setSelectedCity(null);
//       setCities([]);
//       // llamar a la función get_locations para obtener las ciudades del departamento seleccionado
//       fetch(`/api/locations?country=${selectedCountry}&department=${departmentId}`)
//         .then(response => response.json())
//         .then(data => {
//           setCities(data.cities);
//         })
//         .catch(error => console.error(error));
//     };
  
//     const handleCityChange = (event) => {
//       const cityId = event.target.value;
//       setSelectedCity(cityId);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // enviar los datos de registro al backend, incluyendo el país, departamento y ciudad seleccionados
//       fetch('/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           country: selectedCountry,
//           department: selectedDepartment,
//           city: selectedCity,
//           // agregar los demás campos del formulario de registro
//         })
//       })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           País:
//           <select value={selectedCountry} onChange={handleCountryChange}>
//             <option value="">Seleccione un país</option>
//             <option value="1">Colombia</option>
//             <option value="2">Perú</option>
//             {/* agregar más opciones aquí */}
//           </select>
//         </label>
//         <label>
//           Departamento:
//           <select value={selectedDepartment} onChange={handleDepartmentChange}>
//             <option value="">Seleccione un departamento</option>
//             {departments.map(department => (
//               <option key={department.id} value={department.id}>{department.name}</option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Ciudad:
//           <select value={selectedCity} onChange={handleCityChange}>
//             <option value="">Seleccione una ciudad</option>
//             {cities.map(city => (
//               <option key={city.id} value={city.id}>{city.name}</option>
//             ))}
//           </select>
//         </label>
//         {/* agregar los demás campos del formulario de registro aquí */}
//         <button type="submit">Registrar</button>
//       </form>
//     );
//   }
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name_user: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        city: '',
        entidad: '',
        hashed_password: '',
        cohabitation_agreement: '',
        status: '',
        description: '',
        knowledge_interests: '',
        forgot_password: '',
        image_profile: '',
        phone_number: '',
        typesActors: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/typeactor/get")
        .then((response) => {
        this.setState({typesActors: response.data});
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const form_data = new FormData(form);
        axios.post('http://localhost:8000/api/user/post', form_data)
        .then((response) => {
        console.log(response);
        })
        .catch((error) => {
        console.log(error);
        });
    };

    handleTypeActorChange = (event) => {
        this.setState({typeActor: event.target.value});
    };

    render() {
        const {
          name_user,
          lastname,
          email,
          username,
          password,
          city,
          entidad,
          hashed_password,
          cohabitation_agreement,
          status,
          description,
          knowledge_interests,
          forgot_password,
          image_profile,
          phone_number,
          typesActors
        } = this.state;
    return (
                <div>
                    <Header/>
                    <main role="main" className="flex-shrink-0 mt-5 mb-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-8 col-lg-7 offset-xl-1">
                                <form>
                                    <div className="mb-4 row">
                                        <div className='col'>
                                            <h3 className="text-start fw-bold">Formulario de registro</h3>
                                        </div>
                                    </div>
                                    <form>
                                        <form>
                                            <div className="row text-start">
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="form3Example4">Nombres:</label>
                                                    <input type="text" className="form-control" placeholder="Inserte sus nombres" name="name_user"/>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="form3Example4">Apellidos:</label>
                                                    <input type="text" className="form-control" placeholder="Inserte sus apellidos" name="lastname" />
                                                </div>
                                            </div>
                                        </form>
                                        <form>
                                            <div className="row text-start">
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="form3Example4">Usuario:</label>
                                                    <input type="text" className="form-control" placeholder="Inserte su nombre de usuario" name="username"/>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label fw-bold" for="form3Example4">Contraseña:</label>
                                                    <input type="text" className="form-control" placeholder="Escriba su contraseña" name="password" />
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
                                                            {/* {typesActors.map((typeActor) => (
                                                                <option name={typeActor.id}>{typeActor.type_actor}</option>
                                                            ))} */}
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
                                            <div className='row'>
                                                <div class="col text-start">
                                                    <label className="form-label fw-bold" for="form3Example4">Seleccione un foto de perfil:</label>
                                                    <input type="file" className="form-control" placeholder="Inserte sus nombres" name="image_profile" />
                                                </div>
                                            </div>
                                            <Button variant="link" blank_ href="https://forms.office.com/r/3Vn2HPkxT9">Acepta los terminos y condiciones haciendo click aqui</Button>
                                        </form>

                                        <br></br>

                                        <Button className='m-2' variant="primary" size="lg" > Registrarse </Button>
                                    </form>
                                </form>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>

            )

        }
    //     return (
    //         <div>
    //             <Header />
    //             <div className="container-fluid">
    //                 <div className="row">
    //                     <div className="col-md-12 bg-light">
    //                         <form onSubmit={handleSubmit}>
    //                             <h2>Formulario de registro</h2>
    //                             <div className="form-group">
    //                                 <label htmlFor="name_user">Nombres</label>
    //                                 <input
    //                                 type="text"
    //                                 name="name_user"
    //                                 className="form-control"
    //                                 value={name_user}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="lastname">Apellidos</label>
    //                                 <input
    //                                 type="text"
    //                                 name="lastname"
    //                                 className="form-control"
    //                                 value={lastname}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="email">Email</label>
    //                                 <input
    //                                 type="email"
    //                                 name="email"
    //                                 className="form-control"
    //                                 value={email}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="username">Nombre de usuario</label>
    //                                 <input
    //                                 type="text"
    //                                 name="username"
    //                                 className="form-control"
    //                                 value={username}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="password">Contraseña</label>
    //                                 <input
    //                                 type="password"
    //                                 name="password"
    //                                 className="form-control"
    //                                 value={password}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="city">Ciudad</label>
    //                                 <input
    //                                 type="text"
    //                                 name="city"
    //                                 className="form-control"
    //                                 value={city}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="entidad">Entidad</label>
    //                                 <input
    //                                 type="text"
    //                                 name="entidad"
    //                                 className="form-control"
    //                                 value={entidad}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="hashed_password">Contraseña hash</label>
    //                                 <input
    //                                 type="text"
    //                                 name="hashed_password"
    //                                 className="form-control"
    //                                 value={hashed_password}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="cohabitation_agreement">Acuerdo de convivencia</label>
    //                                 <input
    //                                 type="text"
    //                                 name="cohabitation_agreement"
    //                                 className="form-control"
    //                                 value={cohabitation_agreement}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="status">Estado</label>
    //                                 <input
    //                                 type="text"
    //                                 name="status"
    //                                 className="form-control"
    //                                 value={status}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="status">Estado</label>
    //                                 <input
    //                                     type="text"
    //                                     name="status"
    //                                     className="form-control"
    //                                     value={status}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="description">Descripción</label>
    //                                 <input
    //                                     type="text"
    //                                     name="description"
    //                                     className="form-control"
    //                                     value={description}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="knowledge_interests">Intereses de conocimiento</label>
    //                                 <input
    //                                     type="text"
    //                                     name="knowledge_interests"
    //                                     className="form-control"
    //                                     value={knowledge_interests}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="forgot_password">Olvidé mi contraseña</label>
    //                                 <input
    //                                     type="text"
    //                                     name="forgot_password"
    //                                     className="form-control"
    //                                     value={forgot_password}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="image_profile">Imagen de perfil</label>
    //                                 <input
    //                                     type="text"
    //                                     name="image_profile"
    //                                     className="form-control"
    //                                     value={image_profile}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="phone_number">Número de teléfono</label>
    //                                 <input
    //                                     type="text"
    //                                     name="phone_number"
    //                                     className="form-control"
    //                                     value={phone_number}
    //                                 />
    //                             </div>
    //                             <div className="form-group">
    //                                 <label htmlFor="typeactor">Tipo de actor</label>
    //                                 <select
    //                                     name="typeactor"
    //                                     className="form-control"
    //                                     value={typeactor}
    //                                 >
    //                                     <option value="">Seleccione una opción</option>
    //                                     {typeactors.map((item, index) => (
    //                                     <option key={index} value={item.id}>
    //                                         {item.name}
    //                                     </option>
    //                                     ))}
    //                                 </select>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )               
    // }
}
export default Signup;