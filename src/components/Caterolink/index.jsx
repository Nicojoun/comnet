import '../../assets/styles/Caterolink.scss';
import { Link } from 'react-router-dom';

function Caterolink({ text, color = 'blue' }) {
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

  return (
    <div className={`caterolink caterolink--${color}`}>
      <Link to={getRoute(text)}>
        <span className='caterolink-text'>{text}</span>
      </Link>
    </div>
  );
}

export default Caterolink;
