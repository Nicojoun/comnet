import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'; 
import Categories from '../pages/Categories'; 
import About from '../pages/About';
import Question from '../pages/Question';
import Map from '../pages/Map';
import Apptest from '../pages/Apptest';
import Login from '../pages/Login';
// import Meteo from '../pages/Meteo'; 
// import Services from '../pages/Services'; 
import NotFound from '../pages/NotFound';

function AppRoutes() {
    return (
            <Routes>
                <Route path='/' element={<Home />} />  {/* Route pour la page d'accueil */}
                <Route path='/categories' element={<Categories />} />  {/* Route pour la page catégories */}
                <Route path='/about' element={<About />} />  {/* Route pour la page à propos */}            
                <Route path='/question' element={<Question />} />  {/* Route pour la page question */}
                <Route path='/map' element={<Map />} />  {/* Route pour la page map */}
                <Route path='/apptest' element={<Apptest />} />  {/* Route pour la page apptest */}
                <Route path='/login' element={<Login />} />  {/* Route pour la page login */}
                <Route path='*' element={<NotFound />} />  {/* Route pour la page d'erreurs */}
            </Routes>
    )
}

export default AppRoutes;
