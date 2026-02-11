import '../../assets/styles/Header.scss'; 
import logo from '../../assets/logo/logo.png';  
import { Link, useLocation } from 'react-router-dom';  
import Connect from '../Connect';

function Header() {
  const location = useLocation();
  const isQuestionPage = location.pathname === '/question'; // R�cup�ration de l'URL actuelle

  return (
    <div className={`header${isQuestionPage ? ' header--inverse' : ''}`}>

      <div className='header-left'>
        <span className='header-chevron'>{'<'}</span>
      </div>

      <nav className='header-nav'>


        {/* Si on est sur la page d'accueil, afficher du texte soulign�, sinon un lien */}
        {location.pathname === '/' ? (
          <span className='header-linkActive'>ESATYPIC</span>  // Texte soulign�
        ) : (
          <Link to='/' className='header-link'>ESATYPIC</Link>  // Lien normal
        )}


      </nav>

      <div className='header-right'>
        <Connect />
        <span className='header-dots'>...</span>
      </div>
    </div>
  );
}

export default Header;
