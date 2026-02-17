import '../../assets/styles/Caterolink.scss';
import { Link, useNavigate } from 'react-router-dom';

function Caterolink({ text, color = 'blue' }) {
  const navigate = useNavigate();

  const getRoute = (text) => {
    switch(text) {
      case 'F.A.Q.': return '/question';
      case 'INFO': return '/about';
      case 'METEO': return '/meteo';
      case 'SERVICES': return '/services';
      case 'LOCALISATION': return '/map';
      default: return '/';
    }
  };

  const handleClick = (event) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    const targetRoute = getRoute(text);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    window.setTimeout(() => {
      navigate(targetRoute, {
        state: { fromCategoriesTransition: true },
      });
    }, 450);
  };

  return (
    <div className={`caterolink caterolink--${color}`}>
      <Link to={getRoute(text)} onClick={handleClick}>
        <span className='caterolink-text'>{text}</span>
      </Link>
    </div>
  );
}

export default Caterolink;
