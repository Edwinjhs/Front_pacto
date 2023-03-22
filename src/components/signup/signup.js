import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

class Signup extends React.Component {

   render() {

       return (

           <div>
               <Header/>
               <div className="register">
              
               <div className="card">
               
                 <div className="right">
                   <h1>Registrarse</h1>
                   <form>
                     <input
                       type="text"
                       placeholder="Nombre"
                       name="nombre"
                     />
                     <input
                       type="text"
                       placeholder="Apellido"
                       name="apellido"
                     />
             
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
                     <input
                       type="text"
                       placeholder="Nombre de la entidad"
                       name="entidad"
                     />
                     <input
                       type="text"
                       placeholder="Descripción del perfil"
                       name="Dperfil"
                     />
                     <input
                       type="text"
                       placeholder="Contacto"
                       name="contacto"
                     />
                     <input
                       type="text"
                       placeholder="Ciudad"
                       name="Ciudad"
                     />
                     <input
                       type="text"
                       placeholder="Departamento"
                       name="Departamento"
                     />
                     <input
                       type="text"
                       placeholder="Pais"
                       name="Pais"
                     />
         
         
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
                     <input
                       type="password"
                       placeholder="Contraseña"
                       name="password" 
                     />


                   <button>Registrarse</button>
                    
                   <button href="/login">¿Ya tiene una cuenta? <br></br> Inciar sesión</button>
         
                   </form>


                 </div>
                
               </div>
              
         
             </div>


             <Footer/>
           </div>


       )


   }


}


export default Signup;