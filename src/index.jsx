import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/styles/index.scss';

import Header from './components/Header'; 
import Footer from './components/Footer';

import AppRoutes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='index'> 
        <Header /> 
        <div className='index-container'>
          <AppRoutes />
        </div>  
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
