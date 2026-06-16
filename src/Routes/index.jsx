import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Categories from '../pages/Categories';
import About from '../pages/About';
import Question from '../pages/Question';
import Map from '../pages/Map';
import Meteo from '../pages/Meteo';
import Apptest from '../pages/Apptest';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Formation from '../pages/Formation';
import Detachement from '../pages/Detachement';
import VieDeLEsat from '../pages/VieDeLEsat';
import Forum from '../pages/Forum';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.fromCategoriesTransition) {
      return;
    }

    window.scrollTo(0, 0);

    window.setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 50);
  }, [location.key]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/about' element={<About />} />
      <Route path='/question' element={<Question />} />
      <Route path='/map' element={<Map />} />
      <Route path='/meteo' element={<Meteo />} />
      <Route path='/formation' element={<Formation />} />
      <Route path='/detachement' element={<Detachement />} />
      <Route path='/vie-esat' element={<VieDeLEsat />} />
      <Route path='/forum' element={<Forum />} />
      <Route path='/services' element={<Services />} />
      <Route path='/apptest' element={<Apptest />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
