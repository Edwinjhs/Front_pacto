import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Editar_perfil from './components/editar_perfil/editar_perfil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';






const App = () => {

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => console.log(response.data));
  }, [])

  return (
    <div className="App">


        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path="" ></Route>
            <Route element={<Editar_perfil />} path="/editar_perfil" ></Route>
         </Routes>
        </BrowserRouter>
    </div>
    
        
  );

}

export default App;