import '../../assets/styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import Connect from '../Connect';

import imgAccueil from '../../image/Pictogramme Actualités.png';
import imgFaq from '../../image/Pictogramme F.A.Q..png';
import imgInfo from '../../image/Pictogramme Production.png';
import imgMeteo from '../../image/Pictogramme Météo.png';
import imgServices from '../../image/Pictogramme Service.png';
import imgFormation from '../../image/Pictogramme Formation.png';
import imgDetachement from '../../image/Pictogramme Détachements.png';
import imgVie from "../../image/Pictogramme Vie de l'esat.png";
import imgForum from '../../image/Pictogramme Forum.png';
import imgMap from '../../image/Pictogramme Itinéraire.png';

function Header() {
  const location = useLocation();
  const isQuestionPage = location.pathname === '/question';
  const isMeteoPage = location.pathname === '/meteo';

  const categoryPages = [
    { path: '/', label: 'ACCUEIL', icon: imgAccueil },
    { path: '/question', label: 'F.A.Q.', icon: imgFaq },
    { path: '/about', label: 'INFO', icon: imgInfo },
    { path: '/meteo', label: 'METEO', icon: imgMeteo },
    { path: '/services', label: 'SERVICES', icon: imgServices },
    { path: '/formation', label: 'FORMATION', icon: imgFormation },
    { path: '/detachement', label: 'DETACHEMENT', icon: imgDetachement },
    { path: '/vie-esat', label: 'VIE ESAT', icon: imgVie },
    { path: '/forum', label: 'FORUM', icon: imgForum },
    { path: '/map', label: 'LOCALISATION', icon: imgMap },
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
          const Icon = page.icon;
          const content = (
            <>
              {Icon && <img src={Icon} alt={page.label} className="header-icon" />}
              {page.label}
            </>
          );

          return isActive ? (
            <span key={page.path} className='header-linkActive'>
              {content}
            </span>
          ) : (
            <Link key={page.path} to={page.path} className='header-link'>
              {content}
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
