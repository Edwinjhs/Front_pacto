import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/login.css';
import './styles/signup.css';
import './styles/home.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';// Importing the Bootstrap 5 CSS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals();
