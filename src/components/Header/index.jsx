import '../../assets/styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import Connect from '../Connect';

function Header() {
  const location = useLocation();
  const isQuestionPage = location.pathname === '/question';
  const isMeteoPage = location.pathname === '/meteo';

  return (
    <div
      className={`header${isQuestionPage ? ' header--inverse' : ''}${
        isMeteoPage ? ' header--meteo' : ''
      }`}
    >
      <div className='header-left'>
        <span className='header-chevron'>{'<'}</span>
      </div>

      <nav className='header-nav'>
        {location.pathname === '/' ? (
          <span className='header-linkActive'>ESATYPIC</span>
        ) : (
          <Link to='/' className='header-link'>ESATYPIC</Link>
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
