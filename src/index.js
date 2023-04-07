import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './components/App';
import './App.css';
import Footer from './components/Footer';
import SocialFollow from './components/SocialFollow';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    <SocialFollow />
    <Footer />
  </Router>
);