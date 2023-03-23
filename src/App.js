import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import axios from 'axios';

import Login from './components/login/login';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Editar_perfil from './components/editar_perfil/editar_perfil';
import Restablecer_contraseña from './components/restablecer_contraseña/restablecer_contraseña';


const App = () => {
  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => console.log(response.data));
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/editar_perfil" element={<Editar_perfil />}></Route>
          <Route path="/login" element={<Signup />}></Route>
          <Route path="/restablecer_contraseña" element={<Restablecer_contraseña />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;