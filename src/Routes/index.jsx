import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Categories from '../pages/Categories';
import About from '../pages/About';
import Question from '../pages/Question';
import Map from '../pages/Map';
import Meteo from '../pages/Meteo';
import Apptest from '../pages/Apptest';
import Login from '../pages/Login';
// import Services from '../pages/Services';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/about' element={<About />} />
      <Route path='/question' element={<Question />} />
      <Route path='/map' element={<Map />} />
      <Route path='/meteo' element={<Meteo />} />
      <Route path='/apptest' element={<Apptest />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
