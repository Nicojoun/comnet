import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import './assets/styles/index.scss';

import Header from './components/Header'; 
import Footer from './components/Footer';

import AppRoutes from './Routes';

function AppLayout() {
  const location = useLocation();
  const isQuestionPage = location.pathname === '/question';

  return (
    <div className={`index${isQuestionPage ? ' index--question' : ''}`}>
      <Header />
      <div className='index-container'>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppLayout />
    </Router>
  </React.StrictMode>
);
