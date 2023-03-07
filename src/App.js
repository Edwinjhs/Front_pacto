import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';


const App = () => {

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => console.log(response.data));
  }, [])

  return (
    <div className="App">
        <Header />
        <Login />
        <Footer />
    </div>
  );

}

export default App;