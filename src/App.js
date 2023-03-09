import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Editar_perfil from './components/editar_perfil/editar_perfil';


const App = () => {

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => console.log(response.data));
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/editar_perfil" element={<Editar_perfil />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;