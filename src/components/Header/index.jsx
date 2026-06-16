import '../../assets/styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import Connect from '../Connect';

function Header() {
  const location = useLocation();
  const isQuestionPage = location.pathname === '/question';
  const isMeteoPage = location.pathname === '/meteo';

  const categoryPages = [
    { path: '/', label: 'ACCUEIL' },
    { path: '/question', label: 'F.A.Q.' },
    { path: '/about', label: 'INFO' },
    { path: '/meteo', label: 'METEO' },
    { path: '/services', label: 'SERVICES' },
    { path: '/formation', label: 'FORMATION' },
    { path: '/detachement', label: 'DETACHEMENT' },
    { path: '/vie-esat', label: 'VIE ESAT' },
    { path: '/forum', label: 'FORUM' },
    { path: '/map', label: 'LOCALISATION' },
  ];

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
        {categoryPages.map((page) => {
          const isActive = location.pathname === page.path;
          return isActive ? (
            <span key={page.path} className='header-linkActive'>
              {page.label}
            </span>
          ) : (
            <Link key={page.path} to={page.path} className='header-link'>
              {page.label}
            </Link>
          );
        })}
      </nav>

      <div className='header-right'>
        <Connect />
        <span className='header-dots'>...</span>
      </div>
    </div>
  );
}

export default Header;
